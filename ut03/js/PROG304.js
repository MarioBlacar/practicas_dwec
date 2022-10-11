let usuario1 = {
    nombre: 'Mario',
    apellido: 'Blasco',
    }
let usuario2 = {
    nombre: 'Blanca',
    apellido: 'Blasco',
    curso: '2BACH',
    }
function intersectObjects(obj1, obj2){
    for( let key in obj2 ){
        if(key in a){
            return false;
        }
    }
    return true;
}
let objeto1 = prompt ("escriba uno de los dos objetos que desea pasar por pantalla: ");
let objeto2 = prompt ("escriba el otro objeto que desea pasar por pantalla: ");
console.log( intersectObjects(objeto1, objeto2) );