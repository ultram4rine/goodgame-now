import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("navbar-button")
export class NavbarButton extends LitElement {
  @property({ type: String })
  icon = "";

  static get styles() {
    return css`
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
        background-color: #1c2644;
        color: white;
        transition: 0.2s;
        box-shadow: inset -5px 0 5px -4px black;
      }
      .navbar-button:hover {
        background-color: #52709c !important;
      }
    `;
  }

  render() {
    return html`
      <div class="navbar-button">
        <i class="fas fa-${this.icon}"></i>
      </div>
    `;
  }
}
