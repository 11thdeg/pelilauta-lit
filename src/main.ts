import { Router } from '@vaadin/router'

window.addEventListener('load', () => {
  initRouter()
})

function initRouter () {
  const router = new Router(document.querySelector('#router-outlet'))
  router.setRoutes([
    { path: '/', component: 'my-element' }
  ])
}
