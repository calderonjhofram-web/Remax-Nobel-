var BASE = [
    {cod: 325900, titulo: "Casa en Altos de Paramillo, Palogordo", tipo: "Casa", op: "Venta", precio: 80000, zona: "Altos de Paramillo", m2: 250, terreno: 143, foto: ""},
    {cod: 332611, titulo: "Casa en El Junco, sector La Esperanza", tipo: "Casa", op: "Venta", precio: 15000, zona: "Barrio La Esperanza", m2: 49, terreno: 49, foto: ""},
    {cod: 332615, titulo: "Terreno en El Junco Páramo", tipo: "Terreno", op: "Venta", precio: 11000, zona: "Barrio La Esperanza", m2: null, terreno: 175, foto: ""},
    {cod: 326141, titulo: "Casa en proyecto Urb. Villa Camila", tipo: "Casa", op: "Venta", precio: 50000, zona: "Boca de Caneyes", m2: 136, terreno: 136, foto: ""},
    {cod: 329952, titulo: "Casa en Colón, Barrio Urdaneta", tipo: "Casa", op: "Venta", precio: 39000, zona: "Colón", m2: 270, terreno: 270, foto: ""},
    {cod: 329944, titulo: "Casa y terreno en Monte Carmelo", tipo: "Casa", op: "Venta", precio: 45000, zona: "Cordero", m2: 80, terreno: 15000, foto: ""},
    {cod: 330268, titulo: "Casa con terreno en La Ahuyamala", tipo: "Casa", op: "Venta", precio: 69000, zona: "Cordero", m2: 8763, terreno: 8763, foto: ""},
    {cod: 331988, titulo: "Casa en Sabana Larga", tipo: "Casa", op: "Venta", precio: 35000, zona: "Cordero", m2: 276, terreno: 276, foto: ""},
    {cod: 331996, titulo: "Casa en La Ahuyamala", tipo: "Casa", op: "Venta", precio: 24000, zona: "Cordero", m2: 276, terreno: 276, foto: ""},
    {cod: 332256, titulo: "Casa en el sector Salomón", tipo: "Casa", op: "Venta", precio: 16000, zona: "Cordero", m2: 240, terreno: 240, foto: ""},
    {cod: 331415, titulo: "Casa en Santa Eduviges", tipo: "Casa", op: "Venta", precio: 19000, zona: "El Diamante", m2: 100, terreno: 100, foto: ""},
    {cod: 331420, titulo: "Local en el C.C. Mercado Metropolitano", tipo: "Local", op: "Venta", precio: 170000, zona: "La Concordia, San Cristóbal", m2: 194, terreno: 194, foto: ""},
    {cod: 332254, titulo: "Galpón y terreno en Potrero de las Casas", tipo: "Galpón", op: "Venta", precio: 45000, zona: "Lobatera", m2: 500, terreno: 13400, foto: ""},
    {cod: 330916, titulo: "Terreno con avances de construcción", tipo: "Terreno", op: "Venta", precio: 16000, zona: "Palmira", m2: null, terreno: 105, foto: ""},
    {cod: 328889, titulo: "Apartamento piso 9, Res. La Hacienda", tipo: "Apartamento", op: "Alquiler", precio: 330, zona: "San Cristóbal, Av. 19 de Abril", m2: 85, terreno: null, foto: ""},
    {cod: 332252, titulo: "Apartamento en Res. Alcázar", tipo: "Apartamento", op: "Venta", precio: 115000, zona: "San Cristóbal", m2: 90, terreno: null, foto: ""},
    {cod: 327250, titulo: "Casa en Urb. Bermeja Sur", tipo: "Casa", op: "Venta", precio: 180000, zona: "San Cristóbal, Urb. Sucre", m2: 475, terreno: 475, foto: ""},
    {cod: 330915, titulo: "Casa en Barrio Obrero", tipo: "Casa", op: "Venta", precio: 650000, zona: "San Cristóbal, Barrio Obrero", m2: 1415, terreno: 1415, foto: ""},
    {cod: 317839, titulo: "Edificio con locales comerciales", tipo: "Edificio", op: "Venta", precio: 850000, zona: "San Cristóbal, Barrio Lourdes", m2: 296, terreno: 296, foto: ""},
    {cod: 330207, titulo: "Hotel y tasca, Plaza Venezuela", tipo: "Hotel", op: "Venta", precio: 155000, zona: "San Cristóbal", m2: 544, terreno: 272, foto: ""},
    {cod: 328865, titulo: "Local comercial de 20 m2", tipo: "Local", op: "Alquiler", precio: 87, zona: "San Cristóbal", m2: 20, terreno: 20, foto: ""},
    {cod: 328872, titulo: "Local comercial de 40 m2", tipo: "Local", op: "Alquiler", precio: 175, zona: "San Cristóbal", m2: 40, terreno: 40, foto: ""},
    {cod: 329025, titulo: "Terreno en Helechales, Palo Gordo", tipo: "Terreno", op: "Venta", precio: 6800, zona: "San Cristóbal", m2: null, terreno: 413, foto: ""},
    {cod: 315766, titulo: "Apartamento Los Naranjos, Pueblo Nuevo", tipo: "Apartamento", op: "Alquiler", precio: 400, zona: "San Juan Bautista", m2: 92, terreno: null, foto: ""},
    {cod: 326135, titulo: "Casa en construcción, Polígono de Tiro", tipo: "Casa", op: "Venta", precio: 50000, zona: "San Juan Bautista", m2: 85, terreno: 85, foto: ""},
    {cod: 329955, titulo: "Terreno en San Juan de Colón", tipo: "Terreno", op: "Venta", precio: 8000, zona: "San Juan de Colón", m2: null, terreno: 600, foto: ""}
];

