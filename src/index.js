// we can import it now as webpack allows import syntax
import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.classList.add("container");
  const heading = document.createElement("h3");
  heading.innerHTML = _.join(["Your code.", "I hate it"], " ");
  return element;
}

document.body.appendChild(component());
