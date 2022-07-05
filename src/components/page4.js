import { lang } from '../lang'
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

	title1.innerText = lang.lang === 'cn' ? '里程碑' : 'Milestones'
	title2.innerText = lang.lang === 'cn' ? '市场路线图' : 'Roadmap to Market'

	const roads = [
		{
			content:
				lang.lang === 'cn'
					? '完成点对点的串\n流测试'
					: 'Complete P2P\nStreaming For\nBeta Testing',
			time: 'Q1 2022',
		},
		{
			content:
				lang.lang === 'cn'
					? '游戏串流的测试\n版客户端应用'
					: 'Beta Client App\nfor Streaming\nGames',
			time: 'Q2 2022',
		},
		{
			content: lang.lang === 'cn' ? '空投社区代币\n$VOP' : 'Airdrop\nCommunity\nToken $VOP',
			time: 'Q3 2022',
		},
		{
			content:
				lang.lang === 'cn'
					? 'Airdrop Community\nToken $VOP'
					: 'Consensus Proof of\nStreaming(PoSr)\nTesting',
			time: 'Q4 2022',
		},
		{
			content:
				lang.lang === 'cn'
					? 'Airdrop Community\nToken $VOP'
					: 'Deploy Cloud Gaming\nEdge Nodes\nin SEA',
			time: 'Q1 2023',
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
