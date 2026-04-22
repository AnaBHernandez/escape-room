// =========================
// DATOS DEL JUEGO
// =========================
// TODO: Que Jessica/Cintia elijan el número secreto aquí
const NUMERO_SECRETO = 1234; 


// =========================
// SELECCIÓN DE ELEMENTOS DOM
// =========================
const pantallaInicio = document.getElementById("pantalla-inicio");
const reto1 = document.getElementById("reto1");
const pantallaFinal = document.getElementById("pantalla-final");

const btnEmpezar = document.getElementById("btn-empezar");
const btnReto1 = document.getElementById("btn-reto1");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroJugador = document.getElementById("numeroJugador");
const mensajeReto1 = document.getElementById("mensajeReto1");

// =========================
// FUNCIONES DE NAVEGACIÓN
// =========================

function mostrarPantalla(pantalla) {
  // Oculta todas las pantallas
  document.querySelectorAll(".pantalla").forEach(p => p.classList.add("oculta"));
  // Muestra la pantalla deseada
  pantalla.classList.remove("oculta");
}

// =========================
// LÓGICA DEL RETO (MVP)
// =========================

function comprobarReto1() {
  // TODO: Que el equipo personalice el código de validación si quiere
  if (parseInt(numeroJugador.value) === NUMERO_SECRETO) {
    // CAMBIO GESTORA: Saltamos directamente al final por acuerdo MVP
    mostrarPantalla(pantallaFinal);
  } else {
    mensajeReto1.textContent = "❌ Código incorrecto. ¡Reintenta!";
    mensajeReto1.style.color = "red";
  }
}

function reiniciarJuego() {
  numeroJugador.value = "";
  mensajeReto1.textContent = "";
  mostrarPantalla(pantallaInicio);
}

// =========================
// EVENTOS
// =========================

btnEmpezar.addEventListener("click", function () {
  mostrarPantalla(reto1);
});

btnReto1.addEventListener("click", comprobarReto1);
btnReiniciar.addEventListener("click", reiniciarJuego);