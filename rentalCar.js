
function rentalCar(tipoDeVehiculo, diasDeAlquiler,sillasParaBebe){
    let costoDiario
    if (tipoDeVehiculo.toLowerCase()=="compacto") {
        costoDiario=14000*diasDeAlquiler;
    }
    else if(tipoDeVehiculo.toLowerCase()=="mediano"){
        costoDiario=17000*diasDeAlquiler;
    }
    else if(tipoDeVehiculo.toLowerCase()=="camioneta"){
        costoDiario=28000*diasDeAlquiler;
    }
    else {
        console.log("Ingrese correctamente el tipo de vehiculo las opciones son: Compacto, Mediano, Camioneta.");
    }
    let costoDeLaSilla = 1200*diasDeAlquiler;
    let pagoTotal = costoDiario;
    if (sillasParaBebe.toLowerCase() == "si" ) {
        pagoTotal = costoDiario + costoDeLaSilla;
        return pagoTotal
    }
    else if (sillasParaBebe.toLowerCase()=="no"){
        return pagoTotal
    } 
    else {
        console.log("su opcion no es valida ingrese si o no.");
    }
}
let dias = 4;
let tipov = "camioneta"
let silla = "si"

// let dias = 2;
// let tipov = "mediano"
// let silla = "si"

// let dias = 6;
// let tipov = "compacto"
// let silla = "no"

let pagoTotal=rentalCar(tipov,dias,silla)
if(pagoTotal==Number){
    if(silla.toLowerCase()=="si"){

        console.log("Estimado cliente: en base al tipo de vehiculo "+tipov+" alquilado considerando \n los "+dias+" dias ultilizados y la silla para bebe solicitada \n el monto total a pagar es de "+pagoTotal);
    }
    else if(silla.toLowerCase()=="no"){

        console.log("Estimado cliente: en base al tipo de vehiculo "+tipov+" alquilado considerando \n los "+dias+" dias ultilizados \n el monto total a pagar es de " + pagoTotal);
    }
}
else{
    
    console.log("usted esta ingresando opciones invalidas");
}
