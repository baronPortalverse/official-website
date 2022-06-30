import style from './page2.module.css'

/**
 *
 * @param {HTMLElement} root
 */
function page2(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const [title1, title2, description, boxContainer] = [0, 0, 0, 0].map((n) =>
		document.createElement('div')
	)
	container.append(title1, title2, description, boxContainer)

	title1.className = style.title1
	title2.className = style.title2
	description.className = style.description
	boxContainer.className = style.boxContainer

	title1.innerText = 'Our Vision'
	title2.innerText = 'Community Driven Game\nStreaming for the\nMetaverse'
	description.innerText =
		'Allow gamers to use any device they want to play\ndemanding games and allow users with miners or domant\ncomputers to particplate in the network and be rewarded'

	const box1 = document.createElement('div')
	const box2 = document.createElement('div')
	box1.className = style.box
	box2.className = style.box
	boxContainer.append(box1, box2)

	box1.innerHTML = `
    <div class=${style.boxTitle}>Players</div>
    <div class=${style.underline1}></div>
    <div class=${style.boxContent}>Play with content in the metaverse of their terms without hardware limitations or latency issues</div>
    `

	box2.innerHTML = `
    <div class=${style.boxTitle}>Miners</div>
    <div class=${style.underline2}></div>
    <div class=${style.boxContent}>Rewards for utilizing dormant hardware or repurposing mining resources to support the network.</div>
    `
}
export { page2 }
