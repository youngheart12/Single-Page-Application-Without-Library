import AbstractView from "./AbstractViews.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Error 404");
  }

  async getHtml() {
    return `<h1>Hello Error 404</h1>`;
  }
}
