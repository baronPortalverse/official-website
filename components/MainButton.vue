<template>
	<div class="py-2">
		<a
			v-if="custom"
			class="button"
			target="_blank"
			rel="noopener noreferrer"
			:href="link"
		>
			<slot></slot>
		</a>
		<nuxt-link v-else :to="link" class="button">
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

	padding: 1.25rem 4.375rem;
	color: var(--color-bg);

	border-radius: 20px;
	transition: margin-left 0.4s, box-shadow 0.4s;
}

@media only screen and (max-width: 768px) {
	.button {
		font-size: 0.8rem;
	}
}

.button:hover {
	color: var(--color-bg);
}

.button > span > span {
	height: 1rem;
	margin-left: 0rem;
	transition: all 0.4s;
}

.button:hover > span > span {
	height: 1rem;
	margin-left: 0.8rem;
}
</style>