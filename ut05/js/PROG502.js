let item = document.getElementById('board');
let contadorcasillas=1;

for (let contador=0;contador<10;contador++) {
    let elemento = document.createElement("div");
    elemento.classList.add("fila");
    item.append(elemento);

    for(let contadordecenas=0;contadordecenas<10;contadordecenas++){
        elemento.innerHTML += (`<span class="cell" id="${contadordecenas*10 + contador}">${contador + contadordecenas*10}</span>`);
    }
}

board.addEventListener( 'click', (event) => {
    let casilla = event.target.id;
    
    if(document.getElementById(casilla).className != "colorear" && document.getElementById(casilla).className != "colorearPerma"){
        document.getElementById(casilla).setAttribute("class","colorear");
    }else if(document.getElementById(casilla).className != "colorearPerma"){
        document.getElementById(casilla).setAttribute("class","cell");
    }
    } )

board.addEventListener( 'dblclick', (event) => {
    let casilla = event.target.id;
    console.log(casilla);
    document.getElementById(casilla).setAttribute("class","colorearPerma");
    } )
    