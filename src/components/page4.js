import style from './page4.module.css'

/**
 *
 * @param {HTMLElement} root
 */
function page4(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const [title1, title2, boxContainer] = [0, 0, 0].map((n) => document.createElement('div'))
	container.append(title1, title2, boxContainer)

	title1.className = style.title1
	title2.className = style.title2
	boxContainer.className = style.boxContainer

	title1.innerText = 'Milestones'
	title2.innerText = 'Roadmap to Market'

	const roads = [
		{
			content: 'Complete P2P\nStreaming For\nBeta Testing',
			time: 'Q1 2022',
		},
		{
			content: 'Beta Client App\nfor Streaming\nGames',
			time: 'Q2 2022',
		},
		{
			content: 'Airdrop\nCommunity\nToken $VOP',
			time: 'Q3 2022',
		},
		{
			content: 'Airdrop\nCommunity\nToken $VOP',
			time: 'Q3 2022',
		},
	]

	roads.forEach((r) => {
		const box = document.createElement('div')
		box.className = style.box
		boxContainer.appendChild(box)

		const content = document.createElement('div')
		const time = document.createElement('div')
		box.append(content, time)

		content.className = style.content
		time.className = style.time

		content.innerText = r.content
		time.innerText = r.time
	})
}
export { page4 }
