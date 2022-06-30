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

	title1.innerText = 'Portalverse Network'
	title2.innerText = 'Decentralised\nCloud Gaming'
	description.innerText =
		'Harnessing Distributed and Underutilised Computing Powers to form a Computing\nInfrastructure Layer for the Metaverse'

	const btn1 = document.createElement('div')
	const btn2 = document.createElement('div')
	btnContainer.append(btn1, btn2)
	btn1.className = style.btn1
	btn2.className = style.btn2
	btn1.innerHTML = 'Join Discord'
	btn2.innerHTML = 'Read Whitepaper &#xe900;'

	btn1.addEventListener('click', (ev) => {
		console.log('join')
	})

	btn2.addEventListener('click', (ev) => {
		console.log('read')
	})
}

export { page1 }
