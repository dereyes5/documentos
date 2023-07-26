// Definimos una función que calcula el área de un círculo
function calcularAreaCirculo(radio) {
    // Fórmula del área del círculo: área = π * radio al cuadrado
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

// Solicitamos al usuario que ingrese el radio del círculo
const radioUsuario = prompt("Ingresa el radio del círculo:");

// Convertimos el valor del radio ingresado por el usuario a un número
const radioNumerico = parseFloat(radioUsuario);

// Verificamos si el radio ingresado es un número válido
if (!isNaN(radioNumerico) && radioNumerico > 0) {
    // Calculamos el área del círculo utilizando la función definida
    const areaDelCirculo = calcularAreaCirculo(radioNumerico);

    // Mostramos el resultado en la consola
    console.log("El área del círculo es: " + areaDelCirculo.toFixed(2));
} else {
    // Si el radio ingresado no es válido, mostramos un mensaje de error
    console.log("Error: Ingresa un valor numérico válido para el radio del círculo.");
}
