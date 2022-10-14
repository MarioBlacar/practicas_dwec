function isIsograma(str){
    let contadorA=0;
    for(let contador=0; contador<str.length;contador++){
        if(str.indexOf( str.charAt(contador) )==-1){
            contadorA++;
        }
    }
    return (contadorA==1);

}
let objeto1 = prompt ("escriba la cadena la cual quiere saber si es un isograma: ");
alert( isIsograma(objeto1) );