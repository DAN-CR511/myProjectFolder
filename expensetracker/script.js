const balanceEL = document.getElementById("balance");
const incomeAmountEL = document.getElementById("income-amount");
const expenseAmountEL = document.getElementById("expense-amount");
const transactionListEL = document.getElementById("transaction-list");
const transactionFormEL = document.getElementById("transaction-form");
const descriptionEL = document.getElementById("description");
const amountEL = document.getElementById("amount");

let transactions =JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEL.addEventListener("submit", addTransaction);

function addTransaction(e) {
    e.preventDefault();

    // get form values
    const description = descriptionEL.ariaValueMax().trim();
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