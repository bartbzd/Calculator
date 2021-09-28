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

//clear

//delete

//equals
