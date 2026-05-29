const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strength-label");

// CHARACTER SET
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

lengthSlider.addEventListener("input",() => {
    lengthDisplay.textContent = lengthSlider.value;
});

generateButton.addEventListener("click", makePassword)

function makePassword() {
    const length = Number(lengthSlider.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("Please select at least one charac type");
        return;
    }

    const newPassword = createRandomPassword(length,includeUppercase, includeLowercase, includeNumbers, includeSymbols);

    passwordInput.value = newPassword;
    updateStrengthMeter(newPassword);
}

function updateStrengthMeter(password) {
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/.test(password);

    let strengthScore = 0;

    // here the .min will get the minimum value
    // but this will make sure that "at maximum" you would get 40
    strengthScore += Math.min(passwordLength * 2, 40);

    if(hasUppercase) strengthScore += 15;
    if(hasLowercase) strengthScore += 15;
    if(hasNumber) strengthScore += 15;
    if(hasSymbol) strengthScore += 15;

    // enforce minimum score for every short password.
    if(passwordLength < 8) {
        strengthScore = Math.min(strengthScore, 40);
    }

    // ensure the width of the strength bar is a valid percentage.
    const safeScore = Math.max(5, Math.min(100, strengthScore));
    strengthBar.style.width = safeScore + "%";
    
    let strengthLabelTest = "";
    let barColor = "";

    if(strengthScore < 40) {
        // WEAK PASSOWRD
        barColor = "#fc8181";
        strengthLabelTest = "Weak";
    } else if (strengthScore < 70) {
        //MEDIUM PASSWORD
        barColor = "#fbd38d"; // yellow
        strengthLabelTest = "Medium";
    } else {
        // STRONG PASSOWRD
        barColor = "#68d391"; // green
        strengthLabelTest = "Strong";
    }

    strengthBar.style.backgroundColor = barColor;
    strengthLabel.textContent = strengthLabelTest;
}

function createRandomPassword(
    length, 
    includeUppercase, 
    includeLowercase,
    includeNumbers, 
    includeSymbols
) {
    let allCharcters = "";
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(includeUppercase) allCharcters += uppercaseLetters;
    if(includeLowercase) allCharcters += lowercaseLetters;
    if(includeNumbers) allCharcters += numberCharacters;
    if(includeSymbols) allCharcters += symbolCharacters;
    
    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * allCharcters.length);
        password += allCharcters[randomIndex];
    }

    return password;
    
}