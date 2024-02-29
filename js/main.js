let nombre = prompt("Cual es tu nombre?");
let primerNota, segundaNota, tercerNota;

// Función para validar si una nota está entre 1 y 10
function validarNota(nota) {
    return nota > 0 && nota <= 10;
}

//Bucles para solicitar y verificar que la nota sea válida
while (true) {
    primerNota = parseInt(prompt("Ingrese nota del primer trimestre"));
    if (validarNota(primerNota)) {
        break;
    } else {
        alert("Ingresar un valor entre 1 y 10");
    }
}

while (true) {
    segundaNota = parseInt(prompt("Ingrese nota del segundo trimestre"));
    if (validarNota(segundaNota)) {
        break;
    } else {
        alert("Ingresar un valor entre 1 y 10");
    }
}

while (true) {
    tercerNota = parseInt(prompt("Ingrese nota del tercer trimestre"));
    if (validarNota(tercerNota)) {
        break;
    } else {
        alert("Ingresar un valor entre 1 y 10");
    }
}

//Calcular promedio
function promediar(primerNumero, segundoNumero, tercerNumero) {
    return (primerNumero + segundoNumero + tercerNumero) / 3;
}

let promedio = promediar(primerNota, segundaNota, tercerNota);

if (promedio >= 8) {
    console.log("Tu nota final es un " + promedio.toFixed(2)); //.toFixed(2) redondea a 2 decimales
    console.log("Felicitaciones " + nombre + ", aprobaste como alumno sobresaliente.");
} else if (promedio >= 6 && promedio < 8) {
    console.log("Tu nota final es un " + promedio.toFixed(2));
    console.log("Felicidades " + nombre + ", aprobaste la materia.");
} else {
    console.log("Tu nota final es un " + promedio.toFixed(2));
    console.log("Lo siento " + nombre + ", desaprobaste la materia.");
}
