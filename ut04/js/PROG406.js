let boton = document.getElementById("btn");
let items = document.getElementsByTagName('img');
numeroImagenes = items.length;
console.log(numeroImagenes);
boton.addEventListener("click", moverALaDerecha());

function moverALaDerecha(){
    let obj = document.getElementsByTagName('img');
    let reordenado= obj.pop();
    obj[0].replace(reordenado[0]);
    let contador=0;
    do{
        reordenado.push(obj[contador]);
        contador++;
    }while(contador=obj.length-1);
}
