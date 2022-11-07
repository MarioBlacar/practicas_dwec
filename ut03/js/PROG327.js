let arr = [
    {   nombre: 'Mario Blasco Carrión', curso: 'DAW'},
    {   nombre: 'Victor Martinez Escobar', curso: 'DAW'},
    {   nombre: 'Lidia Lopez Lopez', curso: 'DAW'},
    {   nombre: 'Blanca Blasco Carrión', curso: 'BACH2'},
];

function getNumberOfAlumnos(str){
    let usuario = arr.filter( item => item.curso == str );
    let resultado=0;
    usuario.forEach(element => {
        resultado ++;
    });
    return (resultado);
}
let objeto1 = prompt ("escriba el nombre del curso que quiere saber: ");
alert( getNumberOfAlumnos(objeto1) );