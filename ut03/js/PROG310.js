function replaceWithPosition(str){
    let resultado = {};
    for ( let char of str ) {
        let i = 0;
        toLowerCase(char);
        resultado[i] = charCodeAt(char) - charCodeAt("a");
        i++;

    }
    return(resultado);
}
let objeto1 = prompt ("Escriba una cadena en la cual quiera saber la poscion en el abecedario de esa letra: ");
alert( replaceWithPosition(objeto1) );
