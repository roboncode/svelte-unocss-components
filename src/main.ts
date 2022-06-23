import '@unocss/reset/tailwind.css'
import 'uno.css'
import './theme/index.css'
// import './theme/button_ex.css'
// import './theme/components/button.css'
// import './theme/styles/components/button.css'
// import './theme/components/switch.css'

import App from './App.svelte'
const app = new App({
  target: document.getElementById('app')
})

export default app
