import style from './app.module.css'
import { footer } from './footer'
import { nav } from './nav'
import { page1 } from './page1'
import { page2 } from './page2'
import { page3 } from './page3'
import { page4 } from './page4'
import { page5 } from './page5'
import { page6 } from './page6'
// import logo from '../assets/logo.svg'

function main() {
	const app = document.getElementById('app')
	app.className = style.app

	nav(app)
	page1(app)
	page2(app)
	page3(app)
	page4(app)
	page5(app)
	page6(app)
	footer(app)
}

export default main
