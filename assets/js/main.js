/*-----COMPORTAMIENTO TARJETAS-----*/
const cuenta = document.getElementById("cuenta")
const cuentaNueva = document.getElementById("cuenta-nueva")
const numeroCuenta = document.getElementById("numero-cuenta")
const numeroCuentaNueva = document.getElementById("numero-cuenta-nueva")
const inputUsuario = document.getElementById("input-usuario")
const inputUsuarioNuevo = document.getElementById("input-usuario-nuevo")
const nombreUsuario = document.getElementById("nombre-usuario")
const nombreUsuarioNuevo = document.getElementById("nombre-usuario-nuevo")
var nombreEnPantalla=document.getElementById("nombre-usuario-pantalla")

cuenta.addEventListener("input", () => {
    numeroCuenta.textContent = cuenta.value
})

inputUsuario.addEventListener("input", () => {
    nombreUsuario.textContent = inputUsuario.value
    nombreEnPantalla.textContent=inputUsuario.value
})

cuentaNueva.addEventListener("input", () => {
    numeroCuentaNueva.textContent = cuentaNueva.value
})

inputUsuarioNuevo.addEventListener("input", () => {
    nombreUsuarioNuevo.textContent = inputUsuarioNuevo.value
})


/*-----COMPORTAMIENTO INICIAR SESION-REGISTRAR CUENTA-----*/
var cambiar = document.getElementById("cambiar")
var cambiar2 = document.getElementById("cambiar-2")

cambiar.addEventListener("click", () => {
    loadingHamster.style.display = "block"
    inicio.style.display = "none"
    registro.style.display = "none"

    setTimeout(function () {
        registro.style.display = "flex"
        loadingHamster.style.display = "none"
        inicio.style.display = "none"
    }, 1000)

})

cambiar2.addEventListener("click", () => {
    loadingHamster.style.display = "block"
    inicio.style.display = "none"
    registro.style.display = "none"

    setTimeout(function () {
        inicio.style.display = "flex"
        registro.style.display = "none"
        loadingHamster.style.display = "none"
    }, 1000)
})


/*-----FUNCION PARA REGISTRAR UNA NUEVA CUENTA-----*/
let dataBaseCuentas = []
let nuevaCuentaRegistrada = {}

const registrarCuenta = () => {
    let numeroDeCuenta = document.getElementById("cuenta-nueva").value
    let nombresNuevoUsuario = document.getElementById("input-usuario-nuevo").value
    let contraseñaNuevoUsuario = document.getElementById("password-nuevo").value
    let confirmacionContraseñaNuevoUsuario = document.getElementById("confirmacion-password-nuevo").value
    let saldoInicialNuevoUsuario = document.getElementById("saldo-inicial-nuevo").value

    nuevaCuentaRegistrada = {
        numero: numeroDeCuenta,
        nombreUsuarioNuevo: nombresNuevoUsuario, 
        contraseñaUsuarioNuevo: contraseñaNuevoUsuario,
        confirmacion: confirmacionContraseñaNuevoUsuario,
        saldoUsuarioNuevo: saldoInicialNuevoUsuario
    }

    if (contraseñaNuevoUsuario === confirmacionContraseñaNuevoUsuario & parseInt(saldoInicialNuevoUsuario) >= 100000) {
        dataBaseCuentas.push(nuevaCuentaRegistrada)
        alert("cuenta registrada exitosamente")
        limpiarInput()
        console.log(dataBaseCuentas)
    } else {
        alert("fallaste en algo")
    }

}


/*-----VISTAS-----*/
var vista1 = document.getElementsByClassName("contenedor-principal")[0]
var vista2 = document.getElementsByClassName("contenedor-principal-2")[0]
var inicio = document.getElementsByClassName("inicio-sesion")[0]
var registro = document.getElementsByClassName("registro-cuenta")[0]
var loading = document.getElementsByClassName("contenedor-loading")[0]
var loadingHamster = document.getElementsByClassName("contenedor-loading-hamster")[0]
var consultar = document.getElementsByClassName("contenedor-consultar")[0]
var vistaRetirar = document.getElementsByClassName("contenedor-retirar")[0]
var vistaTransferir = document.getElementsByClassName("contenedor-transferir")[0]
var vistaConsignar = document.getElementsByClassName("contenedor-consignar")[0]
var vistaConsignacionExitosa = document.getElementsByClassName("consignacion-exitosa")[0]
var vistaTransferenciaExitosa=document.getElementsByClassName("transferencia-exitosa")[0]
var vistaRetiroExitoso=document.getElementsByClassName("retiro-exitoso")[0]
var vistaPrincipal = document.getElementById("pagina-principal")


