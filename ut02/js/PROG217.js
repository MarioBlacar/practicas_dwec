function convertCapacity(capacity, from, to){
    let resultado1;
    let resultado2;
    switch (from){
        case "B":
            resultado1 = Number(capacity) * 1; 
            break;
        case "KB":
            resultado1 = Number(capacity) * 10e3; 
            break;
        case "MB":
            resultado1 = Number(capacity) * 10e6; 
            break;
        case "GB":
            resultado1 = Number(capacity) * 10e9; 
            break;
        case "TB":
            resultado1 = Number(capacity) * 10e12; 
            break;            
        case "PB":
            resultado1 = Number(capacity) * 10e15; 
            break;
        case "EB":
            resultado1 = Number(capacity) * 10e18; 
            break;
        default:
            resultado1 = "error";
    }
    switch (from){
        case "B":
            resultado2 = Number(capacity) / 1; 
            break;
        case "KB":
            resultado2 = Number(capacity) / 10e3; 
            break;
        case "MB":
            resultado2 = Number(capacity) / 10e6; 
            break;
        case "GB":
            resultado2 = Number(capacity) / 10e9; 
            break;
        case "TB":
            resultado2 = Number(capacity) / 10e12; 
            break;            
        case "PB":
            resultado2 = Number(capacity) / 10e15; 
            break;
        case "EB":
            resultado2 = Number(capacity) * 10e18; 
            break;
        default:
            resultado2 = "error";
    }
    alert(`el resultado es: ${resultado2}`);
}
let num = prompt ("escriba un numero: ");
Number(num);
let from = prompt ("escriba la medida anterior: ");
let to = prompt ("escriba la medida a la cual quiere conversionar: ");
alert( calc(num,from,to) );