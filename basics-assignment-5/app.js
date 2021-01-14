const app = Vue.createApp({
	data() {
		return {
			inputValue: '',
			tasks: [],
			tasksIsVIsible: true
		}
	},
	computed: {
		buttonText() {
			return this.tasksIsVIsible ? 'Hide List' : 'Show List';
		}
	},
	methods: {
		addTask() {
			this.tasks.push(this.inputValue);
		},
		toggleTaskLisk() {
			this.tasksIsVIsible = !this.tasksIsVIsible;
		}
	}
});

app.mount('#assignment');