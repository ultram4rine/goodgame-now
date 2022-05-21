import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("top-streams")
export class TopStreams extends LitElement {
  render() {
    return html`<div id="topstreams" style="display: none"></div>`;
  }
}
