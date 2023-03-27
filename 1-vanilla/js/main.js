import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/searchFormView.js";

const tag = "[main]"
document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main")
  const store = new Store(storage);

  const views = {
    searcgFormView: new SearchFormView(),
  }

  new Controller(store, views);
}
