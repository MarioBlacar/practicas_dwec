function calc(numero1, numero2, operador){
    let resultado;
    switch (operador){
        case "+":
            resultado = Number(numero1) + Number(numero2); 
            break;
        case "-":
            resultado = numero1 - numero2; 
            break;
        case "*":
            resultado = numero1 * numero2; 
            break;
        case "/":
            resultado = numero1 / numero2; 
            break;
        case "%":
            resultado = numero1 % numero2; 
            break;            
        case "**":
            resultado = numero1 ** numero2; 
            break;
        default:
            resultado = "error";
    }
    alert(`el resultado es: ${resultado}`);
}

let num1 = prompt ("escriba un numero: ");
Number(num1);
let num2 = prompt ("escriba otro numero: ");
Number(num2);
let op = prompt ("escriba la operacion que quiere realizar: ");
alert( calc(num1,num2,op) );