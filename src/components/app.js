import style from './app.module.css'
import { nav } from './nav'
import { page1 } from './page1'
import { page2 } from './page2'
import { page3 } from './page3'
// import logo from '../assets/logo.svg'

function main() {
	const app = document.getElementById('app')
	app.className = style.app

	nav(app)
	page1(app)
	page2(app)
	page3(app)
}

export default main
