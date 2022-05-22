import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./NavbarButton.js";

@customElement("nav-bar")
export class NavBar extends LitElement {
  @property({ type: String })
  active = "heart";

  static styles = css`
    #navbar {
      width: 40px;
      height: calc(100% - 22px - 1px);
      position: relative;
      float: left;
      background-color: #233056;
      border-right: 1px solid black;
      box-shadow: inset -5px 0 5px -4px black;
    }
  `;

  render() {
    return html`
      <div id="navbar">
        <navbar-button
          icon="heart"
          active=${this.active === "heart" ? true : false}
          @navclick=${this._clickListener}
        ></navbar-button>
        <navbar-button
          icon="star"
          active=${this.active === "star" ? true : false}
          @navclick=${this._clickListener}
        ></navbar-button>
        <navbar-button
          icon="trophy"
          active=${this.active === "trophy" ? true : false}
          @navclick=${this._clickListener}
        ></navbar-button>
        <navbar-button
          icon="gear"
          active=${this.active === "gear" ? true : false}
          @navclick=${this._clickListener}
        ></navbar-button>
      </div>
    `;
  }

  _clickListener(e) {
    console.log(e);
    this.active = e.detail.name;
    console.log(this.active);
  }
}
