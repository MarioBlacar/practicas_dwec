let contadorcasillas = 0;
let anchoPantalla = window.innerWidth;
let altoPantalla = window.innerHeight;
let tablero = document.getElementById("board");
tablero.style.cssText = (`width:${anchoPantalla}px; height:${altoPantalla}px; background-color: white;`);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("tablero creado");

let randomAltura = randomizar(150, 400);
let randomAnchura = randomizar (150,400);
let randomPosicionX = randomizar(0,(anchoPantalla)-randomAnchura);
let randomPosicionY = randomizar(0,(altoPantalla)-randomAltura);

let objetivo = document.createElement("div");
objetivo.classList.add("target");
objetivo.addEventListener("click",mover);
objetivo.style.cssText = (`position:relative;  background-color: red;  top: ${randomPosicionX}px; left: ${randomPosicionY}px; width: ${randomAnchura}px;  height: ${randomAltura}px`);
tablero.append(objetivo);

function randomizar(minimo,maximo){
    return Math.round(Math.random()*(maximo-minimo)+minimo);
}

function mover(event) {
    contadorcasillas++;
    let contador = document.getElementById("contador");
    contador.textContent = (`Contador: ${contadorcasillas}`);
    let randomAltura = randomizar(150, 400);
    let randomAnchura = randomizar (150,400);
    let randomPosicionX = randomizar(0,(anchoPantalla)-randomAnchura);
    let randomPosicionY = randomizar(0,(altoPantalla)-randomAltura);

    objetivo.style.cssText = (`position:relative;  background-color: red;  top: ${randomPosicionX}px; left: ${randomPosicionY}px; width: ${randomAnchura}px;  height: ${randomAltura}px;`);

}