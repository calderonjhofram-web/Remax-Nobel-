const $ = (id) => document.getElementById(id);
const getUser = (cedula) => JSON.parse(localStorage.getItem(`usuario_${cedula}`));
const mostrar = (texto) => ($("mensaje").textContent = texto);

// Menú según la sesión
const user = getUser(localStorage.getItem("sesion"));
if ($("menu") && user) {
    $("menu").innerHTML = `
        <li id="saludo"></li>
        <li><a href="#" id="salir">Cerrar sesión</a></li>`;
    $("saludo").textContent = `Hola, ${user.nombre}`;
    $("salir").onclick = () => {
        localStorage.removeItem("sesion");
        location.reload();
    };
}

// Registro
$("registro")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));

    if (getUser(datos.cedula)) return mostrar("Esa cédula ya está registrada.");

    localStorage.setItem(`usuario_${datos.cedula}`, JSON.stringify(datos));
    e.target.reset();
    mostrar("Cuenta creada. Ya puedes iniciar sesión.");
});

// Inicio de sesión
$("login")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const { cedula, correo } = Object.fromEntries(new FormData(e.target));
    const usuario = getUser(cedula);

    if (!usuario) return mostrar("Esa cédula no está registrada.");
    if (usuario.correo !== correo) return mostrar("El correo no coincide con esa cédula.");

    localStorage.setItem("sesion", cedula);
    location.href = "remax.html";
});