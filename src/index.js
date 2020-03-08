// we can import it now as webpack allows import syntax
import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("red-text");
  return element;
}

document.body.appendChild(component());
