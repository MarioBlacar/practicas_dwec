let usuario1 = {
    nombre: 'Mario',
    apellido: 'Blasco',
    }
function removeUndefined(a){
    let resultado = {

    }
    for( let key in a ){
        if(a[key] != undefined){
            resultado.key = a[key];
    }
    alert(resultado);
}
}
let objeto1 = prompt ("escriba uno de objetos que desea pasar por pantalla: ");
alert( intersectObjects(objeto1) );