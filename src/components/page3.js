import style from './page3.module.css'
import pic1 from '../assets/imgs/cube1.png'
import pic2 from '../assets/imgs/cube2.png'
import pic3 from '../assets/imgs/cube3.png'
import pic4 from '../assets/imgs/cube4.png'
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

	title.innerText = 'Features'

	const boxContainer = document.createElement('div')
	boxContainer.className = style.boxContainer
	container.appendChild(boxContainer)

	const features = [
		{
			icon: pic1,
			name: 'P2P Game Streaming',
			des: 'Decentralised rendering of games will lead to lower\nlatency and the ability for the service to scale with\ndemand.',
		},
		{
			icon: pic2,
			name: 'Optimized Experience',
			des: 'Developers can focus quality metaverse experiences\nwithout hardware limitations and a consistent\ndevelopment workflow.',
		},
		{
			icon: pic3,
			name: 'Removing Hardware Limits',
			des: 'Device constraints are no longer an issue when cloud\nstreaming. Complex experiences are rendered in the\ncloud.',
		},
		{
			icon: pic4,
			name: 'Existing Powerful Network',
			des: 'The most common graphics cards being used for mining\nwere built for gaming. Making them fit for purpose without\nsignificant changes.',
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
