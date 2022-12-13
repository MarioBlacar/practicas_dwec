let boton = document.getElementById("boton");
boton.addEventListener("click", desplegable);

function desplegable(){
    boton.removeEventListener("click", desplegable);
    let crearDesplegable = document.getElementById("desplegable");
    crearDesplegable.style.cssText = "display:block;";
    let botonLogin = document.createElement("button");
    botonLogin.style.cssText = "border: solid 2px blue;padding:10px;background-color: aqua;margin:5px;";
    botonLogin.addEventListener("click",Login);
    botonLogin.setAttribute("id","botonLogin");
    botonLogin.textContent = "Login";
    crearDesplegable.append(botonLogin);

    let botonRegister = document.createElement("button");
    botonRegister.style.cssText = "border: solid 2px red;padding:10px;background-color: tomato;margin:5px;";
    botonRegister.addEventListener("click",Register);
    botonRegister.setAttribute("id","botonRegister");
    botonRegister.textContent = "Register";
    crearDesplegable.append(botonRegister);
}

function Login(){
    document.getElementById("botonLogin").removeEventListener("click",Login);
    document.getElementById("botonRegister").addEventListener("click",Register);
    console.log("Login");
    
    let relleno = document.getElementById("relleno");
    relleno.innerHTML = ("");
    relleno.innerHTML = 
    ("<label for='email'>E-mail: </label><br/><input type='text' name='email' id='email'/><br/><label for='password'>Password: </label><br/><input type='text' name='password' id='password'/><br/><label for='remember'>Remember me: </label><input type='checkbox' name='remember' id='remember'/><br/><input type='button' value='Log' id='Log'/>");
    document.getElementById("desplegable").append(relleno);
}

function Register(){
    document.getElementById("botonRegister").removeEventListener("click",Register);
    document.getElementById("botonLogin").addEventListener("click",Login);
    console.log("Register");
    
    let relleno = document.getElementById("relleno");
    relleno.innerHTML = ("");
    relleno.innerHTML = 
    ("<label for='name'>Your Name: </label><br/><input type='text' name='name' id='name'/><br/><label for='email'>E-mail: </label><br/><input type='text' name='email' id='email'/><br/><label for='password'>Password: </label><br/><input type='text' name='password' id='password'/><br/><label for='remember'>Remember me: </label><input type='checkbox' name='remember' id='remember'/><br/><input type='button' value='Register' id='Register'/>");
    document.getElementById("desplegable").append(relleno);
}

