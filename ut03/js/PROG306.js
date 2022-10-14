function convertBase( str, baseFrom, baseTo ){
    let resultado1;
    let resultado2;

    switch (baseFrom){
        case "B":
            resultado1 = Number(str) * 1; 
            break;
        case "KB":
            resultado1 = Number(str) * 10e3; 
            break;
        case "MB":
            resultado1 = Number(str) * 10e6; 
            break;
        case "GB":
            resultado1 = Number(str) * 10e9; 
            break;
        case "TB":
            resultado1 = Number(str) * 10e12; 
            break;            
        case "PB":
            resultado1 = Number(str) * 10e15; 
            break;
        case "EB":
            resultado1 = Number(str) * 10e18; 
            break;
        default:
            resultado1 = "error";
    }
    switch (baseTo){
        case "B":
            resultado2 = Number(resultado1) / 1; 
            break;
        case "KB":
            resultado2 = Number(resultado1) / 10e3; 
            break;
        case "MB":
            resultado2 = Number(resultado1) / 10e6; 
            break;
        case "GB":
            resultado2 = Number(resultado1) / 10e9; 
            break;
        case "TB":
            resultado2 = Number(resultado1) / 10e12; 
            break;            
        case "PB":
            resultado2 = Number(resultado1) / 10e15; 
            break;
        case "EB":
            resultado2 = Number(resultado1) / 10e18; 
            break;
        default:
            resultado2 = "error";
    }
    alert (resultado2);
}
let objeto1 = prompt ("escriba el numero por el que quiere conversionar: ");
let objeto2 = prompt ("escriba la magnitud actal: ");
let objeto3 = prompt ("escriba escriba la magnitud a la que pasa el numero: ");
alert( convertBase(objeto1,objeto2,objeto3) );