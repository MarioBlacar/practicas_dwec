function isPrimo(numero){
    for(let contadorMayor=1;contadorMayor <=numero; contadorMayor++){
        let contarNumero=0;
        let resultado;
        for(let contador=1;contador <= contadorMayor; contador++){
            let modulo = contadorMayor % contador;
            if(modulo == 0){
                contarNumero++;
            }
        }
        if(contarNumero==2){
            resultado=true;
        }else{
            resultado=false;
        }
        alert(`el numero ${contadorMayor} es primo: ${resultado}`);
    }
}

let num = prompt ("escriba un numero: ");
Number(num);
alert( isPrimo(num) );