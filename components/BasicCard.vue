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
}
</style>