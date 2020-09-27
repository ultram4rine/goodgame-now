import { PolymerElement, html } from "@polymer/polymer";

class Stream extends PolymerElement {
  static get properties() {
    return {
      link: String,
      nickname: String,
      preview: String,
      game: String,
      viewers: Number,
      title: String,
    };
  }

  static get template() {
    return html`
      <a target="_blank" rel="noopener noreferrer" href="[[link]]">
        <div id="stream" name="[[nickname]]">
          <img src="http:[[preview]]" />
          <div class="text">
            <div class="channame">[[nickname]]</div>
            <div class="description" title="[[game]] - [[viewers]]">
              <div class="name">[[game]] -&nbsp;</div>
              <div class="viewers">
                <span class="icoviewers"></span>[[viewers]]
                <span class="views">${viewersWord}</span>
              </div>
            </div>
            <div title="[[title]]" class="title">[[title]]</div>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define("stream", Stream);