var PLACEHOLDER = "https://www.remax.com.ve/build/images/placeholder_agente_listado.242695c9.jpeg";
var PERFIL = "https://cdn.remax.com.ve/api/novus/perfil/inmobiliarias/";

var AGENTES = [
    {nombre: "Leyddi Dayana Vivas Torres", tel: "4147008030", correo: "leyddivivas", cargo: "Bróker", foto: PERFIL + "broker/610_1741697156.jpeg"},
    {nombre: "Aida Barjas Al Khatib", tel: "4265754775", correo: "aidabarjas", cargo: "Agente", foto: PERFIL + "asesores/8483_1789068489.webp"},
    {nombre: "Christian José Rincón Villamizar", tel: "4120630976", correo: "jose.rincon", cargo: "Agente", foto: PERFIL + "asesores/9230_1760994520.jpeg"},
    {nombre: "Erika Vanessa Verdi Quemba", tel: "4147225029", correo: "erikaverdi", cargo: "Agente", foto: PERFIL + "asesores/2139_1788360468.webp"},
    {nombre: "Giuliana Carrero", tel: "4247341290", correo: "giulianacarrero", cargo: "Agente", foto: PERFIL + "asesores/8547_1760995056.jpeg"},
    {nombre: "Jacqueline Alvarado Garcia", tel: "4147058784", correo: "jacquelinealvarado", cargo: "Agente", foto: PERFIL + "asesores/916_1761769434.jpeg"},
    {nombre: "Jaiberth Alberto Zambrano Colmenares", tel: "4147315611", correo: "jaiberthzambrano", cargo: "Agente", foto: PLACEHOLDER},
    {nombre: "Lennys Lissett Castillo Conde", tel: "4147520075", correo: "lennys.castillo", cargo: "Agente", foto: PERFIL + "asesores/9540_1788360799.webp"},
    {nombre: "Licel Morales", tel: "4147076927", correo: "licelmorales", cargo: "Agente", foto: PERFIL + "asesores/8525_1761770637.jpeg"},
    {nombre: "Maria Espitia", tel: "4247545580", correo: "mariaespitia", cargo: "Agente", foto: PERFIL + "asesores/8620_1761857586.jpeg"},
    {nombre: "Maria Yacqueline Gonzalez Nieto", tel: "4247008815", correo: "yacquelinegonzalez", cargo: "Agente", foto: PERFIL + "asesores/2143_1760992060.jpeg"},
    {nombre: "Marisela Esther Luna Romero", tel: "4147103054", correo: "mariselaluna", cargo: "Agente", foto: PERFIL + "asesores/8463_1761246463.jpeg"},
    {nombre: "Miguel Suarez", tel: "4120780439", correo: "miguelsuarez", cargo: "Agente", foto: PERFIL + "asesores/9124_1788361633.webp"},
    {nombre: "Neyra Josefa Barrera Cardozo", tel: "4247047896", correo: "neyra.barrera", cargo: "Agente", foto: PERFIL + "asesores/9945_1788361085.webp"},
    {nombre: "Nicolina Ontiveros De Noguera", tel: "4247079299", correo: "nicolina.ontiveros", cargo: "Agente", foto: PERFIL + "asesores/9229_1760996288.jpeg"},
    {nombre: "Okayrelis Chichinquira Grimaldo Gonzalez", tel: "4121137186", correo: "okayrelis.gonzalez", cargo: "Agente", foto: PERFIL + "asesores/9474_1788361241.webp"},
    {nombre: "Rossemelhy Karina Moncada Marquez", tel: "4127990568", correo: "rossemelhymoncada", cargo: "Agente", foto: PLACEHOLDER},
    {nombre: "Swander Javier Vergara Montoya", tel: "4147315611", correo: "swandervergara", cargo: "Agente", foto: PLACEHOLDER},
    {nombre: "Víctor Ramón Mendoza Maldonado", tel: "4147044523", correo: "victormendoza", cargo: "Agente", foto: PERFIL + "asesores/752_1723817259.png"},
    {nombre: "Yelka Stefanni Rojas Lizcano", tel: "4121720940", correo: "YelkaRojas", cargo: "Agente", foto: PERFIL + "asesores/7726_1723817318.png"},
    {nombre: "Yesenia Carolina Soto Bohorquez", tel: "4227001757", correo: "yeseniasoto", cargo: "Agente", foto: PERFIL + "asesores/10940_1788361380.webp"}
];

