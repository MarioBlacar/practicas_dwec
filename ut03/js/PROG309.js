function removeVowels(str){
    let resultado="";
    for ( let char of str ) {
        if(char != "a" && char != "A" &&
            char != "e" && char != "E" &&
            char != "i" && char != "I" && 
            char != "o" && char != "O" &&
            char != "u" && char != "U"){
            resultado += char;
        }else{
            resultado += " ";
        }
    }
    return(resultado);
}
let objeto1 = prompt ("escriba la sentencia por la cual desea quitar las vocales existentes: ");
alert( removeVowels(objeto1) );
