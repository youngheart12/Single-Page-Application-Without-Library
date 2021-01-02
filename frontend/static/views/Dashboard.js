import AbstractViews from "./AbstractViews.js";
import AbstractView from "./AbstractViews.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `<h1>Hello Dashboard</h1>`;
  }
}
