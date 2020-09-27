import { PolymerElement, html } from "@polymer/polymer";

class NavbarButton extends PolymerElement {
  static get properties() {
    return { class: String };
  }

  static get template() {
    return html`
      <div id="fav" class="lbarcontent">
        <span class="[[class]]"></span>
      </div>
    `;
  }
}

customElements.define("navbar-button", NavbarButton);
