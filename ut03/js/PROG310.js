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
let objeto1 = prompt ("escriba la sentencia por la cual desea quitar las vocales existentes: ");
alert( replaceWithPosition(objeto1) );
