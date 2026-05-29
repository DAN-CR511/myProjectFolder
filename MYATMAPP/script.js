let balance = 300000;

const pin = 2345;

// LOGIN FUNCTION

function login() {
  const correctPin = 2345;
  const enteredPin = Number(prompt("Enter PIN"));

  if (enteredPin === correctPin) {
    alert("Login Successful");

    atmmMenu();
  } else {
    alert("Incorrect PIN");
  }
}

// ATM MENU FUNCTION.
function atmMenu() {
  const option = prompt(
    `
    ========= ATM MENU ==========

    1. Check Balance
    2. withdraw.
    3. Deposit.
    4. Exit.

    Choose an option (1-4);
    `
  );

  // CHECK BALANCE...

  if(option === "1") {
    checkBalance();
  }
  // DEPOSIT MONEY.

  else if (option === "2") {
    depositMoney();
  }

  else if (option === "3") {
    withdrawMoney();
  }

  // EXIT.
  else if (option === "4") {
    alert("Thank you for using our ATM");
  }

  // INVALID OPTION.
  else {
    alert("Invalid Option");

    atmMenu();
  }

  // CHECK BALANCE FUNCTION.

  function checkBalance() {
    alert(`Your current balance is N${"Balance"}`);

    atmMenu();
  }

  // DEPOSIT MONEY FUNCTION.

  function depositMoney() {
    const amount = Number(prompt("Enter the amount to deposit"));

    // VALIDATION.
    if (amount > 0){
      balance += amount;
      alert(`Deposit Successful
        New Balance: n${balance}`);
    } else {
      alert("Invalid Amount");
    }

    atmMenu();
  }

 // WITHDRAW FUNCTION.
 function withdrawMoney()  {
  const amount = Number(prompt("Enter the amount to withdraw"));

  if (amount <= 0) {
    alert("Invalid Amount");
  }

  else if(amount > balance) {
    alert("Insufficient Balance");
  }

  else {
    balance -= amount;
    alert(`Withdrawal Successful
   Remaining Balance: N${balance}`);
  }

  atmMenu();
 }
}
    
    login();
