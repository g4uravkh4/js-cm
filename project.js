const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter amount to deposit: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Enter a valid amount");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-5): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 5) {
      console.log("Invalid number of lines, try again please!");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
