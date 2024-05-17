function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value === '0' ? number : display.value + number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
