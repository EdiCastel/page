const darkModeButton = document.getElementById("darkModeButton");
const modeIcon = document.getElementById("mode-icon");
const modeText = document.getElementById("mode-text");

// Leer el estado guardado del modo oscuro en localStorage al cargar la página
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    modeIcon.classList.replace("fa-moon", "fa-sun");
    modeText.textContent = "Modo Claro";
} else {
    document.body.classList.remove("dark-mode");
    modeIcon.classList.replace("fa-sun", "fa-moon");
    modeText.textContent = "Modo Oscuro";
}

// Escuchar el evento de clic en el botón de modo oscuro
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); // Cambia el tema de la página

    // Cambiar el icono y el texto
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.classList.replace("fa-moon", "fa-sun"); // Cambia de luna a sol
        modeText.textContent = "Modo Claro"; // Cambia el texto
        localStorage.setItem("darkMode", "enabled"); // Guardar estado en localStorage
    } else {
        modeIcon.classList.replace("fa-sun", "fa-moon"); // Cambia de sol a luna
        modeText.textContent = "Modo Oscuro"; // Cambia el texto
        localStorage.setItem("darkMode", "disabled"); // Guardar estado en localStorage
    }
});



