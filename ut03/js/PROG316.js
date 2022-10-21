/*
let arr = [
    {nombre: 'Victor', curso: 1, ciclo:'DAW'},
    {nombre: 'Pepe', curso: 2, ciclo:'SMR'},
    {nombre: 'Luis', curso: 1, ciclo:'DAW'},
    {nombre: 'Andres', curso: 1, ciclo:'ASIR'}
];
let personas = arr.filter( item => item.curso == 1 && item.ciclo == 'SMR');

alert( personas.nombre );
*/
let numeros = [1,5,4,3,6,4,2,4,1];

function getOdd(arr){
    resultado = arr.array.forEach(element => {
        if((element%2) != 0){
            alert(`${element}`);
        }
        
    });

}
let objeto1 = prompt ("escriba el nombre del array que quiere utilizar: ");
alert( getOdd(objeto1) );