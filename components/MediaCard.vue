<template>
	<a :href="link" target="_blank" rel="noopener noreferrer" class="card">
		<div :style="{ backgroundImage: `url(${image})` }" class="card-img">
			<!-- <div class="status-chip">{{ type }}</div> -->
		</div>
		<div class="card-contents">
			<h3 class="title">{{ title }}</h3>
			<!-- <div class="chips">
				<div v-for="chip in chips" :key="chip" class="chip">{{ chip }}</div>
			</div> -->
		</div>
	</a>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'Podcast',
		},
		title: {
			type: String,
			default: 'Can You Invest While In Debt?',
		},
		subtitle: {
			type: String,
			default: 'Equity Mates',
		},
		chips: {
			type: Array,
			default: () => [
				'Good for getting started',
				'Investing',
				'Debt',
				'My Best Self',
			],
		},
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
	background: var(--color-card-bg);
	/* Light Shadow */
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
	border-radius: 20px;

	max-width: calc(var(--card-size) * 0.85);
	min-height: var(--card-size);

	border: none;
	margin: 1em;

	text-decoration: none;
	color: var(--color-text-primary);

	transform: translate(0px, 0px);
	transition: transform 0.4s, box-shadow 0.4s;
}

.card:hover {
	box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
	transform: translate(0px, -4px);
}

.card-img {
	height: calc(var(--card-size) * 0.625);
	background: url('https://source.unsplash.com/340x250/?investing'), #c4c4c4;
	background-position: center;
	background-size: auto;

	border-radius: 20px 20px 0px 0px;
}

.card-contents {
	margin-top: 0.5em;
	padding: 0.8em 1.6em;
}

.subtitle {
	font-weight: 500;
	font-size: 1em;
	color: var(--color-text-secondary);
}

.title {
	font-weight: 600;

	font-size: 1.5em;
}

.card-contents .subtitle,
.title {
	margin: 0.4em 0;
}

.chips {
	margin-top: 1.5em;

	display: flex;
	flex-flow: row wrap;
}

.status-chip {
	position: absolute;
	top: calc(var(--card-size) * 0.5);
	margin: 0 1.6em;
	text-transform: uppercase;

	border-radius: 20px;
	background: var(--color-primary);
	color: var(--color-text-white);
	padding: 0.3em 0.6em;
}

.chip {
	margin-right: 0.8em;
	margin-bottom: 0.8em;

	border-radius: 20px;
	background: var(--color-incomplete-gray);
	color: var(--color-text-secondary);
	padding: 0.3em 0.6em;
}
</style>