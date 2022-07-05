import { lang } from '../lang'
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

	title1.innerText = lang.lang === 'cn' ? '愿景' : 'Our Vision'
	title2.innerText =
		lang.lang === 'cn'
			? '社区驱动的元宇宙游戏\n流媒体'
			: 'Community Driven Game\nStreaming for the\nMetaverse'
	description.innerText =
		lang.lang === 'cn'
			? '允许游戏玩家使用任何他们想要的设备来玩高质量的游戏，并允\n许拥有矿工软件或主控计算机的用户参与网络并获得奖励。'
			: 'Allow gamers to use any device they want to play\ndemanding games and allow users with miners or domant\ncomputers to particplate in the network and be rewarded'

	const box1 = document.createElement('div')
	const box2 = document.createElement('div')
	box1.className = style.box
	box2.className = style.box
	boxContainer.append(box1, box2)

	box1.innerHTML = `
    <div class=${style.boxTitle}>${lang.lang === 'cn' ? '玩家' : 'Players'}</div>
    <div class=${style.underline1}></div>
    <div class=${style.boxContent}>${
		lang.lang === 'cn'
			? '在没有硬件限制或延迟问题的情况下，在他们<br/>的应有的设备条件下畅游元宇宙'
			: 'Play with content in the metaverse of their terms without hardware limitations or latency issues'
	}</div>
    `

	box2.innerHTML = `
    <div class=${style.boxTitle}>${lang.lang === 'cn' ? '矿工' : 'Miners'}</div>
    <div class=${style.underline2}></div>
    <div class=${style.boxContent}>${
		lang.lang === 'cn'
			? '利用休眠的硬件或重新利用采矿资源来支持网<br/>络而获得奖励 '
			: 'Rewards for utilizing dormant hardware or repurposing mining resources to support the network.'
	}</div>
    `
}
export { page2 }
