<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : ''}}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
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
		'emailAddress',
		'isFavorite'
	],
	data() {
		return {
			detailsIsVisible: false,
      friend: {
        id: 'viktor',
				name: 'Viktor Ivanov',
				phone: '8987 264 2354',
				email: 'viktor@localhost.com'
			},
			/* Добавляем новое свойство для изменения
			значения (состояния), полученного из props */
			friendIsFavorite: this.isFavorite
		};
	},
	methods: {
		toggleDetails() {
      this.detailsIsVisible = !this.detailsIsVisible
		},
		toggleFavorite() {
			if (this.friendIsFavorite === '1') {
				this.friendIsFavorite = '0'
			} else {
				this.friendIsFavorite = '1'
			}
		}
	}
};
</script>
