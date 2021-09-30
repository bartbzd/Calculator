const topDisplay = document.querySelector("#top-display");
const botDisplay = document.querySelector("#bot-display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector("#clear");
const posNegBtn = document.querySelector("#pos-neg");

botDisplay.textContent = "";
topDisplay.textContent = "";

let a;
let b;
let operator;
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const operate = (num1, num2) => {
  num1 = a;
  num2 = b;

  let result = operators[operator](num1, num2);
  console.log(result);
  if (result === Infinity) {
    botDisplay.textContent = "Oops..";
  }
  if (result % 1 != 0) {
    botDisplay.textContent = parseFloat(result).toFixed(8);
  } else botDisplay.textContent = result;
  a = "";
  b = "";
  a = result;
  clearTopDisplay();
  storeFirstVal();
  clearOperator();
};
//positve/negative
const posNeg = (num) => {
  num = ~b + 1;
  return (botDisplay.textContent = num);
};
//percent
const percent = (a) => {
  a = a / 100;
  return a;
};

function storeFirstVal() {
  a = Number(botDisplay.textContent);
}
function storeSecondVal() {
  b = Number(botDisplay.textContent);
}
function clearOperator() {
  operator = "";
}
function clearBotDisplay() {
  botDisplay.textContent = "";
}
function clearTopDisplay() {
  topDisplay.textContent = "";
}
function clearFirstVal() {
  a = "";
}
function clearSecondVal() {
  b = "";
}
function allClear() {
  a = "";
  b = "";
  operator = "";
  botDisplay.textContent = "";
  topDisplay.textContent = "";
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (botDisplay.textContent === "0") {
      clearBotDisplay();
    }
    botDisplay.textContent += btn.value;

    storeSecondVal();
    console.log(a, b);
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (typeof a === "number" && typeof b === "number") {
      console.log(a, b);
      console.log(typeof a, typeof b);
      operate();
    }
    storeFirstVal();
    clearBotDisplay();
    clearSecondVal();
    console.log(a, b);
    topDisplay.textContent += a + btn.dataset.op;
    operator = btn.dataset.op;
    console.log(operator);
  });
});

equalBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", allClear);
posNegBtn.addEventListener("click", posNeg);
