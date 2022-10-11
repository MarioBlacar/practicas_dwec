function getFibonacciAt( num ){
    let resultado;
    resultado = ( num-1 ) + ( num-2 );
    alert(`el resultado es: ${resultado}`);
}
let n = prompt ("escriba el numero del cual quiere saber la serie de Fibonacci: ");
Number(n);
alert( getFibonacciAt( n ) );