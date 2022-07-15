<template>
	<div class="card">
		<div :style="{ backgroundImage: `url(${image})` }" class="card-img"></div>
		<div class="card-contents">
			<a :href="link" target="_blank" rel="noopener noreferrer">
				<slot></slot>
				<small
					>Read More <img src="~/assets/images/arrow-right.svg" alt=""
				/></small>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: 'https://source.unsplash.com/340x250/?investing',
		},
		link: {
			type: String,
			default: 'https://megaphone.link/ARN7752415476',
		},
	},
}
</script>

<style scoped>
.card {
	border: 1px #342a38 solid;
	border-radius: 1.25rem;
	transform: translate(0px, 0px);
	box-shadow: 0px 0px 0px 0px #342a38;
	background: rgba(22, 28, 36, 0.75);

	/* max-width: calc(var(--card-size) * 0.85); */
	min-height: var(--card-size);

	text-decoration: none;
	color: var(--color-text-primary);

	transition: all 0.4s;
}

.card:hover {
	transform: translate(0px, -4px);

	box-shadow: 0px 2px 10px 0px rgba(165, 165, 165, 0.1);
}

a {
	text-decoration: none;
	color: var(--color-text-primary);
}

.card-img {
	height: calc(var(--card-size) * 0.625);
	background: url('https://source.unsplash.com/340x250/?investing'), #c4c4c4;
	background-position: center;
	background-size: cover;

	border-radius: 20px 20px 0px 0px;
}

.card-contents {
	padding: 1.2rem 1.6rem;
	border-radius: 0px 0px 20px 20px;
}

.subtitle {
	font-weight: 500;
	font-size: 1em;
	color: var(--color-text-secondary);
}

.card-contents .subtitle,
.title {
	margin: 0.4em 0;
}
</style>