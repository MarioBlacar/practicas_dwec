let arr = [
    {   nombre: 'Mario Blasco Carrión', curso: 'DAW'},
    {   nombre: 'Victor Martinez Escobar', curso: 'DAW'},
    {   nombre: 'Lidia Lopez Lopez', curso: 'DAW'},
    {   nombre: 'Blanca Blasco Carrión', curso: 'BACH2'},
];

function getUsernames(){
    let resultado;
    arr.forEach(element => {
        let asda = element.nombre.toLowerCase().split(" ");  
        resultado += "\n";
        resultado += asda[0] + asda[1].charAt(0) + asda[2].charAt(0);
    });
    return (resultado);
}
alert( getUsernames() );