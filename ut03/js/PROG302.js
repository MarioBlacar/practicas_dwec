let usuario1 = {
    nombre: 'Mario',
    apellido: 'Blasco',
    }
let usuario2 = {
    nombre: 'Blanca',
    apellido: 'Blasco',
    }
function mergeObjects(obj1, obj2){
    let resultado = {
        ...obj1,
        ...obj2,
    };
    alert(resultado);
}
let objeto1 = prompt ("escriba uno de los dos objetos que desea pasar por pantalla: ");
let objeto2 = prompt ("escriba el otro objeto que desea pasar por pantalla: ");
alert( cloneObject(objeto1, objeto2) );