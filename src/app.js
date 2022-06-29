import style from './app.module.css'
import { nav } from './nav'
// import logo from '../assets/logo.svg'

function main() {
	const app = document.getElementById('app')
	app.className = style.app

	nav(app)
}

export default main
