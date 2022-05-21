import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../pages/FavoriteStreams.js";
import "../pages/TopStreams.js";
import "../pages/Tournaments.js";
import "../pages/Settings.js";

@customElement("main-content")
export class MainContent extends LitElement {
  @property({ type: String })
  nav = "favorites";

  static styles = css`
    #content {
      width: calc(100% - 40px - 1px);
      height: calc(100% - 22px - 1px);
      position: relative;
      float: right;
      background-color: #0d1221;
      overflow-y: auto;
      overflow-x: hidden;
    }
    #content::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    #content::-webkit-scrollbar:vertical {
      width: 11px;
    }
    #content::-webkit-scrollbar:horizontal {
      height: 11px;
    }
    #content::-webkit-scrollbar-thumb {
      min-height: 63px;
      width: 10px;
      border-radius: 7px;
      background-color: rgba(60, 64, 73, 0.5);
    }
  `;

  render() {
    return html`
      <div id="content">
        <favorite-streams />

        <top-streams" />

        <tournaments-page />

        <settings-page />
      </div>
    `;
  }
}
