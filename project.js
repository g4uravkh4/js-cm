const prompt = require("prompt-sync")();
//1. create function to deposit money
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

//2.create function to deposit money at specific slot
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

//3.create function to get bet amount
const getBet = (balance) => {
  while (true) {
    const bet = prompt("Enter total bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
      console.log("Invalid bet, try again please!");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
