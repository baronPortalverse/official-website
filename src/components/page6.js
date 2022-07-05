import style from './page6.module.css'
import blog1 from '../assets/imgs/blog1.png'
import blog2 from '../assets/imgs/blog2.png'
import blog3 from '../assets/imgs/blog3.png'
import ghost from '../assets/imgs/Logo ghost.png'
import { lang } from '../lang'

/**
 *
 * @param {HTMLElement} root
 */
function page6(root) {
	const outter = document.createElement('div')
	outter.className = style.outter
	root.appendChild(outter)

	const container = document.createElement('div')
	container.className = style.container
	outter.appendChild(container)

	const title1 = document.createElement('div')
	container.appendChild(title1)
	title1.className = style.title1
	title1.innerText = lang.lang === 'cn' ? '博客' : 'Blog'

	const title2 = document.createElement('div')
	container.appendChild(title2)
	title2.className = style.title2
	title2.innerText =
		lang.lang === 'cn' ? '关注Portalverse的最新动态' : 'Stay updated on Portalverse'

	const artCon = document.createElement('div')
	container.appendChild(artCon)
	artCon.className = style.artCon

	const art1 = document.createElement('div')
	artCon.appendChild(art1)
	art1.className = style.art1

	art1.innerHTML = `<img src=${blog1} />
    <div class=${style.artTitle}>Introducing<br>Portalverse<br>Protocol</div>
    <div class=${style.more}>Read More &#xe900;</div>`

	const art2 = document.createElement('div')
	artCon.appendChild(art2)
	art2.className = style.art2

	art2.innerHTML = ` <img src=${blog2} />
    <div class=${style.artTitle}>New Partnership<br>Announcement: PortalVerse<br>and Fusotao Protocol</div>
    <div class=${style.more}>Read More &#xe900;</div>`

	const art3 = document.createElement('div')
	artCon.appendChild(art3)
	art3.className = style.art2

	art3.innerHTML = ` <img src=${blog3} />
    <div class=${style.artTitle}>New Partnership<br>Announcement: PortalVerse<br>and Octopus Network</div>
    <div class=${style.more}>Read More &#xe900;</div>`

	art1.addEventListener('click', (ev) => {
		window.open(
			'https://medium.com/@PORTALVERSE_NETWORK/what-is-portalverse-2acb4fb1fe4',
			'_blank'
		)
	})
	art2.addEventListener('click', (ev) => {
		window.open(
			'https://medium.com/@PORTALVERSE_NETWORK/new-partnership-announcement-portalverse-network-and-fusotao-protocol-17c790393e9e',
			'_blank'
		)
	})
	art3.addEventListener('click', (ev) => {
		window.open(
			'https://medium.com/@PORTALVERSE_NETWORK/new-partnership-announcement-3ecd69ed7fb3',
			'_blank'
		)
	})

	const btn = document.createElement('div')
	btn.className = style.btn
	btn.innerText = lang.lang === 'cn' ? '浏览文章' : 'Browse Articles'
	container.appendChild(btn)

	btn.addEventListener('click', (ev) => {
		window.open('https://medium.com/@PORTALVERSE_NETWORK', '_blank')
	})

	const newsLetter = document.createElement('div')
	newsLetter.className = style.news
	container.appendChild(newsLetter)

	const ghostLogo = document.createElement('img')
	ghostLogo.src = ghost
	ghostLogo.className = style.ghost
	newsLetter.appendChild(ghostLogo)

	const newsTitle = document.createElement('div')
	newsTitle.className = style.newsTitle
	newsTitle.innerText = lang.lang === 'cn' ? '获取更新' : 'Get Updates'

	const newsDes = document.createElement('div')
	newsDes.className = style.newsDes
	newsDes.innerText =
		lang.lang === 'cn'
			? '当portalverse推出其测试项目时，获取最新信息'
			: 'Get updated when portalverse launches its beta projects'

	const inputCon = document.createElement('div')
	inputCon.className = style.iptCon

	const ipt = document.createElement('input')
	ipt.className = style.ipt
	ipt.placeholder = lang.lang === 'cn' ? '你的邮箱' : 'Enter your email'
	inputCon.appendChild(ipt)

	const iptBtn = document.createElement('div')
	iptBtn.className = style.iptBtn
	iptBtn.innerText = lang.lang === 'cn' ? '注册' : 'Sign up'
	inputCon.appendChild(iptBtn)

	newsLetter.append(newsTitle, newsDes, inputCon)
}

export { page6 }
