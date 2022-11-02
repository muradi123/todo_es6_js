import { Todo } from "./todo.js";

const $input = document.querySelector("input");
const $button = document.querySelector("button");

const buttonClickHandler = () => {
  let checkValue = $input.value.length;
  if (checkValue > 0) {
    let todo = new Todo($input.value);
  } else {
    alert("Empty field");
  }
  $input.value = "";
};

$button.addEventListener("click", buttonClickHandler);
