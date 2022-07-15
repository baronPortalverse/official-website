<template>
	<nav>
		<div class="container p-3">
			<div class="d-flex align-items-center">
				<div class="logo">
					<img src="~/assets/images/logo-tagline.png" alt="" />
				</div>

				<div id="links" class="ms-auto">
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
export default {}
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
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
}

li {
	float: left;
}

li a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

li a:hover:not(.active) {
	background-color: #111;
}

.active {
	background-color: #04aa6d;
}
</style>