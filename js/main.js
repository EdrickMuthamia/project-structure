/// an event listner Callback

const NameInput = document.getElementById("name-input");
let name = "";

// Access->update ,Access->add events,

// Callback setInterval
// console.log(NameInput);
// click
// ;

// input<>
NameInput.addEventListener("input", nameInputHasChanged);

function submitButtonClicked() {
  let nameValue = document.getElementById("name-input").value;
  name = nameValue;
  window.location.href = "game.html";
}

function nameInputHasChanged() {
  //   console.log(NameInput);
  let nameValue = document.getElementById("name-input").value;
  let pSubmit = document.querySelector("#submit-button");
  if (nameValue.length >= 4) {
    // when the value name >4
    pSubmit.innerHTML = `<button onclick='submitButtonClicked()'>Submit</button>`;
    return;
  }
  pSubmit.innerHTML = ``;
}