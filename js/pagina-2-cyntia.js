const btn = document.getElementById("btn-validar");
const input = document.getElementById("input-codigo");
const mensaje = document.getElementById("mensaje-validacion");

btn.addEventListener("click", () => {
    const codigo = input.value.trim();

    if (codigo === "3536") {
        mensaje.textContent = "✔ Código correcto. Acceso concedido.";
        mensaje.style.color = "#00ff88";

        setTimeout(() => {
            window.location.href = "pagina-3-ana-belen.html";
        }, 1500);

    } else {
        mensaje.textContent = "✖ Código incorrecto. Inténtalo de nuevo.";
        mensaje.style.color = "#ff006e";

        input.classList.add("error-shake");
        setTimeout(() => input.classList.remove("error-shake"), 300);
    }
});
