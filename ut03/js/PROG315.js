let nombres = ["Luis", "Sebastian", "Agus", "María"];

function sendMessage(arr){
    resultado = arr.array.forEach(element => {
        alert(`Hola, ${element}, bienvenido al curso de DWEC`);
    });

}
let objeto1 = prompt ("escriba una cadena con multiples nombres de usuario separados por comas: ");
alert( sendMessage(objeto1) );