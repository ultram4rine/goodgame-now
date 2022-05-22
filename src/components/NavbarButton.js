import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("navbar-button")
export class NavbarButton extends LitElement {
  @property({ type: String })
  icon = "";
  @property({ type: String })
  active = "false";

  static styles = css`
    .navbar-button {
      width: 40px;
      height: 40px;
      float: left;
      display: table-cell;
      cursor: pointer;
      text-align: center;
      vertical-align: middle;
      line-height: 40px;
      font-family: icomoon;
      font-size: 22px;
      background-color: #233056;
      color: white;
      box-shadow: inset -5px 0 5px -4px black;
    }
    .navbar-button:hover {
      background-color: #52709c !important;
    }
    .no-hover:hover {
      background-color: #1c2644 !important;
    }

    .active {
      background-color: #1c2644 !important;
    }

    .fas,
    .fa-solid {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
    }
    .fa-heart::before {
      content: "\\f004";
    }
    .fa-star::before {
      content: "\\f005";
    }
    .fa-trophy::before {
      content: "\\f091";
    }
    .fa-gear::before {
      content: "\\f013";
    }
  `;

  render() {
    return html`
      <nav
        class="navbar-button ${this.active === "true" ? "active no-hover" : ""}"
        @click=${this._dispatchClick}
      >
        <span class="fa-solid fa-${this.icon}"></span>
      </nav>
    `;
  }

  _dispatchClick() {
    const options = {
      detail: { name: this.icon },
    };
    this.dispatchEvent(new CustomEvent("navclick", options));
  }
}
