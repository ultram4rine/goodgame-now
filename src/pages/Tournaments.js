import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("tournaments-page")
export class TournamentsPage extends LitElement {
  render() {
    return html`
      <div id="tournaments" style="display: none">
        <div id="open">
          <div id="opens">Открытые турниры</div>
        </div>
      </div>
    `;
  }
}
