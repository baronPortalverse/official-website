import style from './nav.module.css'
import logoUrl from '../assets/imgs/logo-line.png'
import { lang } from '../lang'
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
	container.appendChild(logo)

	const iconCon = document.createElement('div')
	iconCon.className = style.iconCon
	container.appendChild(iconCon)

	const twitterIcon = document.createElement('div')
	twitterIcon.className = style.twitter
	const discordIcon = document.createElement('div')
	discordIcon.className = style.discord
	const languageIcon = document.createElement('div')
	languageIcon.className = style.language

	twitterIcon.innerHTML = '&#xe903;'
	discordIcon.innerHTML = '&#xe902;'
	languageIcon.innerHTML =
		lang.lang === 'cn' ? '<span>CN </span>&#xe901;' : '<span>EN </span>&#xe901;'
	iconCon.append(twitterIcon, discordIcon, languageIcon)

	twitterIcon.addEventListener('click', (ev) => {
		window.open('https://twitter.com/Portalverse_Net', '_blank')
	})
	discordIcon.addEventListener('click', (ev) => {
		window.open('https://discord.gg/rE328zG7pS', '_blank')
	})

	const dropdown = document.createElement('div')
	dropdown.className = style.drop
	languageIcon.appendChild(dropdown)

	const hoverArea = document.createElement('div')
	hoverArea.className = style.hoverArea
	languageIcon.appendChild(hoverArea)

	const languageMap = [
		{
			name: 'EN',
			emoji: '🇬🇧',
			click() {
				window.location.href = window.location.href.split('#')[0] + '#en'
				location.reload()
			},
		},
		// {
		// 	name: 'CN',
		// 	emoji: '🇨🇳',
		// 	click() {
		// 		window.location.href = window.location.href.split('#')[0] + '#cn'
		// 		location.reload()
		// 	},
		// },
	]

	languageMap.map((l) => {
		const item = document.createElement('div')
		const name = document.createElement('span')
		const emoji = document.createElement('span')

		item.className = style.item
		item.append(name, emoji)

		name.innerText = l.name
		emoji.innerText = l.emoji
		item.addEventListener('click', (ev) => l.click(), true)

		dropdown.appendChild(item)
	})
}

export { nav }
