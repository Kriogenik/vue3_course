<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
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
	/* Варианты записей входных параметров */
	// props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
	props: {
		// Пример валидации входных параметров
		id: {
			type: String,
			required: true
		},
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
			// 	// Валидация через строчный параметр
			// 	return value === '1' || value === '0';
			// }
		}
	},
	/* Варианты записей пользовательских событий */
	// emits: ['toggle-favorite'],
	emits: {
		// Валидация пользовательского события
		'toggle-favorite': function(id) {
			if (id) {
				return true;
			} else {
				console.warn('ID is missing');
				return false;
			}
		}
	},
	data() {
		return {
			detailsIsVisible: false
		};
	},
	methods: {
		toggleDetails() {
      this.detailsIsVisible = !this.detailsIsVisible;
		},
		toggleFavorite() {
			// Переключение и присваивание строчного параметра для валидации
			// if (this.friendIsFavorite === '1') {
			// 	this.friendIsFavorite = '0'
			// } else {
			// 	this.friendIsFavorite = '1'
			// }

			// Переключение через пользовательское событие
			this.$emit('toggle-favorite', this.id);
		}
	}
};
</script>
