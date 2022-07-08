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

<style>
.button {
	display: inline-block;

	line-height: 100%;
	background: var(--color-text-primary);

	margin: 0 1rem;
	font-weight: bold;
	text-decoration: none;

	font-size: 1.125rem;
	font-weight: 700;
	border: none;
	/* letter-spacing: 2.5px; */

	padding: 1.5rem 4.8rem;
	color: var(--color-bg);

	box-shadow: 0px 0px 20px 1px rgb(150, 150, 150, 0.15);
	border-radius: 20px;
	transition: box-shadow 0.4s;
}

@media only screen and (max-width: 768px) {
	.button {
		/* font-size: 0.8rem; */
	}
}

.button:hover {
	box-shadow: 0px 0px 20px 1px rgb(230, 230, 230, 0.3);

	color: var(--color-bg);
}
</style>