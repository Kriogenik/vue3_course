const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			classVisible: true,
			inputColor: ''
		}
	},
	computed: {
		paraHidden() {
			return {
				user1: this.inputClass === 'user1',
				user2: this.inputClass === 'user2',
				visible: this.classVisible,
				hidden: !this.classVisible
			}
		}
	},
	methods: {
		toggleClassVisible() {
			this.classVisible = !this.classVisible;
		}
	}
});

app.mount('#assignment');