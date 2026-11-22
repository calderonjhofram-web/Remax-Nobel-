var ADMIN_CEDULA = "12345678";
var ADMIN_CORREO = "admin@remaxnobel.com";

function buscarUsuario(cedula) {
    var texto = localStorage.getItem("usuario_" + cedula);
    if (texto == null) {
        return null;
    }
    return JSON.parse(texto);
}

function mostrarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto;
}

if (buscarUsuario(ADMIN_CEDULA) == null) {
    var cuentaAdmin = {
        cedula: ADMIN_CEDULA,
        nombre: "Administrador",
        apellido: "Nobel",
        correo: ADMIN_CORREO,
        telefono: ""
    };
    localStorage.setItem("usuario_" + ADMIN_CEDULA, JSON.stringify(cuentaAdmin));
}

var usuarioActual = buscarUsuario(localStorage.getItem("sesion"));

var menu = document.getElementById("menu");

if (menu != null && usuarioActual != null) {
    var menuHtml = "<li id='saludo'></li>";

    if (usuarioActual.cedula == ADMIN_CEDULA) {
        menuHtml = menuHtml + "<li><a href='admin.html'>Panel de administrador</a></li>";
    }

    menuHtml = menuHtml + "<li><a href='#' id='salir'>Cerrar sesión</a></li>";
    menu.innerHTML = menuHtml;

    document.getElementById("saludo").textContent = "Hola, " + usuarioActual.nombre;

    document.getElementById("salir").onclick = function () {
        localStorage.removeItem("sesion");
        location.href = "remax.html";
    };
}

var formRegistro = document.getElementById("registro");
var formLogin = document.getElementById("login");

function mostrarFormulario(nombre) {
    if (formLogin == null || formRegistro == null) {
        return;
    }

    formLogin.hidden = nombre == "crear";
    formRegistro.hidden = nombre != "crear";
}

function leerHash() {
    if (location.hash == "#crear") {
        mostrarFormulario("crear");
    } else {
        mostrarFormulario("iniciar");
    }

    mostrarMensaje("");
}

if (formLogin != null && formRegistro != null) {
    window.addEventListener("hashchange", leerHash);
    leerHash();
}

if (formRegistro != null) {
    formRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var cedula = document.getElementById("regCedula").value;
        var nombre = document.getElementById("regNombre").value;
        var apellido = document.getElementById("regApellido").value;
        var correo = document.getElementById("regCorreo").value;
        var telefono = document.getElementById("regTelefono").value;

        if (buscarUsuario(cedula) != null) {
            mostrarMensaje("Esa cédula ya está registrada.");
            return;
        }

        var usuario = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono
        };

        localStorage.setItem("usuario_" + cedula, JSON.stringify(usuario));
        formRegistro.reset();
        mostrarFormulario("iniciar");
        history.replaceState(null, "", "#iniciar");
        mostrarMensaje("Cuenta creada. Ya puedes iniciar sesión.");
    });
}

if (formLogin != null) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var cedula = document.getElementById("loginCedula").value;
        var correo = document.getElementById("loginCorreo").value;
        var usuario = buscarUsuario(cedula);

        if (usuario == null) {
            mostrarMensaje("Esa cédula no está registrada.");
            return;
        }

        if (usuario.correo != correo) {
            mostrarMensaje("El correo no coincide con esa cédula.");
            return;
        }

        localStorage.setItem("sesion", cedula);
        location.href = "remax.html";
    });
}

var catalogo = document.getElementById("catalogo");
var aviso = document.getElementById("aviso");
var buscador = document.getElementById("busqueda");

if (catalogo != null) {
    if (usuarioActual != null) {
        catalogo.hidden = false;
        aviso.hidden = true;
    } else {
        buscador.hidden = true;
    }
}

var formPregunta = document.getElementById("formPregunta");

if (formPregunta != null) {
    formPregunta.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nombre = document.getElementById("pNombre").value;
        var texto = document.getElementById("pTexto").value;
        var mensaje = encodeURIComponent("Hola, soy " + nombre + ". Tengo una pregunta: " + texto);

        window.open("https://wa.me/584147071434?text=" + mensaje, "_blank");
        formPregunta.reset();
    });
}