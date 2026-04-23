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
// LÓGICA DEL RETO
// =========================
function comprobarReto1() {
  // 1. Asegúrate de que el ID coincida con el de tu HTML (probablemente sea "numeroJugador")
  const inputPantalla = document.getElementById("numeroJugador"); 
  
  if (!inputPantalla) {
      console.error("Error: No se encuentra la pantalla del código");
      return;
  }

  const codigoEntrado = parseInt(inputPantalla.value);

  if (codigoEntrado === NUMERO_SECRETO) {
    // ✅ ÉXITO: Vamos a la página 4
    window.location.href = 'pagina-4-jessica.html'; 
  } else {
    // ❌ ERROR: Bajamos intentos
    intentos--;
    
    if (intentos > 0) {
      mensajeReto1.textContent = `❌ Código erróneo. Intentos: ${intentos}/5`;
      mensajeReto1.style.color = "#E95420";
      inputPantalla.value = ""; // Limpiamos la pantalla para el siguiente intento
    } else {
      // 💀 FALLO TOTAL: Ahora sí, saltamos a la página 5
      console.log("Intentos agotados. Redirigiendo...");
      window.location.href = 'pagina-5-jessica.html';
    }
  }
}
// EVENTO DEL BOTÓN
btnReto1.addEventListener("click", comprobarReto1);

