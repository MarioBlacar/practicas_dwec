let numero = prompt ("Escriba un numero con el cual pretende hacer la tabla");
let valor = prompt ("Escriba hasta que numero quiere que llegue");


for(let contador=1;contador <= valor; contador++){
    let resultado = numero * contador;
    let datos =  (`${numero} * ${contador} = ${resultado}`);
    alert(datos);
}