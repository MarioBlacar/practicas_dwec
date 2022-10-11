let calle = prompt ("escriba la calle en la que vive: ");
let linea;
let datos;

if(calle == "Calle Los Claveles" || calle == "Calle El Rosal" || calle == "Calle Las Hortensias" || calle == "Calle Las Margaritas"){
    linea = "linea1";
}else if(calle == "Calle Teleno" || calle == "Calle Catoute" || calle == "Calle Peña Ubiña" || calle == "Calle Vizcodillo"){
    linea = "linea2";
}else if(calle == "Calle Astorga" || calle == "Calle La Bañeza" || calle == "Calle Benavente"){
    linea = "linea3";
}
datos = (`Tienes que tomar la ${linea} para ir desde la ${calle} hasta el trabajo`);
alert(datos);