let item = document.getElementById('numbers');
for(let contador=1;contador<=20;contador++){
    
    let elemento = document.createElement("span");
    elemento.classList.add("number");
    elemento.textContent = contador;
    item.append(elemento);
    

    //item.innerHTML += `<span class='number'>${contador}</span>`;
}
