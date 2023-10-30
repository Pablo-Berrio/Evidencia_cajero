/*-----VALIDACIONES-----*/
const validarTodo = (e) => {
    const regexNumeroCuentaRegistrar = /^\d{11}$/  //exactamente 11 numeros
    const regexUsuarioRegistrar = /^(?=\D*\d)(?=[^ ]{4,12}$)[A-Za-z0-9]+$/  //minimo 4 letras y minimo un numero sin espacios
    const regexClave = /^\d{4}$/  //exactamente 4 numeros
    const regexSaldo = /^\d{6,}$/ //MINIMO 6 NUMEROS
    const regexValorConsignar = /^[1-9]\d{4,}$/  //solo numeros mayores a 10000
    const regexCorreo = /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    const errorNombreUsuario = document.getElementById("error-usuario-nuevo")
    const errorNumeroCuenta = document.getElementById("error-cuenta-nueva")
    const errorClave = document.getElementById("error-clave-nueva")
    const errorVerificacionClave = document.getElementById("confirmacion-clave")
    const errorSaldo = document.getElementById("error-saldo-inicial")
    const errorCuentaConsignar = document.getElementById("error-cuenta-consignar")
    const errorValorConsignar = document.getElementById("error-valor-consignar")
    const errorValorRetirar = document.getElementById("error-valor-retirar")
    const errorContraseñaRetirar = document.getElementById("error-contraseña-retirar")
    const errorNombreDestinatario = document.getElementById("error-nombre-destinatario")
    const errorCorreo = document.getElementById("error-correo")
    const errorCuentaDestinatario = document.getElementById("error-cuenta-destinatario")
    const errorValorTransferir = document.getElementById("error-valor-transferir")
    const errorContraseñaTransferir = document.getElementById("error-contraseña-transferir")


    switch (e.target.name) {
        case "numeroCntaRgstr":
            if (regexNumeroCuentaRegistrar.test(e.target.value)) {
                errorNumeroCuenta.textContent = ""
                errorNumeroCuenta.classList.remove("error")
                document.getElementById("button-cuenta-nueva").disabled = false
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#068FFF"
            } else {
                errorNumeroCuenta.textContent = "el numero de cuenta debe ser exactamente de 11 caracteres"
                errorNumeroCuenta.classList.add("errorc")
                document.getElementById("button-cuenta-nueva").disabled = true
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#EEEEEE"
            }
            break
        case "nombresRegistro":
            if (regexUsuarioRegistrar.test(e.target.value)) {
                errorNombreUsuario.textContent = ""
                errorNombreUsuario.classList.remove("error")
                document.getElementById("button-cuenta-nueva").disabled = false
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#068FFF"
            } else {
                errorNombreUsuario.textContent = "minimo 4 letras y un numero, no puede tener espacios ni mas de 12 caracteres"
                errorNombreUsuario.classList.add("error")
                document.getElementById("button-cuenta-nueva").disabled = true
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#EEEEEE"
            }
            break
        case "contraseña":
            if (regexClave.test(e.target.value)) {
                errorClave.textContent = ""
                errorClave.classList.remove("error")
                document.getElementById("button-cuenta-nueva").disabled = false
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#068FFF"
            } else {
                errorClave.textContent = "la clave debe ser exactamente de 4 numeros"
                errorClave.classList.add("error")
                document.getElementById("button-cuenta-nueva").disabled = true
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#EEEEEE"
            }
            break
        case "verificacion":
            if (document.getElementById("password-nuevo").value === document.getElementById("confirmacion-password-nuevo").value) {
                console.log("tamos bien")
                errorVerificacionClave.textContent = ""
                errorVerificacionClave.classList.remove = ("error")
                document.getElementById("button-cuenta-nueva").disabled = false
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#068FFF"
            } else {
                errorVerificacionClave.textContent = "las contraseñas deben coincidir"
                errorVerificacionClave.classList.add = ("error")
                document.getElementById("button-cuenta-nueva").disabled = true
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#EEEEEE"
            }
            break
        case "saldo-inicial":
            if (regexSaldo.test(e.target.value)) {
                errorSaldo.textContent = ""
                errorSaldo.classList.remove = ("error")
                document.getElementById("button-cuenta-nueva").disabled = false
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#068FFF"
            } else {
                errorSaldo.textContent = "el saldo minimo para abrir una cuenta en WELT BANC es de 100 mil dolares"
                errorSaldo.classList.add("error")
                document.getElementById("button-cuenta-nueva").disabled = true
                document.getElementById("button-cuenta-nueva").style.backgroundColor = "#EEEEEE"
            }
            break
        case "cuenta-consignar":
            if (regexNumeroCuentaRegistrar.test(e.target.value)) {
                errorCuentaConsignar.textContent = ""
                errorCuentaConsignar.classList.remove("error")
                document.getElementById("boton-consignar").disabled = false
            } else {
                errorCuentaConsignar.textContent = "la cuenta debe tener exactamente 11 numeros"
                errorCuentaConsignar.classList.add("error")
                document.getElementById("boton-consignar").disabled = true
            }
            break
        case "valor-consignar":
            if (regexValorConsignar.test(e.target.value)) {
                errorValorConsignar.textContent = ""
                errorValorConsignar.classList.remove("error")
                document.getElementById("boton-consignar").disabled = false
            } else {
                errorValorConsignar.textContent = "el valor minimo de consignacion debe ser de 10000"
                errorValorConsignar.classList.add("error")
                document.getElementById("boton-consignar").disabled = true
            }
            break
        case "valor-retirar":
            if (regexValorConsignar.test(e.target.value)) {
                errorValorRetirar.textContent = ""
                errorValorRetirar.classList.remove("error")
                document.getElementById("boton-retirar").disabled = false
            } else {
                errorValorRetirar.textContent = "el valor minimo para realizar un retiro es de 10000"
                errorValorRetirar.classList.add("error")
                document.getElementById("boton-retirar").disabled = true
            }
            break
        case "contraseña-retirar":
            if (regexClave.test(e.target.value)) {
                errorContraseñaRetirar.textContent = ""
                errorContraseñaRetirar.classList.remove("error")
                document.getElementById("boton-retirar").disabled = false
            } else {
                errorContraseñaRetirar.textContent = "tu contraseña no coincide"
                errorContraseñaRetirar.classList.add("error")
                document.getElementById("boton-retirar").disabled = true
            }
            break
        case "nombre-destinatario":
            if (regexUsuarioRegistrar.test(e.target.value)) {
                errorNombreDestinatario.textContent = ""
                errorNombreDestinatario.classList.remove("error")
                document.getElementById("boton-transferir").disabled = false
            } else {
                errorNombreDestinatario.textContent = "el nombre de usuario debe tener una cuenta activa en WELT BANC "
                errorNombreDestinatario.classList.add("error")
                document.getElementById("boton-transferir").disabled = true
            }
            break
        case "correo":
            if (regexCorreo.test(e.target.value)) {
                errorCorreo.textContent = ""
                errorCorreo.classList.remove("error")
                document.getElementById("boton-transferir").disabled = false
            } else {
                errorCorreo.textContent = "debes ingresar un correo valida como ejemplo@dominio.com"
                errorCorreo.classList.add("error")
                document.getElementById("boton-transferir").disabled = true
            }
            break
        case "cuenta-destino":
            if (regexNumeroCuentaRegistrar.test(e.target.value)) {
                errorCuentaDestinatario.textContent = ""
                errorCuentaDestinatario.classList.remove("error")
                document.getElementById("boton-transferir").disabled = false
            } else {
                errorCuentaDestinatario.textContent = "la cuenta a la que vas a transferir dinero debe estar activa en WELT BANC"
                errorCuentaDestinatario.classList.add("error")
                document.getElementById("boton-transferir").disabled = true
            }
            break
        case "monto-transferir":
            const valor = e.target.valueAsNumber
            if (valor >= 10000) {
                errorValorTransferir.textContent = ""
                errorValorTransferir.classList.remove("error")
                document.getElementById("boton-transferir").disabled = false
            } else {
                errorValorTransferir.textContent = "el valor minimo para transferir son 10000"
                errorValorTransferir.classList.add("error")
                document.getElementById("boton-transferir").disabled = true
            }
            break
        case "clave-transferir":
            if (regexClave.test(e.target.value)) {
                errorContraseñaTransferir.textContent = ""
                errorContraseñaTransferir.classList.remove("error")
                document.getElementById("boton-transferir").disabled = false
            } else {
                errorContraseñaTransferir.textContent = "contraseña incorrecta"
                errorContraseñaTransferir.classList.add("error")
                document.getElementById("boton-transferir").disabled = true
            }
            break
    }
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("keyup", validarTodo);
    input.addEventListener("blur", validarTodo);
});


