function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
	data() {
		return {
			monsterHealth: 100,
			playerHealth: 100,
			currentRound: 0,
			winner: null,
			messagesLog: []
		}
	},
	computed: {
		monsterHealthStyles() {
			if (this.monsterHealth < 0) {
				return {width: '0%'};
			}
			return {width: this.monsterHealth + '%'};
		},
		playerHealthStyles() {
			if (this.playerHealth < 0) {
				return {width: '0%'};
			}
			return {width: this.playerHealth + '%'};
		},
		useSpecialAttack() {
			return this.currentRound % 3 !== 0;
		}
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = 'Draw';
			} else if (value <= 0) {
				// Player lost
				this.winner = 'Monster';
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'Draw';
			} else if (value <= 0) {
				// Monster lost
				this.winner = 'Player';
			}
		}
	},
	methods: {
		newGame() {
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.messagesLog = [];
		},
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomNumber(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomNumber(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);
		},
		specialAttackMonter() {
			this.currentRound++;
			const attackValue = getRandomNumber(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'special-attack', attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomNumber(8, 18);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLogMessage('player', 'heals', healValue);
			this.attackPlayer();
		},
		surrender() {
			this.winner = 'Monster';
		},
		addLogMessage(who, what, value) {
			this.messagesLog.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value
			});
		}
	}
});

app.mount('#game');