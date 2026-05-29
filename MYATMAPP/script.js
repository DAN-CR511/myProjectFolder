let balance = 300000;

alert(balance);

const name = prompt("please enter your name");
alert(`Hello, ${name}!`);
const pin = 2345;
const enteredPin = Number(prompt("Enter PIN"));
if(enteredPin === pin) {
    alert("correct PIN");
} else {
    alert("incorrect PIN");
}

function greet() {
    alert("Welcome!");
}
greet();
