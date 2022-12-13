let contador;
let start = document.getElementById("btn-start");
start.addEventListener("click",empezar);
let reset = document.getElementById("btn-reset");
let botonesDificultad = document.getElementById("diff");
botonesDificultad.addEventListener( 'click', (event) => {
    document.getElementsByClassName("diff-level")[0].classList.remove("selected");
    document.getElementsByClassName("diff-level")[1].classList.remove("selected");
    document.getElementsByClassName("diff-level")[2].classList.remove("selected");
    document.getElementsByClassName("diff-level")[3].classList.remove("selected");
    document.getElementsByClassName("diff-level")[4].classList.remove("selected");
    event.target.classList.add("selected");
    } )

function randomizar(minimo,maximo){
    return Math.round(Math.random()*(maximo-minimo)+minimo);
}

function recogerNombreJugador(){
    if(document.getElementById("player-input").value != ""){
        let nombre = document.getElementById("player-input").value;
        console.log(nombre);

    }else{
        let nombre = "Invitado";
        document.getElementById("player-input").value = nombre;
        console.log(nombre);
    }
}

function podium(nombreParticipante,puntuacionAhora){
    if(puntuacionAhora>document.getElementsByClassName("ranking-score")[0].textContent){
        //Parte de los nombres de los concursantes
        document.getElementsByClassName("ranking-name")[2].textContent = document.getElementsByClassName("ranking-name")[1].textContent;
        document.getElementsByClassName("ranking-name")[1].textContent = document.getElementsByClassName("ranking-name")[0].textContent;
        document.getElementsByClassName("ranking-name")[0].textContent = nombreParticipante;
        //Parte de sus puntuaciones
        document.getElementsByClassName("ranking-score")[2].textContent = document.getElementsByClassName("ranking-score")[1].textContent;
        document.getElementsByClassName("ranking-score")[1].textContent = document.getElementsByClassName("ranking-score")[0].textContent;
        document.getElementsByClassName("ranking-score")[0].textContent = puntuacionAhora;

    }else if(puntuacionAhora>document.getElementsByClassName("ranking-score")[1].textContent){
        //Parte de los nombres de los concursantes
        document.getElementsByClassName("ranking-name")[2].textContent = document.getElementsByClassName("ranking-name")[1].textContent;
        document.getElementsByClassName("ranking-name")[1].textContent = nombreParticipante;
        //Parte de sus puntuaciones
        document.getElementsByClassName("ranking-score")[2].textContent = document.getElementsByClassName("ranking-score")[1].textContent;
        document.getElementsByClassName("ranking-score")[1].textContent = puntuacionAhora;

    }else if(puntuacionAhora>document.getElementsByClassName("ranking-score")[2].textContent){
        //Parte de los nombres de los concursantes
        document.getElementsByClassName("ranking-name")[2].textContent = nombreParticipante;
        //Parte de sus puntuaciones
        document.getElementsByClassName("ranking-score")[2].textContent = puntuacionAhora;
    }
}

let i=0;
function tiempo(){
    if(i>=20){
        console.log(i);
        clearInterval(temporizador);
        resetearPartida();
    }else{
        let temporizador = setInterval(function(){
            i = i+0.01;
            document.getElementById("time").innerHTML = (i.toFixed(2));
            
        },10);
    }
}

function empezar(event) {
    recogerNombreJugador();
    i=0;
    tiempo();
    contador = 0;
    start.removeEventListener("click",empezar);
    reset.addEventListener("click",resetearPartida);    

    let randomAltura = randomizar(5, 30);
    let randomAnchura = randomizar (5,30);
    let randomPosicionX = randomizar(0,100-randomAnchura);
    let randomPosicionY = randomizar(0,100-randomAltura);

    let objetivo = document.createElement("div");
    objetivo.setAttribute("id","target");
    objetivo.style.cssText = (`position:relative;  background-color: red;  top: ${randomPosicionX}vh; left: ${randomPosicionY}vh; width: ${randomAnchura}vh;  height: ${randomAltura}vh;`);
    objetivo.addEventListener("click",mover);

    let tablero = document.getElementById("game-zone");
    tablero.append(objetivo);
}

function resetearPartida(event){
    contador = 0;
    let score = document.getElementById("score");
    podium(document.getElementById("player-input").value,score.textContent);
    score.textContent = (`${contador}`);
    start.addEventListener("click",empezar);
    let objetivo = document.getElementById("target");
    objetivo.outerHTML = "";
    reset.removeEventListener("click",resetearPartida);
}

function mover(event) {
    contador++;
    let score = document.getElementById("score");
    score.textContent = (`${contador}`);
    let randomAltura = randomizar(5, 30);
    let randomAnchura = randomizar (5,30);
    let randomPosicionX = randomizar(0,100-randomAnchura);
    let randomPosicionY = randomizar(0,100-randomAltura);

    let objetivo = document.getElementById("target");
    objetivo.style.cssText = (`position:relative;  background-color: red;  top: ${randomPosicionX}vh; left: ${randomPosicionY}vh; width: ${randomAnchura}vh;  height: ${randomAltura}vh;`);

}