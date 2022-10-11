let edad = prompt ("escriba su año de nacimiento: ");

edad = Number(edad);
let datos;

if(edad > 1994 && edad < 2010){
    datos = ("Generación Z");
}if(edad > 1981 && edad < 1993){
    datos = ("Generación Millenial");
}if(edad > 1969 && edad < 1980){
    datos = ("Generación X");
}if(edad > 1949 && edad < 1968){
    datos = ("Baby Boomer");
}
alert(datos);