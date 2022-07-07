<template>
	<main>
		<img
			style="position: absolute; top: 0px; z-index: -1; width: 100vw"
			src="~/assets/images/top-section-bloom.svg"
			alt=""
		/>

		<section class="container" style="z-index: 5">
			<div
				class="
					vh-100
					row
					justify-content-center
					align-content-center
					py-5
					px-2 px-md-0
				"
			>
				<div class="col-lg-7">
					<h5 class="text-center shimmer-color">Portalverse Network</h5>
					<h1 id="header" class="text-center shimmer-color">
						Decentralised Cloud Gaming
					</h1>
					<h5 id="subheading" class="text-center py-2">
						Harnessing Distributed and Underutilised Computing Powers to form a
						Computing Infrastructure Layer for the Metaverse
					</h5>
					<div class="d-flex flex-wrap justify-content-center my-5">
						<main-button
							custom="true"
							id="projects"
							link="https://discord.com/invite/rE328zG7pS"
							>Join Discord</main-button
						>

						<secondary-button
							custom="true"
							id="showreels"
							link="https://medium.com/@PORTALVERSE_NETWORK"
							>Read Whitepaper</secondary-button
						>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'IndexPage',
}
</script>

<style scoped>
section {
	min-height: 100vh;
}
</style>
