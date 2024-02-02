
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");


    if (!esNumero(temperaturaCelsius)) {
        alert("Por favor, ingrese un valor numérico para la temperatura.");
        convertirTemperatura(); 
        return;
    }

    // Convertir la temperatura a números
    temperaturaCelsius = parseFloat(temperaturaCelsius);

    // Realizar conversiones
    let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
    let temperaturaKelvin = celsiusToKelvin(temperaturaCelsius);

    // Imprimir resultados
    console.log("Grados Fahrenheit:", temperaturaFahrenheit.toFixed(2));
    console.log("Grados Kelvin:", temperaturaKelvin.toFixed(2));
}

// Llamar a la función principal
convertirTemperatura();
