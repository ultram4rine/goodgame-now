import { PolymerElement, html } from "@polymer/polymer";

class StreamOffline extends PolymerElement {
  static get properties() {
    return { link: String, nickname: String, avatar: String };
  }

  static get template() {
    return html`
      <a target="_blank" rel="noopener noreferrer" href="[[link]]">
        <div name="[[nickname]]" class="inactive">
          <img src="https://static.goodgame.ru[[avatar]]" />
          <div class="nickname">[[nickname]]</div>
        </div>
      </a>
    `;
  }
}

customElements.define("stream-offline", StreamOffline);
