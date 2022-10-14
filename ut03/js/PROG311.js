function ascendDescend( len, min, max ){
    let resultado="";
    let contador=0;
    do{
        for(let contadorAsc=min;contadorAsc<=max;contadorAsc++){
            if(contador <= len){
                resultado +=" ".contadorAsc;
                contador++;
            }else{
                break;
            }
        }
        for(let contadorDes=min;contadorDes<=max;contadorDes++){
            if(contador <= len){
                resultado +=" ".contadorDes;
                contador++;
            }else{
                break;
            }
        }
    }while(contador <= len);
    
    return(resultado);
}
let objeto1 = prompt ("escriba la longitud de su cadena: ");
let objeto2 = prompt ("escriba el numero minimo en el que se pare la secuencia: ");
let objeto3 = prompt ("escriba el numero maximo en el que se pare la secuencia: ");
alert( ascendDescend(objeto1,objeto2,objeto3) );
