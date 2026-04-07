import { trigRatios } from "./righttrianglecalculations.js";
import { lawOfSin } from "./righttrianglecalculations.js";
import { lawOfCos } from "./righttrianglecalculations.js";

const inputAngleA = document.getElementById("angleA");
const inputAngleB = document.getElementById("angleB");
const inputAngleC = document.getElementById("angleC");
const inputSideA = document.getElementById("sideA");
const inputSideB = document.getElementById("sideB");
const inputSideC = document.getElementById("sideC");

const submitButton = document.getElementById("calcbutton");
const swaptri = document.getElementsByClassName("swaptri");
const swaptribtn = document.getElementById("swaptri");

swaptribtn.addEventListener('click', () => {
    // console.log(Number(swaptribtn.checked));
    document.getElementById("output-angleA").textContent = "m∠A = " + Math.round(output[0 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-angleB").textContent = "m∠B = " + Math.round(output[1 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-angleC").textContent = "m∠C = " + Math.round(output[2 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-sideA").textContent = "a = " + Math.round(output[3 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;
    document.getElementById("output-sideB").textContent = "b = " + Math.round(output[4 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;
    document.getElementById("output-sideC").textContent = "c = " + Math.round(output[5 + (Number(swaptribtn.checked) * 6)] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;
})

for (let i = 0; i < swaptri.length; i++) {
    swaptri[i].style.opacity = 0;
}

let lastTime = 0;
let input = [0, 0, 0, 0, 0, 0];

let numberofAngles = 0;
let numberofSides = 0;

let output;

function inputValidCheck() {

    numberofAngles = 0;
    numberofSides = 0;

    input = [0, 0, 0, 0, 0, 0];

    if (inputAngleA.value >= 180 || inputAngleA.value < 0) {
        buttonErrorFeedback();
        return;
    } else if (inputAngleA.value > 0) {
        input[0] = Number(inputAngleA.value);
    }

    if (inputAngleB.value >= 180 || inputAngleB.value < 0) {
        buttonErrorFeedback();
        return
    } else if (inputAngleB.value > 0) {
        input[1] = Number(inputAngleB.value);
    }

    if (inputAngleC.value >= 180 || inputAngleC.value < 0) {
        buttonErrorFeedback();
        return
    } else if (inputAngleC.value > 0) {
        input[2] = Number(inputAngleC.value);
    }

    if (inputSideA.value < 0) {
        buttonErrorFeedback();
        return;
    } else if (inputSideA.value > 0) {
        input[3] = Number(inputSideA.value);
    }

    if (inputSideB.value < 0) {
        buttonErrorFeedback();
        return;
    } else if (inputSideB.value > 0) {
        input[4] = Number(inputSideB.value);
    }

    if (inputSideC.value < 0) {
        buttonErrorFeedback();
        return;
    } else if (inputSideC.value > 0) {
        input[5] = Number(inputSideC.value);
    }

    for (let i = 0; i < 3; i++) {
        if (input[i] > 0) {
            numberofAngles++;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (input[i+3] > 0) {
            numberofSides++;
        }
    }

    if (numberofAngles < 1 && numberofSides < 1) {
        buttonErrorFeedback();
        return;
    }

    if (numberofSides < 1) {
        buttonErrorFeedback();
        return;
    }
    
    if (!input.slice(0, 3).includes(90) && numberofAngles < 2 && numberofSides < 2) {
        buttonErrorFeedback();
        return;
    }
    
    if (numberofAngles < 2 && numberofSides < 2) {
        buttonErrorFeedback();
        return;
    }

    if (input[0] + input[1] + input[2] > 180) {
        buttonErrorFeedback();
        return;
    }

    if (numberofAngles == 3) {
        if (input[0] + input[1] + input[2] != 180) {
            buttonErrorFeedback();
            return;
        }
    }

    // console.log("Input is valid");
    calculate();
};

function calculate() {
    swaptribtn.checked = false;

    if (input.slice(0, 3).includes(90)) {
        output = trigRatios(input);
    } else if (numberofAngles >= 2 && numberofSides >= 1) {
        output = lawOfSin(input);
    } else if (numberofSides === 3 || numberofSides >= 2 && numberofAngles >= 1) {
        output = lawOfCos(input);
    }

    document.getElementById("output-angleA").textContent = "m∠A = " + Math.round(output[0] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-angleB").textContent = "m∠B = " + Math.round(output[1] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-angleC").textContent = "m∠C = " + Math.round(output[2] * 10 ** document.getElementById("roundtoangle").value) / 10 ** document.getElementById("roundtoangle").value;
    document.getElementById("output-sideA").textContent = "a = " + Math.round(output[3] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;
    document.getElementById("output-sideB").textContent = "b = " + Math.round(output[4] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;
    document.getElementById("output-sideC").textContent = "c = " + Math.round(output[5] * 10 ** document.getElementById("roundtoside").value) / 10 ** document.getElementById("roundtoside").value;

    

    if (output.length > 6) {
        for (let i = 0; i < swaptri.length; i++) {
            swaptri[i].style.opacity = 1;
        }
    } else {
        for (let i = 0; i < swaptri.length; i++) {
            swaptri[i].style.opacity = 0
        }
    }
    
}

function buttonErrorFeedback() {
    submitButton.classList.add("shake");
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.classList.remove("shake");
        submitButton.disabled = false;
    }, 300);
}

function tick(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    document.getElementsByClassName("very-tuff-text")[0].textContent = "Round Angle (" + document.getElementById("roundtoangle").value + ")";

    document.getElementsByClassName("very-tuff-text")[1].textContent = "Round Side (" + document.getElementById("roundtoside").value + ")";

    // End of Loop
    requestAnimationFrame(tick);
};

requestAnimationFrame(tick);

submitButton.addEventListener("click", () => inputValidCheck());

// --- Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update Emoji
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});