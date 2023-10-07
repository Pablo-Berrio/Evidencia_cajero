const abrirModal = document.querySelector(".iniciar-sesion");
const cerrarModal = document.getElementById("cerrar-modal")
const modal = document.querySelector(".modal");

abrirModal.addEventListener("click", () => {
    modal.classList.add("modal--show");
});

cerrarModal.addEventListener("click", () => {
    modal.classList.remove("modal--show");
});

const abrirModal2=document.querySelector(".registrar-cuenta")
const cerrarModal2=document.getElementById("cerrar-modal2")
const modal2=document.querySelector(".modal2")

abrirModal2.addEventListener("click",()=>{
    modal2.classList.add("modal--show2")
})

cerrarModal2.addEventListener("click",()=>{
    modal2.classList.remove("modal--show2")
})





