import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#serch-form-view"));

    this.resetElement = qs("[type=reset", this.element);
    this.showResetButton(false);
  }
  showResetButton(visible = ture) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
}