var INMUEBLES = NUEVOS.concat(BASE);
var inmueblesGuardados = localStorage.getItem("inmuebles");

if (inmueblesGuardados != null) {
    INMUEBLES = JSON.parse(inmueblesGuardados);
}

function limpiar(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function dibujarCatalogo() {
    var htmlInmuebles = "";

    for (var i = 0; i < INMUEBLES.length; i++) {
        var x = INMUEBLES[i];
        var precio = "Consultar precio";
        var mensaje = encodeURIComponent("Hola, me interesa el inmueble código " + x.cod);
        var fotos = fotosDe(x.cod);

        if (x.foto) {
            fotos.unshift(x.foto);
        }

        if (x.precio > 0) {
            precio = "USD $" + x.precio.toLocaleString("es-VE");

            if (x.op == "Alquiler") {
                precio = precio + " / mes";
            }
        }

        htmlInmuebles = htmlInmuebles + "<article class='tarjeta' data-tipo='" + x.tipo + "' data-op='" + x.op + "'>";

        if (fotos.length > 0) {
            htmlInmuebles = htmlInmuebles + "<div class='portada' role='button' tabindex='0' aria-label='Ver las fotos de " + limpiar(x.titulo) + "' data-pos='" + i + "'>";
            htmlInmuebles = htmlInmuebles + "<img class='foto' loading='lazy' src='" + fotos[0] + "' alt='" + limpiar(x.titulo) + "'>";
            htmlInmuebles = htmlInmuebles + "<span class='cantidad'>" + fotos.length + " fotos</span>";
            htmlInmuebles = htmlInmuebles + "</div>";
        }

        htmlInmuebles = htmlInmuebles + "<span class='etiqueta " + x.op.toLowerCase() + "'>" + x.op + "</span>";
        htmlInmuebles = htmlInmuebles + "<h3>" + limpiar(x.titulo) + "</h3>";
        htmlInmuebles = htmlInmuebles + "<p class='precio'>" + precio + "</p>";
        htmlInmuebles = htmlInmuebles + "<p>Tipo: " + x.tipo + "</p>";
        htmlInmuebles = htmlInmuebles + "<p>Zona: " + limpiar(x.zona) + "</p>";

        if (x.m2) {
            htmlInmuebles = htmlInmuebles + "<p>Construcción: " + x.m2 + " m2</p>";
        }

        if (x.terreno) {
            htmlInmuebles = htmlInmuebles + "<p>Terreno: " + x.terreno + " m2</p>";
        }

        htmlInmuebles = htmlInmuebles + "<small>Código REMAX: " + x.cod + "</small>";
        htmlInmuebles = htmlInmuebles + "<a class='enlace' target='_blank' href='https://wa.me/584147071434?text=" + mensaje + "'>Consultar por WhatsApp</a>";
        htmlInmuebles = htmlInmuebles + "</article>";
    }

    document.getElementById("inmuebles").innerHTML = htmlInmuebles;

    var htmlAgentes = "";

    for (var j = 0; j < AGENTES.length; j++) {
        var a = AGENTES[j];

        htmlAgentes = htmlAgentes + "<article class='tarjeta agente'>";
        htmlAgentes = htmlAgentes + "<img class='foto-agente' loading='lazy' src='" + a.foto + "' alt='Foto de " + limpiar(a.nombre) + "'>";
        htmlAgentes = htmlAgentes + "<span class='etiqueta'>" + a.cargo + "</span>";
        htmlAgentes = htmlAgentes + "<h3>" + a.nombre + "</h3>";
        htmlAgentes = htmlAgentes + "<p>Teléfono: +58-" + a.tel + "</p>";
        htmlAgentes = htmlAgentes + "<p>Correo: " + a.correo + "@nobel.remax.com.ve</p>";
        htmlAgentes = htmlAgentes + "<a class='enlace' target='_blank' href='https://wa.me/58" + a.tel + "'>WhatsApp</a>";
        htmlAgentes = htmlAgentes + "</article>";
    }

    document.getElementById("agentes").innerHTML = htmlAgentes;

    var tipos = [];

    for (var k = 0; k < INMUEBLES.length; k++) {
        if (tipos.indexOf(INMUEBLES[k].tipo) == -1) {
            tipos.push(INMUEBLES[k].tipo);
        }
    }

    for (var m = 0; m < tipos.length; m++) {
        document.getElementById("fTipo").add(new Option(tipos[m], tipos[m]));
    }
}

function filtrar() {
    var tipo = document.getElementById("fTipo").value;
    var op = document.getElementById("fOp").value;
    var tarjetas = document.querySelectorAll("#inmuebles .tarjeta");
    var visibles = 0;

    for (var i = 0; i < tarjetas.length; i++) {
        var tarjeta = tarjetas[i];
        var mostrar = true;

        if (tipo != "" && tarjeta.getAttribute("data-tipo") != tipo) {
            mostrar = false;
        }

        if (op != "" && tarjeta.getAttribute("data-op") != op) {
            mostrar = false;
        }

        if (mostrar) {
            visibles = visibles + 1;
        }

        tarjeta.hidden = !mostrar;
    }

    document.getElementById("sinResultados").hidden = visibles > 0;
}

function cambiarPestana() {
    var ver = this.getAttribute("data-ver");
    var botones = document.querySelectorAll(".pestanas button");

    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("activa");
    }

    this.classList.add("activa");

    document.getElementById("inmuebles").hidden = ver != "inmuebles";
    document.getElementById("agentes").hidden = ver != "agentes";
    document.getElementById("filtros").hidden = ver != "inmuebles";
}

