document.getElementById("btn-messi").addEventListener("click", function () {
  getName("messi");
  btnDisable("btn-messi");
});
document.getElementById("btn-bappe").addEventListener("click", function () {
  getName("bappe");
  btnDisable("btn-bappe");
});
document.getElementById("btn-maria").addEventListener("click", function () {
  getName("maria");
  btnDisable("btn-maria");
});
document.getElementById("btn-neymar").addEventListener("click", function () {
  getName("neymar");
  btnDisable("btn-neymar");
});
document.getElementById("btn-ramos").addEventListener("click", function () {
  getName("ramos");
  btnDisable("btn-ramos");
});
document.getElementById("btn-ronaldo").addEventListener("click", function () {
  getName("ronaldo");
  btnDisable("btn-ronaldo");
});

document.getElementById("calculate").addEventListener("click", function () {
  const playerCostField = document.getElementById("per-player-cost");
  const perPlayerCost = parseFloat(playerCostField.value);
  playerCostField.value = "";
  const playerExpenseField = document.getElementById("total-player-expense");
  const playerList = document.querySelectorAll("li");
  const totalPlayer = playerList.length;
  const playerExpense = perPlayerCost * totalPlayer;
  if (totalPlayer <= 5) {
    playerExpenseField.innerText = playerExpense;
  } else {
    alert("limit cross");
    return;
  }
});
