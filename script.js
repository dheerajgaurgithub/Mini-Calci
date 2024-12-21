let currentInput = '';
let currentOperation = null;
let previousInput = '';
// let isOn = false;
// const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}


function deleteLastDigit() {
    let currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    if (currentOperation === null || currentInput === '' || previousInput === '') return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}

