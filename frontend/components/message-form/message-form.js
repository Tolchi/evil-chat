import { sendMessage } from "client/chat";
import "./message-form.css";

const input = document.querySelector(".js-message-form--input");
const submit = document.querySelector(".js-message-form--submit");

function submitForm() {
  // Invokes sendMessage, that, in turn, invokes Ruby send_message method
  // that will create a Message instance with ActiveRecord
  sendMessage(input.value);
  input.value = "";
  input.focus();
}

// You can send a message with cmd/crtl+enter
input.addEventListener("keydown", event => {
  if (event.keyCode === 13 && event.metakey) {
    event.preventDefault();
    submitForm();
  }
});

// Or bye clicking a button
submit.addEventListener("click", event => {
  event.preventDefault();
  submitForm();
});
