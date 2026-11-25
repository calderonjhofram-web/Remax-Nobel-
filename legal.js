var CLAVE_COOKIES = "cookies";

function eleccionCookies() {
    return localStorage.getItem(CLAVE_COOKIES);
}

function cargarMapas() {
    var marcos = document.querySelectorAll("iframe[data-src]");

    for (var i = 0; i < marcos.length; i++) {
        marcos[i].src = marcos[i].getAttribute("data-src");
        marcos[i].hidden = false;
    }

    var avisos = document.querySelectorAll(".mapa-aviso");

    for (var j = 0; j < avisos.length; j++) {
        avisos[j].hidden = true;
    }
}

function guardarEleccion(valor) {
    localStorage.setItem(CLAVE_COOKIES, valor);

    var banner = document.getElementById("bannerCookies");

    if (banner != null) {
        banner.hidden = true;
    }

    if (valor == "si") {
        cargarMapas();
    }
}

function prepararMapas() {
    var marcos = document.querySelectorAll(".mapa iframe");

    for (var i = 0; i < marcos.length; i++) {
        var marco = marcos[i];

        if (!marco.getAttribute("data-src")) {
            marco.setAttribute("data-src", marco.getAttribute("src"));
        }

        marco.removeAttribute("src");
        marco.hidden = true;

        var aviso = document.createElement("div");
        aviso.className = "mapa-aviso";
        aviso.innerHTML = "<p>El mapa de Google puede instalar cookies. Para verlo, acepta las cookies.</p>" +
            "<button type='button' class='enlace'>Aceptar y ver el mapa</button>";
        marco.parentNode.insertBefore(aviso, marco);

        aviso.querySelector("button").addEventListener("click", function () {
            guardarEleccion("si");
        });
    }

    if (eleccionCookies() == "si") {
        cargarMapas();
    }
}

function crearBanner() {
    var banner = document.createElement("div");
    banner.id = "bannerCookies";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML = "<p><strong>Usamos cookies.</strong> El mapa de Google puede instalar cookies. " +
        "¿Las aceptas? Más información en la <a href='legal.html#cookies'>política de cookies</a>.</p>" +
        "<div><button type='button' id='rechazarCookies'>Rechazar</button>" +
        "<button type='button' id='aceptarCookies'>Aceptar</button></div>";
    document.body.appendChild(banner);

    document.getElementById("rechazarCookies").addEventListener("click", function () {
        guardarEleccion("no");
    });

    document.getElementById("aceptarCookies").addEventListener("click", function () {
        guardarEleccion("si");
    });

    banner.hidden = eleccionCookies() != null;
}

function agregarEnlacesLegales() {
    var pie = document.querySelector("footer");

    if (pie == null || pie.querySelector(".enlaces-legales") != null) {
        return;
    }

    var p = document.createElement("p");
    p.className = "enlaces-legales";
    p.innerHTML = "<a href='legal.html#privacidad'>Política de privacidad</a> - " +
        "<a href='legal.html#terminos'>Términos y condiciones</a> - " +
        "<a href='legal.html#cookies'>Política de cookies</a>";
    pie.appendChild(p);
}

function mejorarAccesibilidad() {
    var campos = document.querySelectorAll("input, textarea, select");

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];
        var sinEtiqueta = !campo.getAttribute("aria-label") && !campo.closest("label");

        if (sinEtiqueta && campo.getAttribute("placeholder")) {
            campo.setAttribute("aria-label", campo.getAttribute("placeholder"));
        }
    }

    var galeria = document.getElementById("galeria");

    if (galeria != null) {
        galeria.setAttribute("role", "dialog");
        galeria.setAttribute("aria-modal", "true");
        galeria.setAttribute("aria-label", "Galería de fotos");
        document.getElementById("gCerrar").setAttribute("aria-label", "Cerrar galería");
        document.getElementById("gAnterior").setAttribute("aria-label", "Foto anterior");
        document.getElementById("gSiguiente").setAttribute("aria-label", "Foto siguiente");
    }
}

crearBanner();
prepararMapas();
agregarEnlacesLegales();
mejorarAccesibilidad();

var botonCambiar = document.getElementById("cambiarCookies");

if (botonCambiar != null) {
    botonCambiar.addEventListener("click", function () {
        localStorage.removeItem(CLAVE_COOKIES);
        document.getElementById("bannerCookies").hidden = false;
    });
}