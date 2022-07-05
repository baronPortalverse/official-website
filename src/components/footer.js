import style from './footer.module.css'
import logoUrl from '../assets/imgs/logo-line.png'

function footer(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	container.innerHTML = `
    <div class=${style.left}>
        <img src=${logoUrl} />
        <div>Portalverse Network 2022. All rights reserved.</div>
    </div>
    <div class=${style.right}>Privacy Policy • Terms of Service</div>
    `
}

export { footer }
