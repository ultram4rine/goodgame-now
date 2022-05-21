import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("favorite-streams")
export class FavoriteStreams extends LitElement {
  render() {
    return html`
      <div id="favorite" style="display: none">
        <div id="unauth" style="display: none">
          Вы не вошли<br /><button id="login">Вход</button>
        </div>
        <div id="online" style="display: none"></div>
        <div id="offline" style="display: none"></div>
        <div id="nonactive" style="display: block">
          <div>Оффлайн</div>
        </div>
      </div>
    `;
  }
}
