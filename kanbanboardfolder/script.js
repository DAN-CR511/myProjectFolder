const cards = document.querySelectorAll(".cards");
const lists = document.querySelectorAll(".list");

for(const card of cards) {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
}

for(const list of lists) {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
//THIS IS ALLOWS THE DROP LOCATION TO KNOW WHICH ELEMENT IS BEING MOVED WHEN YOU RELEASE IT.

    e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
    console.log("Drag ended");
}

function dragOver(e) {
    //THIS LINE IS IMPORTANT BECAUSE BY DEFAULT, BROWSERS DON'T ALLOW YOU TO DROP ELEMENTS ONTO OTHER ELEMENTS.

    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("over");
}

function dragLeave(e) {
    this.classList.remove("over");
}

function dragDrop(e) {
    const id = e.dataTransfer.getData("text/plain");

    const card = document.getElementById(id);

    this.appendChild(card);
    this.classList.remove("over");
}