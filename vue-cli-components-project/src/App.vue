<template>
	<section>
		<h2>My fiends</h2>
		<ul>
			<li>
				<friend-contact></friend-contact>
				<friend-contact></friend-contact>
			</li>
		</ul>
	</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
	data() {
		return {
			friends: [
				{
					id: 'viktor',
					name: 'Viktor Ivanov',
					phone: '8987 264 2354',
					email: 'viktor@localhost.com'
				},
				{
					id: 'maxim',
					name: 'Maxim Petrov',
					phone: '8941 846 1234',
					email: 'maxim@localhost.com'
				}
			]
		}
	}
};
</script>