/*-----VALIDAR USUARIO-----*/
const botonInicio = document.getElementById("boton-inicio")
var contadorErrores = 3
function validarInicioDeSesion() {
    const cuenta = document.getElementById("cuenta").value
    const user = document.getElementById("input-usuario").value;
    const password = document.getElementById("password").value;
    // dataBaseCuentas.indexOf(cuenta)!==-1

    if (user === "juan pablo" && password === "12345" && cuenta === "3225108713") {
        loading.style.display = "block"
        inicio.style.display = "none"
        registro.style.display = "none"
        vistaPrincipal.style.display = "none"

        setTimeout(function () {
            vistaPrincipal.style.display = "block"
            loading.style.display = "none"
            inicio.style.display = "none"
            registro.style.display = "none"
        }, 2000)

    } else {
        // alert("usuario o contraseña incorrectos")
        contadorErrores--
        if (contadorErrores == 0) {
            alert("has excedido el maximo de intentos para inicio de sesion, por seguridad bloquearemos tu cuenta")
            document.querySelector("#cuenta").disabled = true
            document.querySelector("#input-usuario").disabled = true
            document.querySelector("#password").disabled = true
        }
    }
}


/*-----FUNCION PARA MOSTRAR CONSULTAR SALDO-----*/
function consultarSaldo() {
    loading.style.display = "block"
    vistaPrincipal.style.display = "none"

    setTimeout(function () {
        consultar.style.display = "flex"
        vistaPrincipal.style.display = "none"
        loading.style.display = "none"
    }, 2000)
}


/*-----FUNCION PARA MOSTRAR RETIRAR-----*/
function mostrarRetirar() {
    loading.style.display = "block"
    vistaPrincipal.style.display = "none"

    setTimeout(function () {
        vistaRetirar.style.display = "flex"
        vistaPrincipal.style.display = "none"
        loading.style.display = "none"
    }, 2000)
}


/*-----FUNCION PARA MOSTRAR TRANSFERIR*/
function mostrarTransferir() {
    loading.style.display = "block"
    vistaPrincipal.style.display = "none"

    setTimeout(function () {
        vistaTransferir.style.display = "flex"
        vistaPrincipal.style.display = "none"
        loading.style.display = "none"
    }, 2000)
}


/*-----FUNCION PARA MOSTRAR CONSIGNAR-----*/
function mostrarConsignar() {
    loading.style.display = "block"
    vistaPrincipal.style.display = "none"

    setTimeout(function () {
        vistaConsignar.style.display = "flex"
        vistaPrincipal.style.display = "none"
        loading.style.display = "none"
    }, 2000)
}


/*------FUNCION PARA MOSTRAR CONSIGNACION EXITOSA-----*/ 
function consignacionExitosa() {
    loading.style.display = "block"
    vistaConsignar.style.display = "none"

    setTimeout(function () {
        vistaConsignacionExitosa.style.display = "flex"
        loading.style.display = "none"
        vistaConsignar.style.display = "none"
    }, 2000)
}

/*-----FUNCION PARA MOSTRAR RETIRO EXITOSO-----*/
function retiroExitoso(){
    loading.style.display = "block"
    vistaRetirar.style.display = "none"

    setTimeout(function(){
        vistaRetiroExitoso.style.display="flex"
        loading.style.display = "none"
        vistaRetirar.style.display = "none"
    },2000)
}


/*-----FUNCION PARA MOSTRAR TRANSFERENCIA EXITOSA-----*/
function transferenciaExitosa(){
    loading.style.display = "block"
    vistaTransferir.style.display="none"

    setTimeout(function(){
        vistaTransferenciaExitosa.style.display="flex"
        loading.style.display = "none"
        vistaTransferir.style.display="none"
    },2000)
}


/*-----FUNCION PARA VOLVER-----*/
function volver() {
    loading.style.display = "block"
    vistaPrincipal.style.display = "none"
    consultar.style.display = "none"
    vistaRetirar.style.display = "none"
    vistaTransferir.style.display = "none"
    vistaConsignar.style.display = "none"
    vistaConsignacionExitosa.style.display = "none"
    vistaRetiroExitoso.style.display="none"
    vistaTransferenciaExitosa.style.display="none"

    setTimeout(function () {
        vistaPrincipal.style.display = "block"
        consultar.style.display = "none"
        vistaRetirar.style.display = "none"
        vistaTransferir.style.display = "none"
        vistaConsignar.style.display = "none"
        loading.style.display = "none"
        vistaConsignacionExitosa.style.display = "none"
        vistaRetiroExitoso.style.display="none"
        vistaTransferenciaExitosa.style.display="none"
    }, 2000)

    limpiarInput()
}


/*-----FUNCION PARA LIMPIAR INPUTS-----*/
function limpiarInput() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
}


/*-----FUNCION DE ALERTA QUE SE MUESTRA AL INTENTAR CERRAR SESION----- */
function alerta() {
    var opcion = confirm("¿ Estas seguro que quieres Cerrar Sesión ?");
    if (opcion == true) {
        location.reload();
    }
}


/*-----FUNCIONALIDAD DE LA APLICACION-----*/
var saldo = 100000;
var saldoReal=document.getElementById("saldo")
saldoReal.textContent=saldo
var comprobante=14129 

