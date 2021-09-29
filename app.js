const topDisplay = document.querySelector("#top-display");
const botDisplay = document.querySelector("#bot-display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtn = document.querySelector(".op-btn");
console.log(numBtns);

botDisplay.textContent = "";

let firstVal;
let secondVal;

const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
};

//operate
const operate = (operator, a, b) => {
  return operator(a, b);
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

function displayValue(a) {}

//clear

//delete

//equals
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    firstVal = btn.textContent;
    botDisplay.textContent += firstVal;
  });
});
