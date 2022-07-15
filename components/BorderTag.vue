<template>
	<small class="btn-gradient-2 p-3">
		<slot> </slot>
	</small>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-gradient-2 {
	line-height: 4rem;

	background: linear-gradient(var(--color-bg), var(--color-bg)) padding-box,
		linear-gradient(90deg, #da59ff 0%, #7265ff 34.38%, #6ab4ff 100%) border-box;
	border-radius: 50em;
	border: 4px solid transparent;
}
</style>