if (document.getElementById("inmuebles") != null) {
    dibujarCatalogo();

    document.getElementById("fTipo").addEventListener("input", filtrar);
    document.getElementById("fOp").addEventListener("input", filtrar);

    var botonesPestanas = document.querySelectorAll(".pestanas button");

    for (var n = 0; n < botonesPestanas.length; n++) {
        botonesPestanas[n].addEventListener("click", cambiarPestana);
    }
}

var fotosGaleria = [];
var posicionGaleria = 0;
var elementoAnterior = null;

function mostrarFoto() {
    document.getElementById("gImagen").src = fotosGaleria[posicionGaleria];
    document.getElementById("gImagen").alt = "Foto " + (posicionGaleria + 1) + " de " + fotosGaleria.length;
    document.getElementById("gContador").textContent = (posicionGaleria + 1) + " / " + fotosGaleria.length;
}

function abrirGaleria(pos) {
    var x = INMUEBLES[pos];
    fotosGaleria = fotosDe(x.cod);

    if (x.foto) {
        fotosGaleria.unshift(x.foto);
    }

    posicionGaleria = 0;
    mostrarFoto();
    document.getElementById("galeria").hidden = false;
    document.getElementById("gCerrar").focus();
}

function cerrarGaleria() {
    document.getElementById("galeria").hidden = true;

    if (elementoAnterior != null) {
        elementoAnterior.focus();
    }
}

