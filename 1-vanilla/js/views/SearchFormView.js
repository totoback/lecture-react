import { qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }
  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
  bindEvents() {
    on(this.inputElement, "keyup", (event) => this.handleKeyup(event));
    on(this.element, "submit", (event) => this.handleSubmit(event));
  }
  handleKeyup(event) {
    // console.log(tag, 'handleKeyup', this.inputElement.value);
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, "handleSubmit");
  }
}
