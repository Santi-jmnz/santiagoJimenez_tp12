let mensaje="hola soy santi"
function upperConverter(texto){
    texto=texto.toUpperCase();
    return texto;
}
// console.log(upperConverter(mensaje));

let fechaDeNacimiento="02/05/98"
function dataType(str){
    str=typeof(str);
    return str;
}

// console.log(dataType(fechaDeNacimiento));

let edadHumana=10;
function dogAge(perro){
    perro = perro*7;
    return perro;
}

// console.log("la edad humana de "+edadHumana+" años son "+dogAge(edadHumana)+" de perro");

function hourPrice(SalarioMensual,diasDeTrabajo,horasDeTrabajo){
    let precioHora=SalarioMensual/diasDeTrabajo/horasDeTrabajo;
    precioHora = precioHora.toFixed(2);
    return precioHora;
}

// console.log("en base al salario mensual el cobro de su hora de trabajo es de: $"+hourPrice(20000,25,12));

module.exports={upperConverter,dataType,hourPrice} 