import './index.css'
import main from './src/components/app'
import { lang } from './src/lang'

const param = window.location.href.split('#')[1]
lang.lang = param || 'en'
main()
