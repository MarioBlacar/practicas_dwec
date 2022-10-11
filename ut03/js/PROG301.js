let usuario = {
    nombre: 'Mario',
    apellido: 'Blasco',
    }
function cloneObject(obj){
    let resultado = {
        ...obj,
    };
    alert(resultado);
}
let objeto = prompt ("escriba el objeto que desea pasar por pantalla: ");
alert( cloneObject(objeto) );