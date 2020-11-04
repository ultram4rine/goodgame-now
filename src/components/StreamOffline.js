import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("stream-offline")
export class StreamOffline extends LitElement {
  @property({ type: String })
  link = "";
  @property({ type: String })
  nickname = "";
  @property({ type: String })
  avatar = "";
  @property({ type: String })
  start = "";

  static get styles() {
    return css`
      .inactive {
        cursor: pointer;
        width: 100%;
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid black;
        text-decoration: none;
        font-family: -apple-system, Open Sans, sans-serif;
        font-size: 14px;
        color: #63a0fa;
      }
      .inactive:hover {
        background-color: #2e3a58;
      }
      .inactive img {
        width: 35px;
        height: 35px;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        border: 1px solid rgb(62, 77, 113);
      }
      .inactive .nickname {
        width: auto;
        margin-left: 5px;
        float: left;
      }
      .inactive .start {
        margin-right: 10px;
        float: right;
        color: #43b85b;
      }
    `;
  }

  render() {
    return html`
      <a target="_blank" rel="noopener noreferrer" href="${this.start}">
        <div name="${this.nickname}" class="inactive">
          <img src="https://static.goodgame.ru${this.avatar}" />
          <div class="nickname">${this.nickname}</div>
          <div class="start">${this.start}</div>
        </div>
      </a>
    `;
  }
}
