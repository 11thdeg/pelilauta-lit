import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('charna-spacer')
export class CharnaSpacer extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex-grow: 1;
    }
  `

  render () {
    return html`
      <div></div>
   `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'charna-spacer': CharnaSpacer
  }
}
