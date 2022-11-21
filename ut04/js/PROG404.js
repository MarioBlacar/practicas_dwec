const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let item = document.getElementById('board');
let contadorcasillas=1;


for (const letra of letras) {
    let elemento = document.createElement("div");
    elemento.classList.add("fila");
    item.append(elemento);
    elemento.innerHTML += (`<span class="boardLetra"><p>${letra}</p></span>`);

    for(let contador=0;contador<8;contador++){
        let booleanBlanco = contadorcasillas%2==0;
        elemento.innerHTML += (`<span class="cell ${booleanBlanco}" id="${letra}${contador}"/>`);
        contadorcasillas++;
    }
    contadorcasillas++;
}