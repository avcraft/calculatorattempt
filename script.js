let num1 = 16;
let num2 = 30;
document.getElementById("first").textContent = num1;
document.getElementById("second").textContent = num2;

const total = document.getElementById("sumEl");

function plus() {
  total.textContent = "Sum = " + (num1 + num2);
}

function minus() {
  total.textContent = "Sum = " + (num1 - num2);
}

function multiply() {
  total.textContent = "Sum = " + num1 * num2;
}

function divide() {
  total.textContent = "Sum = " + num1 / num2;
}

function refresh() {
  window.location.reload();
}
