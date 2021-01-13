const app = Vue.createApp({
	data() {
		return {
			name: 'Evgeniy',
			age: 28,
			imgURL: 'https://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'
		}
	},
	methods: {
		ageInYears() {
			return this.age + 5;
		},
		randomNumber() {
			return Math.random()
		}
	}
});

app.mount('#assignment');