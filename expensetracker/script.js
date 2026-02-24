const balanceEL = document.getElementById("balance");
const incomeAmountEL = document.getElementById("income-amount");
const expenseAmountEL = document.getElementById("expenses-amount");
const transactionListEL = document.getElementById("transaction-list");
const transactionFormEL = document.getElementById("transaction-form");
const descriptionEL = document.getElementById("description");
const amountEL = document.getElementById("amount");

let transactions =JSON.parse(localStorage.getItem("transactions")) || [];

updateTransactionsList();
updateSummary();


transactionFormEL.addEventListener("submit", addTransaction);

function addTransaction(e) {
    e.preventDefault();

    // get form values
    const description = descriptionEL.value.trim();
    const amount =parseFloat(amountEL.value);

    transactions.push({
        id:Date.now(),
        description,
        amount
    });

    localStorage.setItem("transactions",JSON.stringify(transactions));

    updateTransactionsList();
    updateSummary();

    transactionFormEL.reset();
}

function updateTransactionsList() {
    transactionListEL.innerHTML = "";

    const sortedTransactions = [...transactions].reverse();

    sortedTransactions.forEach((transaction) => {
        const transactionEL = createTransactionElement(transaction);
        transactionListEL.appendChild(transactionEL);
    });
}

function createTransactionElement(transaction) {
    const li = document.createElement("li");
    li.classList.add("transaction");
    li.classList.add(transaction.amount > 0 ? "income" : "expense");

    // todo: update the amount formatting
    li.innerHTML = `
    <span>${transaction.description}</span>
    <span>
    
    ${transaction.amount}
      <button 
       type="button"
       class="delete-btn" 
    onclick="removeTransaction(${transaction.id})">X</button>
    </span>
    `;

    return li;
}

function updateSummary () {

    console.log("updateSummary running");
    console.log(transactions);


    // 100, -50, 200, -200, => 50
    const balance = transactions.reduce ((acc,transaction) => acc + transaction.amount ,0);

    const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc,transaction) => acc + transaction.amount ,0);

    const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

    // update ui => Todo: fix the formatting
    balanceEL.textContent = balance;
    incomeAmountEL.textContent = income;
    expenseAmountEL.textContent = expenses;
}