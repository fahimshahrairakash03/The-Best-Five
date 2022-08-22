function getName(id) {
  const nameField = document.getElementById(id);
  const name = nameField.innerText;
  const selectedPlayerList = document.getElementById("player-list");
  const palyers = selectedPlayerList.innerText;
  const newField = document.createElement("li");
  newField.innerText = name;
  selectedPlayerList.appendChild(newField);
}
function btnDisable(id) {
  const btn = document.getElementById(id);
  btn.disabled = true;
  if (btn.disabled) {
    btn.style.backgroundColor = "grey";
  }
}
