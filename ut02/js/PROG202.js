let name = prompt ("Cual es tu nombre");
let notaPrimerExamen = prompt("nota de tu primer examen");
let notaSegundoExamen = prompt("nota segundo examen");

notaPrimerExamen = Number(notaPrimerExamen);
notaSegundoExamen = Number(notaSegundoExamen);

let media = ((notaPrimerExamen + notaSegundoExamen) /2);
let datos = (`Hola ${name}, la nota media de tus examenes es ${media}`);
alert(datos);