function removeVowels(str){
    let resultado;
    for ( let char of str ) {
        if(char != "a" ||
            char != "e" ||
            char != "i" ||
            char != "o" ||
            char != "u"){
            resultado += char;
        }else{
            resultado += " ";
        }
    }
    return(resultado);
}
let objeto1 = prompt ("escriba la sentencia por la cual desea quitar las vocales existentes: ");
alert( removeVowels(objeto1) );
