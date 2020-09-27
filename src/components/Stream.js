import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("stream")
export class Stream extends LitElement {
  @property({ type: String })
  link = "";
  @property({ type: String })
  nickname = "";
  @property({ type: String })
  preview = "";
  @property({ type: String })
  game = "";
  @property({ type: Number })
  viewers = "";
  @property({ type: String })
  title = "";

  static styles = css`
    #stream {
      min-height: 200px;
      cursor: pointer;
      position: relative;
      padding-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 0px;
      font-family: -apple-system, Open Sans, sans-serif;
      color: #739fd6;
      transition: 0.3s;
    }
    #stream:hover {
      padding-top: 5px;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 5px;
    }
    #stream::before {
      cursor: pointer;
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 0;
      box-shadow: inset 0px -90px 70px -60px rgba(0, 0, 0, 1),
        inset 30px 30px 70px -30px rgba(0, 0, 0, 1);
      transition: 0.3s;
    }
    #stream:hover:before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
    }
    #stream img {
      width: 100%;
    }

    .text {
      white-space: nowrap;
      width: 100%;
      height: 100%;
      float: left;
    }

    .channame {
      overflow: hidden;
      text-overflow: ellipsis;
      position: absolute;
      width: calc(100% - 30px);
      left: 20px;
      bottom: 30px;
      float: left;
      clear: left;
      font-size: 18px;
      color: #63a0fa;
      z-index: 1;
      transition: 0.3s;
    }

    .stream:hover .channame {
      left: 15px;
      bottom: 35px;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      position: absolute;
      width: calc(100% - 30px);
      left: 20px;
      top: 15px;
      float: left;
      clear: left;
      font-size: 14px;
      color: #ffffff;
      z-index: 1;
      transition: 0.3s;
    }
    .stream:hover .description {
      left: 15px;
      top: 10px;
    }
    .name {
      display: none;
    }
    .viewers {
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.3s;
    }
    .views {
      display: none;
    }
    .icoviewers {
      font-family: icomoon;
      margin-right: 5px;
    }
    .icoviewers::before {
      content: "\e972";
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      position: absolute;
      width: calc(100% - 30px);
      left: 20px;
      bottom: 15px;
      float: left;
      clear: left;
      font-size: 14px;
      color: #ffffff;
      z-index: 1;
      transition: 0.3s;
    }
    .stream:hover .title {
      left: 15px;
      bottom: 20px;
    }
  `;

  render() {
    return html`
      <a target="_blank" rel="noopener noreferrer" href="${this.link}">
        <div id="stream" name="${this.nickname}">
          <img src="http:${this.preview}" />
          <div class="text">
            <div class="channame">${this.nickname}</div>
            <div class="description" title="${this.game} - ${this.viewers}">
              <div class="name">${this.game} -&nbsp;</div>
              <div class="viewers">
                <span class="icoviewers"></span>${this.viewers}
                <span class="views">${this.viewersWord}</span>
              </div>
            </div>
            <div title="${this.title}" class="title">${this.title}</div>
          </div>
        </div>
      </a>
    `;
  }
}
