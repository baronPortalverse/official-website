<template>
	<nav id="navigation">
		<div class="container p-3">
			<div class="d-flex align-items-center">
				<div class="logo">
					<img src="~/assets/images/logo-tagline.png" alt="" />
				</div>

				<div id="links" class="ms-auto">
        	<a
						class="px-2"
						href="https://github.com/Portalvserse-Network"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/assets/images/icons/github.svg" alt="Github" />
					</a>
					<a
						class="px-2"
						href="https://medium.com/@PORTALVERSE_NETWORK"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/assets/images/icons/medium.svg" alt="Medium" />
					</a>
					<a
						class="px-2"
						href="https://discord.com/invite/rE328zG7pS"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/assets/images/icons/discord.svg" alt="Discord" />
					</a>
					<a
						class="px-2"
						href="https://twitter.com/Portalverse_Net"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/assets/images/icons/twitter.svg" alt="Twitter" />
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	mounted() {
		this.$gsap.from('#navigation', {
			opacity: 0,
			y: '-20%',
			delay: 0.4,
			duration: 1,
			ease: 'expo',
		})
	},
}
</script>

<style scoped>
nav {
	position: fixed;
	top: 0px;
	z-index: 10;
	width: 100vw;

	background: linear-gradient(
		180deg,
		#1717177a 22.92%,
		rgba(23, 23, 23, 0) 100%
	);
	mix-blend-mode: normal;
	backdrop-filter: blur(20px);
}

#links a {
	display: inline-block;
	color: var(--color-text-primary);
	text-align: center;
	text-decoration: none;
	transform: scale(1);
	transition: all 0.4s;
}

#links a:hover {
	transform: scale(1.2);
}

/* mobile css */

@media only screen and (max-width: 768px) {
	.logo {
		max-width: 50vw;
	}
}
</style>
