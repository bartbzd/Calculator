const operator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
};
let result;

//operate
const operate = (operator, a, b) => {
  result = operator(a, b);
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

//clear

//delete

//equals
