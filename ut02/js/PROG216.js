function calc(capacity, from){
    let resultado;
    switch (from){
        case "B":
            resultado = Number(capacity) * 1; 
            break;
        case "KB":
            resultado = Number(capacity) * 10e3; 
            break;
        case "MB":
            resultado = Number(capacity) * 10e6; 
            break;
        case "GB":
            resultado = Number(capacity) * 10e9; 
            break;
        case "TB":
            resultado = Number(capacity) * 10e12; 
            break;            
        case "PB":
            resultado = Number(capacity) * 10e15; 
            break;
        case "EB":
            resultado = Number(capacity) * 10e18; 
            break;
        default:
            resultado = "error";
    }
    alert(`el resultado es: ${resultado}`);
}
let num = prompt ("escriba un numero: ");
Number(num);
let from = prompt ("escriba la medida: ");
alert( calc(num,from) );