import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("global-loader")
export class GlobalLoader extends LitElement {
  @property({ type: String })
  state = "";

  static styles = css`
    .global-loader {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 101;
      height: 2px;
      display: block;

      .left,
      .right {
        position: absolute;
        background: #43b85b;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      .left {
        right: 50%;
        left: 50%;
      }
      .right {
        right: 50%;
        left: 50%;
      }
    }

    .global-loader .loading {
      .left {
        transition: left 2s ease;
        left: 3%;
      }
      .right {
        transition: right 2s ease;
        right: 3%;
      }
    }

    .global-loader .loaded {
      .left {
        transition: right 0.5s ease-in 0.3s, left 0.3s ease;
        left: 0;
        right: 100%;
      }

      .right {
        transition: left 0.5s ease-in 0.3s, right 0.3s ease;
        left: 100%;
        right: 0;
      }
    }
  `;

  render() {
    return html`
      <div class="global-loader ${this.state}">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    `;
  }
}
