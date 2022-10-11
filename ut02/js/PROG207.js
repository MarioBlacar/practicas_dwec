let valor = prompt ("Escriba hasta que numero quiere que llegue");
let resultado;

for(let contador=1;contador <= valor; contador++){
    for(let contadorInterno = 1; contadorInterno <= contador; contadorInterno++){
        resultado += "*";
        alert(resultado);
    }
    let resultado = '\n';
}