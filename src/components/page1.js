import { lang } from '../lang'
import style from './page1.module.css'

/**
 *
 * @param {HTMLElement} root
 */
function page1(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const [title1, title2, description, btnContainer] = [0, 0, 0, 0].map((n) =>
		document.createElement('div')
	)
	container.append(title1, title2, description, btnContainer)

	title1.className = style.title1
	title2.className = style.title2
	description.className = style.description
	btnContainer.className = style.btnContainer

	title1.innerText = lang.lang === 'cn' ? '传送内宇宙\n\r' : 'Portalverse Network'
	title2.innerText = lang.lang === 'cn' ? '去中心化云游戏\n\r' : 'Decentralised\nCloud Gaming'
	description.innerText =
		lang.lang === 'cn'
			? '利用分布式和未充分利用的计算能力，形成元宇宙的计算基础设施层\n\r'
			: 'Harnessing Distributed and Underutilised Computing Powers to form a Computing\nInfrastructure Layer for the Metaverse'

	const btn1 = document.createElement('div')
	const btn2 = document.createElement('div')
	btnContainer.append(btn1, btn2)
	btn1.className = style.btn1
	btn2.className = style.btn2
	btn1.innerHTML = lang.lang === 'cn' ? '加入 discord' : 'Join Discord'
	btn2.innerHTML = lang.lang === 'cn' ? '阅读白皮书&#xe900;' : 'Read Whitepaper &#xe900;'

	btn1.addEventListener('click', (ev) => {
		window.open('https://discord.gg/rE328zG7pS', '_blank')
	})

	btn2.addEventListener('click', (ev) => {
		window.open('https://medium.com/@PORTALVERSE_NETWORK', '_blank')
	})
}
export { page1 }
