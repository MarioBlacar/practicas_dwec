let usuario = {
    nombre: 'Mario',
    apellido: 'Blasco',
    };
function cloneObject(obj){
    return {...obj};
};
let objeto = prompt ("escriba el objeto que desea pasar por pantalla: ");
let clone = cloneObject(objeto);
console.log( clone );