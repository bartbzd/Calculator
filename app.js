const topDisplay = document.querySelector("#top-display");
const botDisplay = document.querySelector("#bot-display");
const percentBtn = document.querySelector("#percent");
const decimalBtn = document.getElementById("decimal");
const posNegBtn = document.querySelector("#pos-neg");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

const storeSecondVal = () => (b = Number(botDisplay.textContent));
const storeFirstVal = () => (a = Number(botDisplay.textContent));
const clearBotDisplay = () => (botDisplay.textContent = "");
const clearTopDisplay = () => (topDisplay.textContent = "");
const clearOperator = () => (operator = "");
const clearSecondVal = () => (b = "");
const clearFirstVal = () => (a = "");
const clearValues = () => ((a = ""), (b = ""));
const allClear = () => {
  a = "";
  b = "";
  operator = "";
  botDisplay.textContent = "";
  topDisplay.textContent = "";
  decimal.disabled = false;
};

let a;
let b;
let operator;
let equals = false;
botDisplay.textContent = "";
topDisplay.textContent = "";

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const operate = (num1, num2) => {
  num1 = a;
  num2 = b;
  equals = true;

  let result = operators[operator](num1, num2);

  if (result === Infinity) {
    clearTopDisplay();
    botDisplay.textContent = "Error";
  }

  if (result % 1 != 0) {
    botDisplay.textContent = Number(result.toFixed(8).substring(0, 10));
  } else botDisplay.textContent = result;

  clearValues();
  clearOperator();
  clearTopDisplay();
  a = result;
  storeFirstVal();
};

const posNeg = () => {
  if (botDisplay.textContent === "") return (botDisplay.textContent = "-");

  const display = Number(botDisplay.textContent);
  return (botDisplay.textContent = "-" + display);
};

const percent = () => {
  let p = Number(botDisplay.textContent) / 100;
  return (botDisplay.textContent = p);
};

numBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    botDisplay.textContent += btn.value;

    if (botDisplay.textContent === "Error") {
      allClear();
    }
    if (botDisplay.textContent === "0") {
      clearBotDisplay();
    }
    if (botDisplay.textContent.includes(".")) {
      decimal.disabled = true;
    }
    if (equals === true) {
      equals = false;
      clearBotDisplay();
      clearFirstVal();
    }
    storeSecondVal();
    console.log(a, b);
  });
});

opBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    decimal.disabled = false;
    if (typeof a === "number" && typeof b === "number") operate();
    storeFirstVal();
    clearBotDisplay();
    clearSecondVal();
    topDisplay.textContent += a + btn.dataset.op;
    operator = btn.dataset.op;
    equals = false;
  });
});

equalBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", allClear);
posNegBtn.addEventListener("click", posNeg);
percentBtn.addEventListener("click", percent);
