import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import './ux/icon'

/**
 * Root element for the application.
 */
@customElement('pelilauta-app')
export class App extends LitElement {
  // "OnMounted" is called after the element is attached to the DOM.
  connectedCallback () {
    super.connectedCallback()

    console.log('connected')
  }

  render () {
    return html`
      <h1>App Content goes here?</h1>
      <charna-icon noun="fox"></charna-icon>
      <div id="AppContainer">
      </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pelilauta-app': App
  }
}
