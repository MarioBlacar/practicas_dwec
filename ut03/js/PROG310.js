function replaceWithPosition(str){
    let resultado;
    for ( let char of str ) {
        toLowerCase(char);
        resultado = parseInt(char,36) - 9;

    }
    return(resultado);
}
let objeto1 = prompt ("Escriba una cadena en la cual quiera saber la poscion en el abecedario de esa letra: ");
alert( replaceWithPosition(objeto1) );
