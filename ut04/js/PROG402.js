let item = document.getElementById('months');
let months = "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(" ");
for(let contador=1;contador<=12;contador++){
    /*
    item.innerHTML += 
        `<div class='month'>
        <div class='month-number'>${contador}</div><div class='month-name'>${months[contador-1]}</div>
        </div>`;
    */

    let elemento = document.createElement("div");
    elemento.classList.add("month");

    let subelemento1 = document.createElement("div");
    subelemento1.classList.add("month-number");
    subelemento1.textContent = contador;
    let subelemento2 = document.createElement("div");
    subelemento2.classList.add("month-name");
    subelemento2.textContent = months[contador-1];

    elemento.append(subelemento1);
    elemento.append(subelemento2);
    item.append(elemento); 
}

/*
let content = document.getElementById("content");
let items = document.querySelectorAll('.item');

items.array.forEach((item) => {
    item.addEventListener("click", changeColor);
});

function changeColor(event){
    event.target.classList.toggle('active');
}
*/