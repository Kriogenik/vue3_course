<template>
	<li>
		<h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : ''}}</h2>
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
	// props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
	props: {
		name: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true
		},
		emailAddress: {
			type: String,
			required: true
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false
			// validator: function(value) {
			// 	return value === '1' || value === '0';
			// }
		}
	},
	data() {
		return {
			detailsIsVisible: false,
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
			// if (this.friendIsFavorite === '1') {
			// 	this.friendIsFavorite = '0'
			// } else {
			// 	this.friendIsFavorite = '1'
			// }
			this.friendIsFavorite = !this.friendIsFavorite
		}
	}
};
</script>
