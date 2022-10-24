let numeros = [1,5,4,3,6,4,2,4,1];

function getOdd(arr){
    resultado = arr.forEach(element => {
        if((element%2) != 0){
            return(`${element}`);
        }
        
    });

}
let objeto1 = prompt ("escriba el nombre del array que quiere utilizar: ");
alert( getOdd(objeto1) );