/*-----FUNCION PARA CONSIGNAR DINERO-----*/
function consignarDinero() {
    let saldoConsultado = document.getElementById("saldo");
    let cuentaConsignar = document.getElementById("numero-cuenta-consignar").value;
    let valorConsignar = parseInt(document.getElementById("valor-consignar").value);
    let historial=document.getElementById("historial-movimientos")

    if (cuentaConsignar === "3225108713" && valorConsignar > 10000) {
        saldo += valorConsignar;
        comprobante++
        saldoConsultado.textContent = saldo;
        document.getElementById("comprobante-consignacion").textContent = comprobante
        document.getElementById("valor-consignado").textContent = parseInt(document.getElementById("valor-consignar").value)
        document.getElementById("numero-cuenta-consignada").textContent = document.getElementById("numero-cuenta-consignar").value
        document.getElementById("fecha-consignacion").textContent = new Date().toLocaleString()

        let fechaConsignacionHistorial=document.createElement("p")
        fechaConsignacionHistorial.textContent=new Date().toLocaleString()
        let tipoDeMovimiento=document.createElement("p")
        tipoDeMovimiento.textContent="Consignacion Propia"
        let valorMovimiento=document.createElement("p")
        valorMovimiento.textContent="$ +"+valorConsignar
        valorMovimiento.style.color="green"

        let movimiento=document.createElement("article")
        movimiento.append(fechaConsignacionHistorial,tipoDeMovimiento,valorMovimiento)
        historial.append(movimiento)

        // alert("Transferencia hecha con éxito");
        consignacionExitosa()
    } else {
        alert("La cuenta o el valor de consignación no son válidos.");
    }

    limpiarInput()
}


/*-----FUNCION PARA RETIRAR DINERO-----*/
function retirarDinero() {
    let saldoConsultado = document.getElementById("saldo")
    let valorRetirar=parseInt(document.getElementById("valor-a-retirar").value)
    let contraseñaRetirar=document.getElementById("contraseña-retirar").value
    let historial=document.getElementById("historial-movimientos")

    if(valorRetirar>10000 && valorRetirar<=saldo && contraseñaRetirar==="12345"){
        saldo-=valorRetirar
        comprobante++
        saldoConsultado.textContent=saldo
        document.getElementById("comprobante-retiro").textContent=comprobante
        document.getElementById("total-retirado").textContent=valorRetirar
        document.getElementById("fecha-retiro").textContent=new Date().toLocaleString()

        let fechaConsignacionHistorial=document.createElement("p")
        fechaConsignacionHistorial.textContent=new Date().toLocaleString()
        let tipoDeMovimiento=document.createElement("p")
        tipoDeMovimiento.textContent="Retiro En Cajero"
        let valorMovimiento=document.createElement("p")
        valorMovimiento.textContent="$ -"+valorRetirar
        valorMovimiento.style.color="red"

        let movimiento=document.createElement("article")
        movimiento.append(fechaConsignacionHistorial,tipoDeMovimiento,valorMovimiento)
        historial.append(movimiento)

        alert("retiro exitoso")
        retiroExitoso()
    }else{
        alert("valor o contraseña incorrectos")
    }

    limpiarInput()
}


/*-----FUNCION PARA TRANSFERIR DINERO-----*/
function transferirDinero(){
    let saldoConsultado = document.getElementById("saldo")
    let valorTransferir=parseInt(document.getElementById("total-transferir").value)
    let nombreDestinatario=document.getElementById("destinatario").value
    let correoDestinatario=document.getElementById("correo-destinatario").value
    let nCuentaDestinatario=document.getElementById("cuenta-destinatario").value
    let contraseñaTransferir=document.getElementById("contraseña-transferir").value
    let historial=document.getElementById("historial-movimientos")

    if(valorTransferir>0 && valorTransferir<=saldo && contraseñaTransferir==="1234"){
        saldo-=valorTransferir
        comprobante++
        saldoConsultado.textContent=saldo
        document.getElementById("comrpobante-transferencia").textContent=comprobante
        document.getElementById("nombre-destinatario").textContent=nombreDestinatario
        document.getElementById("cuenta-a-transferir").textContent=nCuentaDestinatario
        document.getElementById("valor-transferido").textContent=valorTransferir
        document.getElementById("fecha-transferencia").textContent=new Date().toLocaleString()

        let fechaConsignacionHistorial=document.createElement("p")
        fechaConsignacionHistorial.textContent=new Date().toLocaleString()
        let tipoDeMovimiento=document.createElement("p")
        tipoDeMovimiento.textContent="Transferencia a otra cuenta"
        let valorMovimiento=document.createElement("p")
        valorMovimiento.textContent="$ -"+valorTransferir
        valorMovimiento.style.color="red"

        let movimiento=document.createElement("article")
        movimiento.append(fechaConsignacionHistorial,tipoDeMovimiento,valorMovimiento)
        historial.append(movimiento)

        alert("transferencia exitosa")
        transferenciaExitosa()

    }else{
        alert("algo ha salido mal")
    }

    limpiarInput()
}


const validarUsuario = /^([A-Za-z0-9]){4,20}$/gm;
const validarClave = /^-?\d+\.?\d*$/m;
const ValidarCuenta = /^\d{5,15}$/;
const validarNumeros = /^-?\d+\.?\d*$/m;
const validarCorreo = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const validarNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const validarDinero = /^$[0-9]{1,3}([\\.][0-9]{3})/;