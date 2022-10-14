function isHeterograma(str){
    let contadorA=0;
    for(let contador=0; contador<str.length;contador++){
        if(str.indexOf( str.charAt(contador) )){
            contadorA++;
        }
    }
    return (contadorA==0);

}
let objeto1 = prompt ("escriba la cadena la cual quiere saber si es un heterograma: ");
alert( isHeterograma(objeto1) );