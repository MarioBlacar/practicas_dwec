let mayor;
let menor;
for(let contador=1; contador <=5;contador++){
    let numeros = prompt (`escriba el ${contador} numero: `);
    numeros = Number(numeros);
    if(numeros>mayor){
        mayor = numeros;
    }
    if(numeros<menor){
        menor = numeros;
    }
}
datos = (`El mayor número es ${mayor} y el menor ${menor}`);
alert(datos);