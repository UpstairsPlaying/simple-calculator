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

function toggleScientific() {
    const scientificButtons = document.querySelector('.buttons.scientific');
    const toggleButton = document.getElementById('toggleButton');
    if (scientificButtons.classList.contains('hidden')) {
        scientificButtons.classList.remove('hidden');
        toggleButton.textContent = 'Simple';
    } else {
        scientificButtons.classList.add('hidden');
        toggleButton.textContent = 'Scientific';
    }
}
