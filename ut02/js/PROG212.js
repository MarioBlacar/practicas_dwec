function isPrimo(numero){
    let contarNumero=0;
    let resultado;
    for(let contador=1;contador <= numero; contador++){
        let modulo = numero % contador;
        if(modulo == 0){
            contarNumero++;
        }
    }
    if(contarNumero==2 || numero==1){
        resultado=true;
    }else{
        resultado=false;
    }
    alert(resultado);
}

let num = prompt ("escriba un numero: ");
Number(num);
alert( isPrimo(num) );