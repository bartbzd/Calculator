const topDisplay = document.querySelector("#top-display");
const botDisplay = document.querySelector("#bot-display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const equalBtn = document.querySelector(".equal-btn");
console.log(numBtns);

botDisplay.textContent = "";
topDisplay.textContent = "";

let a;
let b;
let currentOp;
const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
};

//operate
const operate = (operator, num1, num2) => {
  num1 = a;
  console.log(a);
  num2 = b;
  console.log(b);
  key = String(currentOp);
  console.log(currentOp);
  let result = operator[key](num1, num2);
  return result;
};
//positve/negative
const posNeg = (a) => {
  a = ~a + 1;
  return a;
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

function clearBotDisplay() {
  botDisplay.textContent = "";
}
function clearFirstVal() {
  a = "";
}
//clear

//delete

//equals
equalBtn.addEventListener("click", () => {
  return operate(operator[currentOp], a, b);
});

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    botDisplay.textContent += btn.value;
    if (a !== "") {
      storeSecondVal();
      console.log(currentOp);
    }
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    storeFirstVal();
    clearBotDisplay();
    topDisplay.textContent += a + btn.dataset.op;
    currentOp = String(btn.dataset.op);
  });
});
