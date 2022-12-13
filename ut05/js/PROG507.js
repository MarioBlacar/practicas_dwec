let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let repetirContraseña = document.getElementById("2contraseña");
let boton = document.getElementById("btn-start");
boton.addEventListener("click",enviar);

function enviar(event){
    if(correo.value.indexOf("@") != -1 && correo.value.indexOf(".") != -1){
        console.log(correo.value);
    }else{
        console.log("correo incorrecto");
    }

    if (contraseña.value == repetirContraseña.value){
        console.log(contraseña.value);
        fortalezaContraseña(contraseña.value);
    }else{
        console.log("contraseña desigual");
    }
    
}

function fortalezaContraseña(c){
    if(c.length < 6){
        console.log("contraseña muy debil");
    }else{
        console.log("contraseña fuerte");
    }
}