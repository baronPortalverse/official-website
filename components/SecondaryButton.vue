<template>
	<div class="py-2">
		<a
			v-if="custom"
			class="button-secondary"
			target="_blank"
			rel="noopener noreferrer"
			:href="link"
		>
			<slot></slot>
			<span>
				<span class="spacer"></span>

				<img
					style="height: 1em; margin-bottom: 0.1rem; fill: white"
					src="~/assets/images/arrow-right.svg"
					alt=""
				/> </span
		></a>
		<nuxt-link v-else :to="link" class="button-secondary">
			<span v-if="direction === 'left'">
				<img
					style="height: 1em; margin-bottom: 0.1rem; transform: rotate(180deg)"
					src="~/assets/images/arrow-right.svg"
					alt=""
				/>
				<span class="spacer"></span>
			</span>
			<slot></slot>
			<span v-if="direction === 'right'">
				<span class="spacer"></span>

				<img
					style="height: 1em; margin-bottom: 0.1rem"
					src="~/assets/images/arrow-right.svg"
					alt=""
				/>
			</span>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '/about',
		},
		direction: {
			type: String,
			default: 'right',
		},
		custom: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style>
.button-secondary {
	display: inline-block;

	line-height: 100%;
	/* background: transparent; */

	margin: 0 1rem;
	font-weight: bold;
	text-decoration: none;

	border: none;
	font-size: 1.125rem;
	font-weight: 700;

	padding: 1.25rem 4.375rem;
	color: var(--color-text-primary);

	border-radius: 20px;
	transition: margin-left 0.4s, box-shadow 0.4s;
}

@media only screen and (max-width: 768px) {
	.button-secondary {
		font-size: 0.8rem;
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