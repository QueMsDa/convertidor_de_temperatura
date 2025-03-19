const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const kelvinInput = document.getElementById('kelvinInput');
const rankineInput = document.getElementById('rankineInput');

function convertFromCelsius(value) {
    fahrenheitInput.value = (value * 9/5 + 32).toFixed(2);
    kelvinInput.value = (value + 273.15).toFixed(2);
    rankineInput.value = ((value + 273.15) * 9/5).toFixed(2);
}

function convertFromFahrenheit(value) {
    celsiusInput.value = ((value - 32) * 5/9).toFixed(2);
    kelvinInput.value = ((value - 32) * 5/9 + 273.15).toFixed(2);
    rankineInput.value = (parseFloat(value) + 459.67).toFixed(2);
}

function convertFromKelvin(value) {
    celsiusInput.value = (value - 273.15).toFixed(2);
    fahrenheitInput.value = ((value - 273.15) * 9/5 + 32).toFixed(2);
    rankineInput.value = (value * 9/5).toFixed(2);
}

function convertFromRankine(value) {
    celsiusInput.value = ((value - 491.67) * 5/9).toFixed(2);
    fahrenheitInput.value = (value - 459.67).toFixed(2);
    kelvinInput.value = (value * 5/9).toFixed(2);
}

celsiusInput.addEventListener('input', () => {
    const value = parseFloat(celsiusInput.value);
    if (!isNaN(value)) convertFromCelsius(value);
});

fahrenheitInput.addEventListener('input', () => {
    const value = parseFloat(fahrenheitInput.value);
    if (!isNaN(value)) convertFromFahrenheit(value);
});

kelvinInput.addEventListener('input', () => {
    const value = parseFloat(kelvinInput.value);
    if (!isNaN(value)) convertFromKelvin(value);
});

rankineInput.addEventListener('input', () => {
    const value = parseFloat(rankineInput.value);
    if (!isNaN(value)) convertFromRankine(value);
});

document.getElementById('convertButton').addEventListener('click', () => {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = 'Por favor, ingresa un valor válido.';
        return;
    }

    let result;

    // Conversiones
    if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            result = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            result = inputValue + 273.15;
        } else if (outputUnit === 'rankine') {
            result = (inputValue + 273.15) * 9/5;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            result = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            result = (inputValue - 32) * 5/9 + 273.15;
        } else if (outputUnit === 'rankine') {
            result = inputValue + 459.67;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            result = inputValue - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            result = (inputValue - 273.15) * 9/5 + 32;
        } else if (outputUnit === 'rankine') {
            result = inputValue * 9/5;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === 'rankine') {
        if (outputUnit === 'celsius') {
            result = (inputValue - 491.67) * 5/9;
        } else if (outputUnit === 'fahrenheit') {
            result = inputValue - 459.67;
        } else if (outputUnit === 'kelvin') {
            result = inputValue * 5/9;
        } else {
            result = inputValue;
        }
    }

    document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)} ${outputUnit}`;
});

const themeToggle = document.getElementById('themeToggle');

// Configurar el modo gris como predeterminado al cargar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('gray-theme');
    themeToggle.checked = false; // Asegurar que la palanca esté desactivada
});

themeToggle.addEventListener('change', () => {
    document.body.classList.remove('dark-theme', 'gray-theme');

    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('gray-theme');
    }
});
