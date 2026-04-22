// =========================
// DATOS DEL JUEGO
// =========================
const NUMERO_SECRETO = 3536; 
let intentos = 5; // Control de intentos según vuestro diagrama

// =========================
// SELECCIÓN DE ELEMENTOS DOM
// =========================
const pantallaReto = document.getElementById("pantalla-reto"); 

// ESTO ES LO IMPORTANTE: Seleccionamos los IDs que Jessica usará en el HTML final
const pantallaExitoJessica = document.getElementById("pantalla-exito"); 
const pantallaFalloJessica = document.getElementById("pantalla-fallo");

const btnReto1 = document.getElementById("btn-reto1");
const numeroJugador = document.getElementById("numeroJugador");
const mensajeReto1 = document.getElementById("mensajeReto1");

// =========================
// FUNCIONES DE NAVEGACIÓN
// =========================
function mostrarPantalla(pantalla) {
  if(!pantalla) {
    console.error("La pantalla de destino no existe en el HTML global.");
    return;
  }
  // Escondemos TODO y mostramos solo la de Jessica
  document.querySelectorAll(".pantalla, section").forEach(p => p.classList.add("oculta"));
  pantalla.classList.remove("oculta");
}

// =========================
// LÓGICA DEL RETO
// =========================
function comprobarReto1() {
  const codigoEntrado = parseInt(numeroJugador.value);

  if (codigoEntrado === NUMERO_SECRETO) {
    // ✅ ÉXITO: Buscamos la sección de Jessica en el HTML global
    // Jessica debe llamar a su section id="pantalla-escape-confirmado"
    const pantallaJessicaExito = document.getElementById("pantalla-exito");
    
    if (pantallaJessicaExito) {
        mostrarPantalla(pantallaJessicaExito);
    } else {
        // Esto es lo que pasará ahora mismo en tu ordenador:
        alert("¡CÓDIGO CORRECTO! (En la rama 'dev' verás la pantalla de Jessica)");
        console.log("Error: No encuentro el ID 'pantalla-exito' porque aún no hemos unido los archivos.");
    }

  } else {
    // ❌ ERROR: Lógica de intentos
    intentos--;
    if (intentos > 0) {
      mensajeReto1.textContent = `❌ ERROR: Código no autorizado. Intentos: ${intentos}`;
      mensajeReto1.style.color = "#FF6B00";
    } else {
      // 💀 FALLO: Vamos a la pantalla de Sistema Comprometido de Jessica
      const pantallaJessicaFallo = document.getElementById("pantalla-fallo");
      mostrarPantalla(pantallaJessicaFallo);
    }
  }
}

// EVENTO DEL BOTÓN
btnReto1.addEventListener("click", comprobarReto1);

