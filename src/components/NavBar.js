import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "./NavbarButton.js";

@customElement("nav-bar")
export class NavBar extends LitElement {
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
        <navbar-button icon="heart"></navbar-button>
        <navbar-button icon="star"></navbar-button>
        <navbar-button icon="gamepad"></navbar-button>
        <navbar-button icon="cog"></navbar-button>
      </div>
    `;
  }
}
