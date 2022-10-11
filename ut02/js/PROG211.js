let numero;
do{
     numero = prompt ("escriba un numero: ");
    if(numero%2 == 1){
        datos = ("El numero es impar");
    }else{
        datos = ("El numero es par");
    }
    alert(datos);
}while(numero>0);