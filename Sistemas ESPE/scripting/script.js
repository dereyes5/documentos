function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 + num2;
    document.getElementById('resultado').textContent = resultado;
}
function restar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 - num2;
    document.getElementById('resultado').textContent = resultado;
}
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = resultado;
}
function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    if (num2 === 0) {
        alert('No se puede dividir por cero.');
        return;
    }

    const resultado = num1 / num2;
    document.getElementById('resultado').textContent = resultado;
}
function compararMayor() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 > num2;
    document.getElementById('resultado').textContent = resultado ? "Verdadero" : "Falso";
}
function compararMenor() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 < num2;
    document.getElementById('resultado').textContent = resultado ? "Verdadero" : "Falso";
}
function compararIgual() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }

    const resultado = num1 === num2;
    document.getElementById('resultado').textContent = resultado ? "Verdadero" : "Falso";
}
