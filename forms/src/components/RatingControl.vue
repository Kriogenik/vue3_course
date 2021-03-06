<template>
	<ul>
		<li><button type="button">Poor</button></li>
		<li><button type="button">Average</button></li>
		<li><button type="button">Great</button></li>
	</ul>
</template>

<style scoped>
ul {
	display: flex;
	margin: 0.5rem 0;
	padding: 0;
	list-style: none;
}

li {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 1rem;
	padding: 1rem;
	border: 1px solid #ccc;
}

button {
	font: inherit;
	border: none;
	background-color: transparent;
	cursor: pointer;
}
</style>