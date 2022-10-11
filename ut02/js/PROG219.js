function sumOfMults(num1, num2){
    let resultado=0;
    for(let contador=1;contador<= num2; contador++){
        resultado += contador * num1;
    }
    alert(`el resultado es: ${resultado}`);
}
let n1 = prompt ("escriba el numero de multiplos por el cual desea saber su sumatoria: ");
Number(n1);
let n2 = prompt ("escriba el numero por el cual multiplicar en cada iteracion: ");
Number(n2);
alert( sumOfMults(n1,n2) );