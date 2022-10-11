function esTriangulo(num1, num2, num3){
    let resultado;
    if((num1 + num2) > num3 ||
       (num2 + num3) > num1 ||
       (num1 + num3) > num2){
        resultado = true;
    }else{
        resultado = false;
    }
    alert(`el resultado es: ${resultado2}`);
}
let n1 = prompt ("escriba la medida del primer lado del triangulo: ");
Number(n1);
let n2 = prompt ("escriba la medida del segundo lado del triangulo: ");
Number(n2);
let n3 = prompt ("escriba la medida del tercer lado del triangulo: ");
Number(n3);
alert( esTriangulo(n1,n2,n3) );