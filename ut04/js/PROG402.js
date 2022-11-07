let item = document.getElementById('months');
for(let contador=1;contador<=12;contador++){
    item.innerHTML += "<div class='month'></div>";
    let item2 = document.getElementById('month');
    item2.innerHTML += `<div class='month-number'>1</div><div class='month-name'>Enero</div>`;
    switch(contador){
        case 1:
            item2.innerHTML += `<div class='month-number'>${contador}</div><div class='month-name'>Enero</div>`;
            break;
        case 2:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Febrero</div>";
            break;
        case 3:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Marzo</div>";
            break;
        case 4:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Abril</div>";
            break;
        case 5:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Mayo</div>";
            break;
        case 6:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Junio</div>";
            break;
        case 7:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Julio</div>";
            break;
        case 8:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Agosto</div>";
            break;
        case 9:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Septiembre</div>";
            break;
        case 10:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Octubre</div>";
            break;
        case 11:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Noviembre</div>";
            break;
        case 12:
            item2.innerHTML += `<div class='month-number'>${contador}</div>`;
            item2.innerHTML += "<div class='month-name'>Dicembre</div>";
            break;
    }
}
