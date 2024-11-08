function callback(tipoDeHamburguesa,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla) {
    let costoHamburguesa=0;
    switch(tipoDeHamburguesa){
        case "carne a la parrilla":
            costoHamburguesa=1800;
            break;
        case "pollo":
            costoHamburguesa=1500;
            break;
        case "vegetariana":
            costoHamburguesa=1200;
            break;
        default:
            costoHamburguesa=null;
            break;
    }
    if(!costoHamburguesa)return;
    if (jamon) {
        costoHamburguesa=costoHamburguesa+30;
    }
    if (queso){
        costoHamburguesa+=25;
    }
    if (salsaDeTomate){
        costoHamburguesa+=5;
    }
    if (mayonesa){
        costoHamburguesa+=5;
    }
    if (mostaza){
        costoHamburguesa+=5;
    }
    if (tomate){
        costoHamburguesa+=15;
    }
    if (lechuga){
        costoHamburguesa+=10;
    }
    if (cebolla){
        costoHamburguesa+=10;
    }
    return costoHamburguesa;
}
nombreDelUsuario="Daniel";
apellidoDelUsuario="Fuentes";

function fastFood(nombreDelUsuario,apellidoDelUsuario,tipoDeHamburguesa,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
    let mensaje;
    let funcion = callback(tipoDeHamburguesa,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla)
    if(funcion){
        mensaje="Estimado "+nombreDelUsuario+" "+apellidoDelUsuario+" el monto total a pagar es de: $"+funcion;
        return mensaje;
    }mensaje="Usted esta ingresando datos invalidos intente de nuevo"
    return mensaje;
}

let mensaje=fastFood(nombreDelUsuario,apellidoDelUsuario,"pollo", true, true,false,true,true,false,true,false);
// let mensaje=fastFood(nombreDelUsuario,apellidoDelUsuario,"carne a la parrilla", true, true,false,true,true,false,true,false);
// let mensaje=fastFood(nombreDelUsuario,apellidoDelUsuario,"vegetariana", true, true,false,true,true,false,true,false);
console.log(mensaje);