/*-----COMPORTAMIENTO TARJETAS-----*/
const cuenta = document.getElementById("cuenta")
const cuentaNueva = document.getElementById("cuenta-nueva")
const numeroCuenta = document.getElementById("numero-cuenta")
const numeroCuentaNueva = document.getElementById("numero-cuenta-nueva")
const inputUsuario = document.getElementById("input-usuario")
const inputUsuarioNuevo = document.getElementById("input-usuario-nuevo")
const nombreUsuario = document.getElementById("nombre-usuario")
const nombreUsuarioNuevo = document.getElementById("nombre-usuario-nuevo")
var nombreEnPantalla = document.getElementById("nombre-usuario-pantalla")

cuenta.addEventListener("input", () => {
    numeroCuenta.textContent = cuenta.value
})

inputUsuario.addEventListener("input", () => {
    nombreUsuario.textContent = inputUsuario.value
    nombreEnPantalla.textContent = inputUsuario.value
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
var dataBaseCuentas = JSON.parse(localStorage.getItem("cliente")) || []
let nuevaCuentaRegistrada = {}
var estaLogeado = false
var usuarioActual = {}

const registrarCuenta = () => {
    let numeroDeCuenta = document.getElementById("cuenta-nueva").value
    let nombresNuevoUsuario = document.getElementById("input-usuario-nuevo").value
    let contraseñaNuevoUsuario = document.getElementById("password-nuevo").value
    let confirmacionContraseñaNuevoUsuario = document.getElementById("confirmacion-password-nuevo").value
    let saldoInicialNuevoUsuario = parseInt(document.getElementById("saldo-inicial-nuevo").value)


    if (contraseñaNuevoUsuario === confirmacionContraseñaNuevoUsuario &&
        parseInt(saldoInicialNuevoUsuario) >= 100000 &&
        numeroDeCuenta !== "" &&
        nombresNuevoUsuario !== "" &&
        contraseñaNuevoUsuario !== "" &&
        confirmacionContraseñaNuevoUsuario !== "" &&
        saldoInicialNuevoUsuario !== ""
    ) {

        nuevaCuentaRegistrada = {
            numeroCuenta: numeroDeCuenta,
            nombreUsuario: nombresNuevoUsuario,
            contraseña: contraseñaNuevoUsuario,
            saldo: saldoInicialNuevoUsuario,
        }

        dataBaseCuentas.push(nuevaCuentaRegistrada)
        localStorage.setItem('cliente', JSON.stringify(dataBaseCuentas))
        // alert("cuenta registrada exitosamente")
        swal.fire({
            title: "Cuenta registrada exitosamente, Bienvenido a WELT BANC",
            icon: 'success',
            confirmButtonColor: '#0A0101',
            timer: 5000
        })
        limpiarInput()
        console.log(dataBaseCuentas)
    } else {
        alert("por favor completa todos los campos correctamente")
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
var vistaTransferenciaExitosa = document.getElementsByClassName("transferencia-exitosa")[0]
var vistaRetiroExitoso = document.getElementsByClassName("retiro-exitoso")[0]
var vistaPrincipal = document.getElementById("pagina-principal")


/*-----VALIDAR USUARIO-----*/
const botonInicio = document.getElementById("boton-inicio")
var contadorErrores = 3
function validarInicioDeSesion() {
    const cuenta = document.getElementById("cuenta").value
    const user = document.getElementById("input-usuario").value;
    const password = document.getElementById("password").value;
    const usuarioEncontrado = dataBaseCuentas.find((dataBase) => {
        return (
            dataBase.numeroCuenta === cuenta &&
            dataBase.nombreUsuario === user &&
            dataBase.contraseña === password
        )
    })

    if (usuarioEncontrado) {
        loading.style.display = "block"
        inicio.style.display = "none"
        registro.style.display = "none"
        vistaPrincipal.style.display = "none"

        setTimeout(function () {
            vistaPrincipal.style.display = "block"
            loading.style.display = "none"
            inicio.style.display = "none"
            registro.style.display = "none"
            usuarioActual = usuarioEncontrado
            document.getElementById("saldoActualizado").textContent = usuarioActual.saldo
            console.log(usuarioActual)
            estaLogeado = true
        }, 2000)

    } else {
        swal.fire({
            title: "usuario o contraseña incorrectos. por favor valida todos los campos y verifica que sean tus datos",
            icon: 'warning',
            confirmButtonColor: '#0A0101',
            timer: 5000
        })
        contadorErrores--
        if (contadorErrores == 0) {
            swal.fire({
                title: "has excedido el maximo de intentos para inicio de sesion, por seguridad bloquearemos tu cuenta durante las proximas 5 horas, recuerda que en WELT BANC nos preocupamos por tu seguridad",
                icon: 'warning',
                confirmButtonColor: '#0A0101',
                timer: 8000
            })
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
function retiroExitoso() {
    loading.style.display = "block"
    vistaRetirar.style.display = "none"

    setTimeout(function () {
        vistaRetiroExitoso.style.display = "flex"
        loading.style.display = "none"
        vistaRetirar.style.display = "none"
    }, 2000)
}


/*-----FUNCION PARA MOSTRAR TRANSFERENCIA EXITOSA-----*/
function transferenciaExitosa() {
    loading.style.display = "block"
    vistaTransferir.style.display = "none"

    setTimeout(function () {
        vistaTransferenciaExitosa.style.display = "flex"
        loading.style.display = "none"
        vistaTransferir.style.display = "none"
    }, 2000)
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
    vistaRetiroExitoso.style.display = "none"
    vistaTransferenciaExitosa.style.display = "none"

    setTimeout(function () {
        vistaPrincipal.style.display = "block"
        consultar.style.display = "none"
        vistaRetirar.style.display = "none"
        vistaTransferir.style.display = "none"
        vistaConsignar.style.display = "none"
        loading.style.display = "none"
        vistaConsignacionExitosa.style.display = "none"
        vistaRetiroExitoso.style.display = "none"
        vistaTransferenciaExitosa.style.display = "none"
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
    Swal.fire({
        title: '¿ Estas seguro que quieres Cerrar Sesión ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
        if (result.isConfirmed) {
           
            loading.style.display = "block"
            vistaPrincipal.style.display = "none"
            consultar.style.display = "none"
            vistaRetirar.style.display = "none"
            vistaTransferir.style.display = "none"
            vistaConsignar.style.display = "none"
            vistaConsignacionExitosa.style.display = "none"
            vistaRetiroExitoso.style.display = "none"
            vistaTransferenciaExitosa.style.display = "none"
            usuarioActual = {}
            estaLogeado = false

            setTimeout(function () {
                inicio.style.display = "flex"
                vistaPrincipal.style.display = "none"
                consultar.style.display = "none"
                vistaRetirar.style.display = "none"
                vistaTransferir.style.display = "none"
                vistaConsignar.style.display = "none"
                loading.style.display = "none"
                vistaConsignacionExitosa.style.display = "none"
                vistaRetiroExitoso.style.display = "none"
                vistaTransferenciaExitosa.style.display = "none"
            }, 2000)
            Swal.fire(
                'Sesion cerrada!!',
                'Vuelve pronto.',
                'success'
            )
            limpiarInput()
        }
    })
}


/*-----FUNCIONALIDAD DE LA APLICACION-----*/
var comprobante = 14129


/*-----FUNCION PARA CONSIGNAR DINERO-----*/
function consignarDinero() {
    let valorConsignar = Number(document.getElementById("valor-consignar").value)
    let historial = document.getElementById("historial-movimientos")

    if (valorConsignar >= 10000) {
        comprobante++
        usuarioActual.saldo = (parseInt(usuarioActual.saldo)) + parseInt(valorConsignar)
        console.log("consignacion " + usuarioActual.saldo)
        document.getElementById("saldoActualizado").textContent = usuarioActual.saldo
        document.getElementById("comprobante-consignacion").textContent = comprobante
        document.getElementById("valor-consignado").textContent = parseInt(document.getElementById("valor-consignar").value)
        document.getElementById("numero-cuenta-consignada").textContent = "Cuenta Propia"
        document.getElementById("fecha-consignacion").textContent = new Date().toLocaleString()
        localStorage.setItem('cliente', JSON.stringify(dataBaseCuentas))

        let fechaConsignacionHistorial = document.createElement("p")
        fechaConsignacionHistorial.textContent = new Date().toLocaleString()
        let tipoDeMovimiento = document.createElement("p")
        tipoDeMovimiento.textContent = "Consignacion Propia"
        let valorMovimiento = document.createElement("p")
        valorMovimiento.textContent = "$ +" + valorConsignar
        valorMovimiento.style.color = "green"

        let movimiento = document.createElement("article")
        movimiento.append(fechaConsignacionHistorial, tipoDeMovimiento, valorMovimiento)
        historial.append(movimiento)

        consignacionExitosa()
    } else {
        swal.fire({
            title: "La cuenta o el valor de consignación no son válidos.",
            icon: 'warning',
            confirmButtonColor: '#0A0101',
            timer: 5000
        })
    }

    limpiarInput()
}


/*-----FUNCION PARA RETIRAR DINERO-----*/
function retirarDinero() {
    let historial = document.getElementById("historial-movimientos");
    let valorRetirar = parseInt(document.getElementById("valor-a-retirar").value);
    let contraseñaRetirar = document.getElementById("contraseña-retirar").value;

    if (valorRetirar >= 10000 && valorRetirar <= usuarioActual.saldo && contraseñaRetirar === usuarioActual.contraseña) {
        usuarioActual.saldo -= valorRetirar;
        comprobante++;
        document.getElementById("saldoActualizado").textContent = usuarioActual.saldo;
        document.getElementById("comprobante-retiro").textContent = comprobante;
        document.getElementById("total-retirado").textContent = valorRetirar;
        document.getElementById("fecha-retiro").textContent = new Date().toLocaleString();
        localStorage.setItem('cliente', JSON.stringify(dataBaseCuentas))

        let fechaConsignacionHistorial = document.createElement("p");
        fechaConsignacionHistorial.textContent = new Date().toLocaleString();
        let tipoDeMovimiento = document.createElement("p");
        tipoDeMovimiento.textContent = "Retiro En Cajero";
        let valorMovimiento = document.createElement("p");
        valorMovimiento.textContent = "$ -" + valorRetirar;
        valorMovimiento.style.color = "red";

        let movimiento = document.createElement("article");
        movimiento.append(fechaConsignacionHistorial, tipoDeMovimiento, valorMovimiento);
        historial.append(movimiento);
        retiroExitoso();
    } else {
        swal.fire({
            title: "Valor o contraseña incorrectos.",
            icon: 'warning',
            confirmButtonColor: '#0A0101',
            timer: 5000
        })
    }

    limpiarInput();

}


/*-----FUNCION PARA TRANSFERIR DINERO-----*/
function transferirDinero() {
    let historial = document.getElementById("historial-movimientos")
    let valorTransferir = parseInt(document.getElementById("total-transferir").value)
    let nombreDestinatario = document.getElementById("destinatario").value
    let nCuentaDestinatario = document.getElementById("cuenta-destinatario").value
    let contraseñaTransferir = document.getElementById("contraseña-transferir").value
    let cuentaDestino = dataBaseCuentas.find((dataBase) => dataBase.numeroCuenta === nCuentaDestinatario)

    if (contraseñaTransferir === usuarioActual.contraseña && valorTransferir >= 10000 && valorTransferir <= usuarioActual.saldo) {
        comprobante++
        usuarioActual.saldo -= valorTransferir
        cuentaDestino.saldo = Number(cuentaDestino.saldo) + Number(valorTransferir)
        document.getElementById("saldoActualizado").textContent = usuarioActual.saldo
        document.getElementById("nombre-destinatario").textContent = nombreDestinatario
        document.getElementById("cuenta-a-transferir").textContent = nCuentaDestinatario
        document.getElementById("valor-transferido").textContent = valorTransferir
        document.getElementById("fecha-transferencia").textContent = new Date().toLocaleString()
        localStorage.setItem('cliente', JSON.stringify(dataBaseCuentas))

        let fechaConsignacionHistorial = document.createElement("p")
        fechaConsignacionHistorial.textContent = new Date().toLocaleString()
        let tipoDeMovimiento = document.createElement("p")
        tipoDeMovimiento.textContent = "Transferencia a otra cuenta"
        let valorMovimiento = document.createElement("p")
        valorMovimiento.textContent = "$ -" + valorTransferir
        valorMovimiento.style.color = "red"

        let movimiento = document.createElement("article")
        movimiento.append(fechaConsignacionHistorial, tipoDeMovimiento, valorMovimiento)
        historial.append(movimiento)
        transferenciaExitosa()

    } else {
        swal.fire({
            title: "asegurate de que la cuenta a la que deseas transferir este inscrita en WELT BANC, ademas verifica que tu contraseña sea correcta y el monto valido.",
            icon: 'warning',
            confirmButtonColor: '#0A0101',
            timer: 7000
        })
    }

    limpiarInput()
}
