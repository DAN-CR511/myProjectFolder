let balance = 300000;
const pin = 2345;

// LOGIN FUNCTION

function login() {
  const Pin = 2345;
  const correctPin = prompt("Enter PIN");

  if (Pin !== correctPin) {
    alert("Login Successful");
  } else {
    alert("Incorrect PIN");
  }
}

let running = true;
while (running) {
  const option = prompt(
    `
    

    1. CheckBalance
    2. Withdraw.
    3. Deposit.
    4. Exit.

    Choose an option (1-4);
    `,
  );
}
  switch (option) {
    case "1":
      checkBalance();
      break;

    case "2":
      deposit();
      break;

    case "3":
      withdraw();
      break;

    case "4":
      alert("Thank you for using our ATM");
      isRunning = false;
      break;

    default:
      alert("Invalid option");
  }

  // CHECK BALANCE FUNCTION.

  function checkBalance() {
    alert(`Your current balance is N${"checkBalance"}`);

    atmMenu();
  }

  // DEPOSIT MONEY FUNCTION.

  function deposit() {
    const amount = prompt("Enter amount");

    // VALIDATION.
    if (amount > 0) {
      balance += amount;
      alert(`Deposit Successful
        New Balance: n${balance}`);
    } else {
      alert("Invalid Amount");
    }

    atmMenu();
  }

  // WITHDRAW FUNCTION.
 function withdraw() {

    const amount = Number(prompt("Enter amount"));

    if (amount <= 0) {

        alert("Invalid Amount");

    } else if (amount > balance) {

        alert("Insufficient Balance");

    } else {

        balance -= amount;

        alert(`Withdrawal Successful
Remaining Balance: N${balance}`);
    }
}

login();
