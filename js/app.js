function numberParse(mensaje) {
    const number = prompt(mensaje);
    const numberConvert = parseInt(number);
    return numberConvert;
}

function ageAverage(a1, a2, a3, a4){

    const result = parseInt((a1 + a2 + a3 + a4) / 4);
    const showResult = console.log("El resultado del promedio es el siguiente:", result);
    return showResult;
}



const age1 = numberParse("Ingresa la primera edad");
const age2 = numberParse("Ingresa la segunda edad");
const age3 = numberParse("Ingresa la tercera edad");
const age4 = numberParse("Ingresa la cuarta edad");

ageAverage(age1, age2, age3, age4);