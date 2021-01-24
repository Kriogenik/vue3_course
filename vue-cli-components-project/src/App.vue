<template>
	<section>
		<h2>My fiends</h2>
		<ul>
			<li></li>
		</ul>
	</section>
</template>

<script>
export default {
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