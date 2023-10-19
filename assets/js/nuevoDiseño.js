const cuenta=document.getElementById("cuenta")
const cuentaNueva=document.getElementById("cuenta-nueva")
const numeroCuenta=document.getElementById("numero-cuenta")
const numeroCuentaNueva=document.getElementById("numero-cuenta-nueva")
const inputUsuario=document.getElementById("input-usuario")
const inputUsuarioNuevo=document.getElementById("input-usuario-nuevo")
const nombreUsuario=document.getElementById("nombre-usuario")
const nombreUsuarioNuevo=document.getElementById("nombre-usuario-nuevo")

cuenta.addEventListener("input",()=>{
    numeroCuenta.textContent=cuenta.value
})

inputUsuario.addEventListener("input",()=>{
    nombreUsuario.textContent=inputUsuario.value
})

cuentaNueva.addEventListener("input",()=>{
    numeroCuentaNueva.textContent=cuentaNueva.value
})

inputUsuarioNuevo.addEventListener("input",()=>{
    nombreUsuarioNuevo.textContent=inputUsuarioNuevo.value
})


var vista1=document.getElementsByClassName("contenedor-principal")[0]
var vista2=document.getElementsByClassName("contenedor-principal-2")[0]
var inicio=document.getElementsByClassName("inicio-sesion")[0]
var registro=document.getElementsByClassName("registro-cuenta")[0]

var cambiar=document.getElementById("cambiar")
var cambiar2=document.getElementById("cambiar-2")

cambiar.addEventListener("click",()=>{
    inicio.style.display="none"
    registro.style.display="flex"
})

cambiar2.addEventListener("click",()=>{
    registro.style.display="none"
    inicio.style.display="flex"
})

const botonInicio=document.getElementById("boton-inicio")
const vistaPrincipal=document.getElementById("pagina-principal")

botonInicio.addEventListener("click",()=>{
    const user = document.getElementById("input-usuario").value;
    const password = document.getElementById("password").value;

    if (user === "juan pablo" && password === "12345") {
        inicio.style.display="none"
        registro.style.display="none"
        vistaPrincipal.style.display="block"
    }else{
        alert("usuario o contraseña incorrectos")
    }
})

const botonCerrarSesion=document.getElementById("cerrar-sesion")
botonCerrarSesion.addEventListener("click",()=>{
    inicio.style.display="flex"
    vistaPrincipal.style.display="none"
})


// const abrirModal = document.querySelector(".iniciar-sesion");
// const cerrarModal = document.getElementById("cerrar-modal")
// const modal = document.querySelector(".modal");

// abrirModal.addEventListener("click", () => {
//     modal.classList.add("modal--show");
// });

// cerrarModal.addEventListener("click", () => {
//     modal.classList.remove("modal--show");
// });

// const abrirModal2=document.querySelector(".registrar-cuenta")
// const cerrarModal2=document.getElementById("cerrar-modal2")
// const modal2=document.querySelector(".modal2")

// abrirModal2.addEventListener("click",()=>{
//     modal2.classList.add("modal--show2")
// })

// cerrarModal2.addEventListener("click",()=>{
//     modal2.classList.remove("modal--show2")
// })