let numeros = [1,5,4,3,6,4,2,4,1];

function createPow(arr,pow){
    resultado = arr.array.forEach(element => {
        alert(element**pow);
        
    });

}
let objeto1 = prompt ("escriba el nombre del array que quiere utilizar: ");
let objeto2 = prompt ("escriba por cuanto quiere exponer estos numeros: ");
alert( createPow(objeto1,objeto2) );