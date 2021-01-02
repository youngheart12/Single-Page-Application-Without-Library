import AbstractView from "./AbstractViews.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Setting");
  }

  async getHtml() {
    return `<h1>Hello Setting</h1>`;
  }
}
