<template>
	<main>
		<!-- <img
			style="position: absolute; top: 0px; z-index: -1; width: 100vw"
			src="~/assets/images/top-section-bloom.svg"
			alt=""
		/> -->
		<div
			style="position: absolute; top: 0px; z-index: -1; width: 100vw"
			class="bloom-group"
		>
			<img
				class="bloom"
				style="position: absolute; top: 0px; left: 0px"
				src="~/assets/images/bloom-left.svg"
				alt=""
			/>

			<img
				class="bloom"
				style="position: absolute; top: 0px; right: 0px"
				src="~/assets/images/bloom-right.svg"
				alt=""
			/>

			<img
				id="controler1"
				style="position: absolute; top: 50vh; left: 0px"
				src="~/assets/images/controler.png"
				alt=""
			/>

			<img
				id="controler2"
				style="position: absolute; top: 15vh; right: 0px"
				src="~/assets/images/controler2.png"
				alt=""
			/>
		</div>
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
					<h5 id="subheading" class="text-center shimmer-color">
						Portalverse Network
					</h5>
					<h1 id="header" class="text-center shimmer-color">
						Decentralised Cloud Gaming
					</h1>
					<h5 id="about" class="text-center py-2">
						Harnessing Distributed and Underutilised Computing Powers to form a
						Computing Infrastructure Layer for the Metaverse
					</h5>
					<div class="d-flex flex-wrap justify-content-center my-5">
						<main-button
							id="projects"
							custom="true"
							link="https://discord.com/invite/rE328zG7pS"
							>Join Discord</main-button
						>

						<secondary-button
							id="showreels"
							custom="true"
							link="https://medium.com/@PORTALVERSE_NETWORK"
							>Learn More</secondary-button
						>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import SplitType from 'split-type'

export default {
	name: 'IndexPage',
	transition: {
		name: 'IndexPage',
		appear: true,
		css: true,
		enter(el, done) {
			// Title definitions

			const about = new SplitType('#about', {
				types: 'words',
			})

			const buttons = document.querySelectorAll('.button')
			const blooms = document.querySelectorAll('.bloom')
			const control1 = document.getElementById('controler1')
			const control2 = document.getElementById('controler2')

			// console.log(cards)
			// animation timeline for headers
			this.headlineTimeLine = this.$gsap.timeline({ onComplete: done })
			this.headlineTimeLine

				.from(about.words, {
					opacity: 0,
					duration: 1,
					y: '-20%',
					stagger: { amount: 0.2 },

					ease: 'power2.out',
				})
				.from(blooms, {
					autoAlpha: 0,
					y: '-50%',
					duration: 0.4,
					ease: 'power2.out',
				})
				.from(
					buttons,
					{
						autoAlpha: 0,
						y: '-5%',
						duration: 1,
						stagger: { amount: 0.2 },
						ease: 'power2.out',
					},
					'<'
				)
				.from(
					control1,
					{
						opacity: 0,
						x: '-20%',
						duration: 0.4,
						stagger: { amount: 0.2 },
						ease: 'power2.out',
					},
					'<'
				)
				.from(
					control2,
					{
						opacity: 0,
						x: '20%',
						duration: 0.4,
						stagger: { amount: 0.2 },
						ease: 'power2.out',
					},
					'<'
				)

			// project section animations
			// const timelineProjects = this.$gsap.timeline()
			// timelineProjects
		},
		leave(el, done) {
			// projects
			// const projects = document.querySelectorAll('.notSelected')
			// this.$gsap.timeline({ onComplete: done }).to(projects, {
			// 	opacity: 0,
			// 	duration: 0.4,
			// 	ease: 'power2.out',
			// 	stagger: { duration: 0.2 },
			// })
			// .to('.chosen', {
			// 	scale: 1.1,
			// 	duration: 0.6,
			// 	ease: 'power2.out',
			// })
		},
	},
	data() {
		return {
			headlineTimeLine: null,
		}
	},
}
</script>

<style scoped>
section {
	min-height: 100vh;
}

@media only screen and (max-width: 768px) {
	#controler1,
	#controler2 {
		opacity: 0 !important;
	}
}
</style>
