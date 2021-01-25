<template>
	<li>
		<h2>{{ name }}</h2>
		<button @click="toggleDetails">{{ detailsIsVisible ? 'Hide' : 'Show'}} Details</button>
		<ul v-if="detailsIsVisible">
			<li><strong>Phone:</strong> {{ phoneNumber }}</li>
			<li><strong>Email:</strong> {{ emailAddress }}</li>
		</ul>
	</li>
</template>
	
<script>
export default {
	props: [
		'name',
		'phoneNumber',
		'emailAddress'
	],
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
