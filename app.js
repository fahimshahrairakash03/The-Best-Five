function getName(id) {
  const nameField = document.getElementById(id);
  const name = nameField.innerText;
  console.log(name);
  const selectedPlayerList = document.getElementById("player-list");
  const palyers = selectedPlayerList.innerText;
  console.log(palyers);
  const newField = document.createElement("li");
  newField.innerText = name;
  selectedPlayerList.appendChild(newField);
}

document.getElementById("btn-messi").addEventListener("click", function () {
  getName("messi");
});
document.getElementById("btn-bappe").addEventListener("click", function () {
  getName("bappe");
});
document.getElementById("btn-maria").addEventListener("click", function () {
  getName("maria");
});
document.getElementById("btn-neymar").addEventListener("click", function () {
  getName("neymar");
});
document.getElementById("btn-ramos").addEventListener("click", function () {
  getName("ramos");
});
document.getElementById("btn-ronaldo").addEventListener("click", function () {
  getName("ronaldo");
});
