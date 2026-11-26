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

var INMUEBLES = NUEVOS;
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
        } else {
            htmlInmuebles = htmlInmuebles + "<div class='sin-foto'>Sin foto</div>";
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