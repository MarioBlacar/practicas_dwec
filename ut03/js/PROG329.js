let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]

function getAverages(){
    let resultado;
    arr.forEach(element => {
        getNombreAlumno = element.nombre + " " + element.ape1 + element.ape2;
        getExpediente = element.expediente;
        getNotaMedia = element.notas.forEach(nota =>)
        resultado += asda[0] + asda[1].charAt(0) + asda[2].charAt(0);
    });
    return (resultado);
}
alert( getAverages() );