const topDisplay = document.querySelector("#top-display");
const botDisplay = document.querySelector("#bot-display");
const percentBtn = document.querySelector("#percent");
const decimalBtn = document.getElementById("decimal");
const posNegBtn = document.querySelector("#pos-neg");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

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

const storeSecondVal = () => (b = Number(botDisplay.textContent));
const storeFirstVal = () => (a = Number(botDisplay.textContent));
const clearBotDisplay = () => (botDisplay.textContent = "");
const clearTopDisplay = () => (topDisplay.textContent = "");
const clearValues = () => ((a = ""), (b = ""));
const clearOperator = () => (operator = "");
const clearSecondVal = () => (b = "");
const clearFirstVal = () => (a = "");

const clearError = () => {
  if (botDisplay.textContent === "Error") {
    allClear();
  }
};

const allClear = () => {
  a = "";
  b = "";
  operator = "";
  botDisplay.textContent = "";
  topDisplay.textContent = "";
  decimalBtn.disabled = false;
};

const numInput = e => {
  if (botDisplay.textContent.includes(".")) {
    decimalBtn.disabled = true;
  }
  if (equals === true) {
    equals = false;
    clearBotDisplay();
    clearFirstVal();
  }
  botDisplay.textContent += e.target.value;
  storeSecondVal();
};

const operatorInput = e => {
  decimalBtn.disabled = false;
  equals = false;
  if (typeof a === "number" && typeof b === "number") operate();
  clearError();
  storeFirstVal();
  clearBotDisplay();
  clearSecondVal();
  operator = e.target.dataset.op;
  if (a === 0) {
    topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    topDisplay.textContent += operator;
    a = topDisplay.textContent.slice(0, -1);
  } else topDisplay.textContent += a + operator;
};

const percent = () => {
  if (botDisplay.textContent === "Error" || botDisplay.textContent === "-") {
    return;
  }
  let p = Number(botDisplay.textContent) / 100;
  botDisplay.textContent = Number(p.toFixed(8).substring(0, 10));
};

const posNeg = () => {
  if (botDisplay.textContent === "Error" || botDisplay.textContent === ".") {
    return;
  }
  const display = Number(botDisplay.textContent);
  if (botDisplay.textContent.includes("-")) {
    return (botDisplay.textContent = botDisplay.textContent.replace("-", ""));
  }
  if (botDisplay.textContent === "") {
    return (botDisplay.textContent = "-");
  }
  botDisplay.textContent = "-" + Number(display.toFixed(7).substring(0, 9));
};

const operate = (num1, num2) => {
  decimalBtn.disabled = false;
  num1 = a;
  num2 = b;
  equals = true;
  let result = operators[operator](num1, num2);
  if (result === Infinity || result === -Infinity) {
    clearTopDisplay();
    return (botDisplay.textContent = "Error");
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

equalBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", allClear);
posNegBtn.addEventListener("click", posNeg);
percentBtn.addEventListener("click", percent);
numBtns.forEach(btn => btn.addEventListener("click", numInput));
opBtns.forEach(btn => btn.addEventListener("click", operatorInput));
