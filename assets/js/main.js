/*-----COMPORTAMIENTO TARJETAS-----*/ 
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


/*-----COMPORTAMIENTO INICIAR SESION-REGISTRAR CUENTA-----*/
var vista1=document.getElementsByClassName("contenedor-principal")[0]
var vista2=document.getElementsByClassName("contenedor-principal-2")[0]
var inicio=document.getElementsByClassName("inicio-sesion")[0]
var registro=document.getElementsByClassName("registro-cuenta")[0]
var loading=document.getElementsByClassName("contenedor-loading")[0]
var loadingHamster=document.getElementsByClassName("contenedor-loading-hamster")[0]
var consultar=document.getElementsByClassName("contenedor-consultar")[0]
var vistaRetirar=document.getElementsByClassName("contenedor-retirar")[0]
var vistaTransferir=document.getElementsByClassName("contenedor-transferir")[0]
var vistaConsignar=document.getElementsByClassName("contenedor-consignar")[0]
var vistaPrincipal=document.getElementById("pagina-principal")

var cambiar=document.getElementById("cambiar")
var cambiar2=document.getElementById("cambiar-2")

cambiar.addEventListener("click",()=>{
    loadingHamster.style.display="block"
    inicio.style.display="none"
    registro.style.display="none"

    setTimeout(function(){
        registro.style.display="flex"
        loadingHamster.style.display="none"
        inicio.style.display="none"
    },1000)
    
})

cambiar2.addEventListener("click",()=>{
    loadingHamster.style.display="block"
    inicio.style.display="none"
    registro.style.display="none"

    setTimeout(function(){
        inicio.style.display="flex"
        registro.style.display="none"
        loadingHamster.style.display="none"
    },1000)
})


/*-----VALIDAR USUARIO-----*/
const botonInicio=document.getElementById("boton-inicio")
var contadorErrores=3
botonInicio.addEventListener("click",()=>{
    const cuenta=document.getElementById("cuenta").value
    const user = document.getElementById("input-usuario").value;
    const password = document.getElementById("password").value;

    if (user === "juan pablo" && password === "12345"&& cuenta==="3225108713") {
        loading.style.display="block"
        inicio.style.display="none"
        registro.style.display="none"
        vistaPrincipal.style.display="none"

        setTimeout(function (){
            vistaPrincipal.style.display="block"
            loading.style.display="none"
            inicio.style.display="none"
            registro.style.display="none"
        },2000)

    }else{
        alert("usuario o contraseña incorrectos")
        contadorErrores--
        if(contadorErrores==0){
            alert("has excedido el maximo de intentos para inicio de sesion, por seguridad bloquearemos tu cuenta")
            document.querySelector("#cuenta").disabled=true
            document.querySelector("#input-usuario").disabled=true
            document.querySelector("#password").disabled=true
        }
    }
})


/*-----FUNCION PARA MOSTRAR CONSULTAR SALDO-----*/
function consultarSaldo(){
    loading.style.display="block"
    vistaPrincipal.style.display="none"

    setTimeout(function(){
        consultar.style.display="flex"
        vistaPrincipal.style.display="none"
        loading.style.display="none"
    },2000)
}


/*-----FUNCION PARA MOSTRAR RETIRAR-----*/
function mostrarRetirar(){
    loading.style.display="block"
    vistaPrincipal.style.display="none"

    setTimeout(function(){
        vistaRetirar.style.display="flex"
        vistaPrincipal.style.display="none"
        loading.style.display="none"
    },2000)
}


/*-----FUNCION PARA MOSTRAR TRANSFERIR*/
function mostrarTransferir(){
    loading.style.display="block"
    vistaPrincipal.style.display="none"

    setTimeout(function(){
        vistaTransferir.style.display="flex"
        vistaPrincipal.style.display="none"
        loading.style.display="none"
    },2000)
} 


/*-----FUNCION PARA MOSTRAR CONSIGNAR-----*/
function mostrarConsignar(){
    loading.style.display="block"
    vistaPrincipal.style.display="none"

    setTimeout(function(){
        vistaConsignar.style.display="flex"
        vistaPrincipal.style.display="none"
        loading.style.display="none"
    },2000)
}


/*-----FUNCION PARA VOLVER-----*/
function volver(){
    loading.style.display="block"
    vistaPrincipal.style.display="none"
    consultar.style.display="none"
    vistaRetirar.style.display="none"
    vistaTransferir.style.display="none"
    vistaConsignar.style.display="none"

    setTimeout(function(){
        vistaPrincipal.style.display="block"
        consultar.style.display="none"
        vistaRetirar.style.display="none"
        vistaTransferir.style.display="none"
        vistaConsignar.style.display="none"
        loading.style.display="none"
    },2000)

}


/*-----FUNCION DE ALERTA QUE SE MUESTRA AL INTENTAR CERRAR SESION----- */
function alerta() {
    var opcion = confirm("¿ Estas seguro que quieres Cerrar Sesión ?");
    if (opcion == true) {
      location.reload();
    }
  }




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