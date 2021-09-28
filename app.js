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

//clear

//delete

//equals
