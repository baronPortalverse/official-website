import style from './page3.module.css'
import pic1 from '../assets/imgs/cube1.png'
import pic2 from '../assets/imgs/cube2.png'
import pic3 from '../assets/imgs/cube3.png'
import pic4 from '../assets/imgs/cube4.png'
import { lang } from '../lang'
/**
 *
 * @param {HTMLElement} root
 */
function page3(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const title = document.createElement('div')
	title.className = style.title
	container.appendChild(title)

	title.innerText = lang.lang === 'cn' ? '特点' : 'Features'

	const boxContainer = document.createElement('div')
	boxContainer.className = style.boxContainer
	container.appendChild(boxContainer)

	const features = [
		{
			icon: pic1,
			name: lang.lang === 'cn' ? '点对点的游戏串流' : 'P2P Game Streaming',
			des:
				lang.lang === 'cn'
					? '去中心化的游戏渲染将导致更低的延迟，并使服务能够随着需求\n而扩展。'
					: 'Decentralised rendering of games will lead to lower\nlatency and the ability for the service to scale with\ndemand.',
		},
		{
			icon: pic2,
			name: lang.lang === 'cn' ? '优化的体验' : 'Optimized Experience',
			des:
				lang.lang === 'cn'
					? '开发人员可以专注于高质量的元宇宙体验，不受硬件限制，并拥\n有一致的开发工作流程。'
					: 'Developers can focus quality metaverse experiences\nwithout hardware limitations and a consistent\ndevelopment workflow.',
		},
		{
			icon: pic3,
			name: lang.lang === 'cn' ? '消除硬件限制' : 'Removing Hardware Limits',
			des:
				lang.lang === 'cn'
					? '云端串流时，设备限制不再是一个问题。复杂的体验是在云中呈\n现的。'
					: 'Device constraints are no longer an issue when cloud\nstreaming. Complex experiences are rendered in the\ncloud.',
		},
		{
			icon: pic4,
			name: lang.lang === 'cn' ? '现有的强有力的网络' : 'Existing Powerful Network',
			des:
				lang.lang === 'cn'
					? '最常见的用于采矿的显卡是为游戏建造的。使得它们在没有重大\n改变的情况下就能达到目的。'
					: 'The most common graphics cards being used for mining\nwere built for gaming. Making them fit for purpose without\nsignificant changes.',
		},
	]

	features.forEach((f) => {
		const box = document.createElement('div')
		box.className = style.box
		boxContainer.appendChild(box)

		const icon = document.createElement('img')
		const title = document.createElement('div')
		const des = document.createElement('div')

		box.append(icon, title, des)

		icon.src = f.icon
		title.innerText = f.name
		des.innerText = f.des

		icon.className = style.icon
		title.className = style.boxName
		des.className = style.des
	})
}

export { page3 }
