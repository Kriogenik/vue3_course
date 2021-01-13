const app = Vue.createApp({
	data() {
		return {
			userInput: '',
			userInputEnter: ''
		}
	},
	methods: {
		showAlert() {
			alert('Hello World!');
		},
		userInputValue(event) {
			this.userInput = event.target.value;
		},
		userInputEnterValue(event) {
			this.userInputEnter = event.target.value;
		}
	}
});

app.mount('#assignment');