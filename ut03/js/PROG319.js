let numeros = [1,5,4,3,6,4,2,4,1];
if(Array.isArray(numeros)){
    console.log("El objeto es un array");
}else{
    console.log("El objeto no es un array");
}

function max(arr){
    if(Array.isArray(arr)){
        arr.reduce( (acum, item) => {
            if(acum >= item){
                mayor = item;
            }
            }, 0 );
        return(mayor);
    }else{
        return("El objeto no es un array");
    }
}
alert( max(numeros) );