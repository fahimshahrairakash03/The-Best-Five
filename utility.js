function getName(id) {
  const nameField = document.getElementById(id);
  const name = nameField.innerText;
  const selectedPlayerList = document.getElementById("player-list");
  const playerList = selectedPlayerList.childNodes.length;
  const newField = document.createElement("li");
  newField.innerText = name;
  if (playerList < 5) {
    selectedPlayerList.appendChild(newField);
  } else {
    alert("list filled up");
    return;
  }
}

function btnDisable(id) {
  const btn = document.getElementById(id);
  btn.disabled = true;
  if (btn.disabled) {
    btn.style.backgroundColor = "grey";
  }
}

function costing(id) {
  const CostField = document.getElementById(id);
  const Cost = parseFloat(CostField.value);
  CostField.value = "";
  if (isNaN(Cost)) {
    alert("not a number");
    return;
  } else {
    return Cost;
  }
}
