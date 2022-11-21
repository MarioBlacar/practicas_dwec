let parrafos = document.getElementById('parrafos');
let numeroParrafos = document.getElementsByTagName('p').length;
console.log(numeroParrafos);
parrafos.textContent = numeroParrafos;

let direccionSegundo = document.getElementsByTagName('a');
console.log(direccionSegundo[1].href);
document.getElementById('segundo-enlace').textContent = direccionSegundo[1].href;

let numeroReferencias=0;
let a = document.getElementsByTagName('a');
document.getElementById('links-google-es').textContent = numeroReferencias;

let numeroPalabras = document.getElementsByTagName('p')[1].textContent.split(" ");
document.getElementById('palabras-segundo-parrafo').textContent = numeroPalabras.length;

