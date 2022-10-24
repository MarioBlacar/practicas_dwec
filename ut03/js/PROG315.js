let nombres = ["Luis", "Sebastian", "Agus", "María"];

function sendMessage(arr){
    resultado = arr.forEach(element => {
        return(`Hola, ${element}, bienvenido al curso de DWEC`);
    });

}
let objeto1 = prompt ("escriba una cadena con multiples nombres de usuario separados por comas: ");
alert( sendMessage(objeto1) );