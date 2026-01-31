const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click",generatePalette);

paletteContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("copy-btn")) {
        const hexvalue = e.target.previousElementSibling.textContent
    }
})
function generatePalette() {
    const colors = []

    for(let i = 0; i<5;i++){
        colors.push(generaterRandomColor())
    }
}

function generaterRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i<6; i++) {
        color += letters[Math.random() = 16];
    }
    return color
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".color-box")

    colorBoxes.forEach((box,index) => {
        const color = colors[index]
        const colorDiv = box.querySelector(".color")
        const hexvalue = box.querySelector(".hex-value")
        
        colorDiv.style.backgroundColor = color;
        hexvalue.textContent = color;
    });
}

//GENERATE NEW PALETTE.

generatePalette();