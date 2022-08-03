import { Router } from '@vaadin/router'
import './ux/charna-spacer'
window.addEventListener('load', () => {
  initRouter()
})

function initRouter () {
  const router = new Router(document.querySelector('#router-outlet'))
  router.setRoutes([
    { path: '/', component: 'charna-icon' }
  ])
}
