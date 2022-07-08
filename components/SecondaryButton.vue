<template>
	<div class="py-2">
		<a class="button" target="_blank" rel="noopener noreferrer" :href="link">
			<slot></slot>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '/about',
		},
	},
}
</script>

<style scoped>
.button {
	display: inline-block;

	line-height: 100%;
	background: transparent;

	margin: 0 1rem;
	font-weight: bold;
	text-decoration: none;

	color: var(--color-text-primary);

	border-radius: 20px;

	box-shadow: none;
	transition: margin-left 0.4s, box-shadow 0.4s;
}

@media only screen and (max-width: 768px) {
	.button-secondary {
		/* font-size: 0.8rem; */
	}
}

.button-secondary:hover {
	color: var(--color-text-primary);
}

.button-secondary > span > span {
	height: 1rem;
	margin-left: 0rem;

	fill: var(--color-text-primary);

	transition: all 0.4s;
}

.button-secondary:hover > span > span {
	height: 1rem;
	margin-left: 0.8rem;
}
</style>