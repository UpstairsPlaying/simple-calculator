function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value === '0' ? number : display.value + number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function appendFunction(func) {
    const display = document.getElementById('display');
    display.value += func;
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

function toggleCalculatorMode() {
    const modeSelector = document.getElementById('modeSelector');
    const simpleButtons = document.querySelector('.buttons.simple');
    const scientificButtons = document.querySelector('.buttons.scientific');
    if (modeSelector.value === 'scientific') {
        simpleButtons.classList.add('hidden');
        scientificButtons.classList.remove('hidden');
    } else {
        simpleButtons.classList.remove('hidden');
        scientificButtons.classList.add('hidden');
    }
}