function siguienteFoto() {
    posicionGaleria = posicionGaleria + 1;

    if (posicionGaleria >= fotosGaleria.length) {
        posicionGaleria = 0;
    }

    mostrarFoto();
}

function anteriorFoto() {
    posicionGaleria = posicionGaleria - 1;

    if (posicionGaleria < 0) {
        posicionGaleria = fotosGaleria.length - 1;
    }

    mostrarFoto();
}

if (document.getElementById("galeria") != null) {
    document.addEventListener("click", function (evento) {
        var portada = evento.target.closest(".portada");

        if (portada != null) {
            elementoAnterior = portada;
            abrirGaleria(Number(portada.getAttribute("data-pos")));
        }
    });

    document.getElementById("gCerrar").addEventListener("click", cerrarGaleria);
    document.getElementById("gSiguiente").addEventListener("click", siguienteFoto);
    document.getElementById("gAnterior").addEventListener("click", anteriorFoto);

    document.getElementById("galeria").addEventListener("click", function (evento) {
        if (evento.target.id == "galeria") {
            cerrarGaleria();
        }
    });

    document.addEventListener("keydown", function (evento) {
        var enPortada = evento.target.classList && evento.target.classList.contains("portada");

        if (enPortada && (evento.key == "Enter" || evento.key == " ")) {
            evento.preventDefault();
            evento.target.click();
            return;
        }

        if (document.getElementById("galeria").hidden) {
            return;
        }

        if (evento.key == "Escape") {
            cerrarGaleria();
        }

        if (evento.key == "ArrowRight") {
            siguienteFoto();
        }

        if (evento.key == "ArrowLeft") {
            anteriorFoto();
        }

        if (evento.key == "Tab") {
            var botones = [
                document.getElementById("gCerrar"),
                document.getElementById("gAnterior"),
                document.getElementById("gSiguiente")
            ];
            var posicion = botones.indexOf(document.activeElement);

            if (evento.shiftKey) {
                posicion = posicion - 1;

                if (posicion < 0) {
                    posicion = botones.length - 1;
                }
            } else {
                posicion = posicion + 1;

                if (posicion >= botones.length) {
                    posicion = 0;
                }
            }

            evento.preventDefault();
            botones[posicion].focus();
        }
    });
}