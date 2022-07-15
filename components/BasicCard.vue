<template>
	<div class="card my-2 my-lg-0">
		<slot></slot>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
	background: rgba(22, 28, 36, 0.75);
	border: 1px #342a38 solid;
	padding: 2.5rem;
	border-radius: 1.25rem;
	transform: translate(0px, 0px);
	box-shadow: 0px 0px 0px 0px #342a38;
	transition: all 0.4s;
}

.card:hover {
	box-shadow: 0px 2px 10px 0px rgba(165, 165, 165, 0.1);

	transform: translate(0px, -4px);
}
</style>