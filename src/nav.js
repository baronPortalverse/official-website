import style from './nav.module.css'
import logoUrl from './assets/imgs/logo-line.png'
/**
 *
 * @param {HTMLElement} root
 */
function nav(root) {
	const navEl = document.createElement('nav')
	root.appendChild(navEl)
	navEl.className = style.outter

	const container = document.createElement('div')
	container.className = style.con
	navEl.appendChild(container)

	const logo = document.createElement('img')
	logo.src = logoUrl
	navEl.appendChild(logo)

	const iconCon = document.createElement('div')
	iconCon.className = style.iconCon
}

export { nav }
