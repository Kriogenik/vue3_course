<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">{{ detailsIsVisible ? 'Hide' : 'Show'}} Details</button>
		<ul v-if="detailsIsVisible">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		</ul>
	</li>
</template>
	
<script>
export default {
	data() {
		return {
			detailsIsVisible: false,
      friend: {
        id: 'viktor',
				name: 'Viktor Ivanov',
				phone: '8987 264 2354',
				email: 'viktor@localhost.com'
      }
		};
	},
	methods: {
		toggleDetails() {
      this.detailsIsVisible = !this.detailsIsVisible
    }
	}
};
</script>
