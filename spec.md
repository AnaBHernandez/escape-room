# spec.md — Operación Búnker F5 (The Pastel Bunker)
**Estado:** ACTUALIZADO v2.0 | **PO:** Ana Belén | **Fecha:** 2026-04-16

---

## 1. Alcance del Proyecto (Protocol Alpha)
Se evoluciona el MVP a una experiencia completa de 5 estados operativos con estética ciberpunk pastel.

- **Flujo:** Inicio (P1) → El Reto (P2) → Terminal (P3) → Éxito (P5) / Derrota (P4).
- **Arquitectura:** Multipage (5 archivos `.html`) con estilos centralizados en `global.css`.
- **Tecnologías:** HTML5, CSS3 (Flexbox) y Vanilla JS (sin frameworks).

---

## 2. Identidad Visual & UI
- **Concepto:** Industrial Pastel.
- **Paleta de Colores:**
    - Fondo: `#222222` (Gris Antracita).
    - Acción Principal: `#E95420` (Naranja Ubuntu).
    - Identidad: `#C792EA` (Lavanda Pastel).
    - Éxito/Sync: `#50FA7B` (Menta Neón).
    - Alerta/Rendición: `#FF5555` (Rojo).
- **Fuentes:** `Space Grotesk` para títulos y `Ubuntu Mono` para datos de sistema.

---

## 3. Arquitectura de Ficheros y Responsabilidades

| Archivo | Pantalla | Responsable | Misión |
| :--- | :--- | :--- | :--- |
| `index.html` | P1: Inicio | Cynthia | Nav, Footer y Briefing inicial. |
| `reto.html` | P2: El Reto | Paula | Gameplay, pistas y lógica de interacción. |
| `bunker.html` | P3: Terminal | Ana Belén | Teclado numérico y validación de acceso. |
| `derrota.html` | P4: Fallo | Equipo | Pantalla de colapso y `localStorage`. |
| `victoria.html` | P5: Éxito | Equipo | Sincronización final y estadísticas. |
| `global.css` | N/A | Jessica | Layout Flexbox, Sidebar y Responsive. |
| `script.js` | N/A | Paula/Ana | Lógica global, eventos y validaciones. |

---

## 4. Requisitos Técnicos Obligatorios (DoD)

### 🛠️ HTML & Estructura
- Navegación (`<nav>`) y Footer (`<footer>`) consistentes en P1, P2 y P3.
- Sidebar (`<aside>`) con datos del operador en P2 y P3.

### 🎨 CSS (Jessica)
- Uso estricto de **Flexbox**.
- Selectores obligatorios: etiqueta, clase, id, descendente y agrupado.
- Responsive design con breakpoints en `768px` y `480px`.

### ⚙️ JavaScript & DOM
- **Reto 1 (P2):** Manipulación del DOM para revelar pistas.
- **Reto 2 (P3):** Validación del `NUMERO_SECRETO` (Teclado interactivo).
- **LocalStorage:** Al rendirse, guardar motivo y tiempo de sesión.
- **Selectores:** `getElementById`, `querySelector` y `querySelectorAll`.

---

## 5. Protocolo de Git y Ramas
Las ramas se crean desde `main` y siguen la nomenclatura:
- `"Trabajo Cynthia"`
- `"Trabajo Jessica"`
- `"Trabajo Paula"`
- `"Trabajo Ana Belén"`

**Flujo de trabajo:** 1. `git fetch origin`
2. `git checkout "Trabajo [Nombre]"`
3. Desarrollo → Commit → PR a `main` → Review de Ana Belén.

---

## 6. TBDs (Pendientes de decisión)
- [ ] Código numérico final para el búnker (Paula).
- [ ] Importación de fuentes en `global.css` (Jessica).
- [ ] Redacción de los logs narrativos (Ana Belén).