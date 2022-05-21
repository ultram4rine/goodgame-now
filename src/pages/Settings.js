import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("settings-page")
export class SettingsPage extends LitElement {
  render() {
    return html`
      <div id="settings" style="display: none">
        <div id="style" class="sets">
          Стиль вкладок<br />
          <input type="radio" id="twitchnow" name="style" value="twitchnow" />
          <label for="twitchnow">Twitch Now style</label>
          <input type="radio" id="goodgame" name="style" value="goodgame" />
          <label for="goodgame">GoodGame style</label>
        </div>
        <div id="time" class="sets">
          Автообновление через<br />
          <input type="range" id="slide" min="1" max="60" step="1" value="5" />
          <span id="val"></span>
        </div>
      </div>
    `;
  }
}
