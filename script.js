let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    if (currentInput.slice(-1) === '+' || currentInput.slice(-1) === '-' || currentInput.slice(-1) === '*' || currentInput.slice(-1) === '/') {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
