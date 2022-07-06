import style from './page5.module.css'
import p1 from '../assets/imgs/octopus_logo_white 1.png'
import p2 from '../assets/imgs/Fusotau.png'
import p3 from '../assets/imgs/Vector.png'
import p4 from '../assets/imgs/big-brain-investments 1.png'
import p5 from '../assets/imgs/Cogitent-Ventures-Horizontal-Light-Transparent 1.png'
import p6 from '../assets/imgs/tomooncapital.png'
import { lang } from '../lang'

/**
 *
 * @param {HTMLElement} root
 */
function page5(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const title = document.createElement('div')
	title.className = style.title
	container.appendChild(title)
	title.innerText = lang.lang === 'cn' ? '投资方与合作方' : 'Investors and Partners'

	const boxContainer = document.createElement('div')
	boxContainer.className = style.boxContainer
	container.appendChild(boxContainer)
	;[p1, p2, p3, p4, p5, p6].forEach((p) => {
		const pic = document.createElement('img')
		pic.src = p
		boxContainer.appendChild(pic)
	})
}

export { page5 }
