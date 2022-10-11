function fact(numero){
    let resultado=1;
    for(let contador=1;contador <= numero; contador++){
        resultado = contador * resultado;
    }
    alert(`el resultado es: ${resultado}`);
}

let num = prompt ("escriba un numero: ");
Number(num);
alert( fact(num) );