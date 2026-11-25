// CREDENCIALES DE ACCESO (Para presentar en tu entrega)
const USUARIO_VALIDO = "admin";
const CORREO_VALIDO = "admin@autopro.com";
const PASSWORD_VALIDO = "mecanica123";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica del Login
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const usuarioInput = document.getElementById("usuario").value.trim();
            const passwordInput = document.getElementById("password").value.trim();
            const mensajeError = document.getElementById("mensajeError");

            // Validar campos vacíos
            if (usuarioInput === "" || passwordInput === "") {
                mensajeError.textContent = "Por favor, completa todos los campos.";
                return;
            }

            // Validar credenciales
            if ((usuarioInput === USUARIO_VALIDO || usuarioInput === CORREO_VALIDO) && passwordInput === PASSWORD_VALIDO) {
                mensajeError.textContent = "";
                window.location.href = "pages/inicio.html";
            } else {
                mensajeError.textContent = "Usuario o contraseña incorrectos.";
            }
        });
    }

    // 2. Lógica para Cerrar Sesión
    const btnCerrarSesion = document.getElementById("btnCerrarSesion");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", () => {
            window.location.href = "../index.html";
        });
    }

    // 3. Lógica para registrar vehículos en clientes.html
    const formVehiculo = document.getElementById("formVehiculo");
    if (formVehiculo) {
        formVehiculo.addEventListener("submit", (e) => {
            e.preventDefault();
            const cliente = document.getElementById("cliente").value;
            const placa = document.getElementById("placa").value;
            const falla = document.getElementById("falla").value;
            const tablaCuerpo = document.getElementById("tablaCuerpo");

            const nuevaFila = document.createElement("tr");
            nuevaFila.innerHTML = `
                <td>${cliente}</td>
                <td>${placa}</td>
                <td>${falla}</td>
                <td>Recibido</td>
            `;

            tablaCuerpo.appendChild(nuevaFila);
            formVehiculo.reset();
            alert("Vehículo registrado correctamente.");
        });
    }
});
