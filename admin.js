var lista = INMUEBLES;
var editando = -1;
var fotoActual = "";

function valor(id) {
    return document.getElementById(id).value;
}

function ponerValor(id, dato) {
    if (dato == null) {
        dato = "";
    }
    document.getElementById(id).value = dato;
}

function numeroOVacio(texto) {
    if (texto == "") {
        return null;
    }
    return Number(texto);
}

function guardarLista() {
    try {
        localStorage.setItem("inmuebles", JSON.stringify(lista));
    } catch (error) {
        alert("No hay espacio. Usa fotos más pequeñas o borra algunas.");
    }
}

function leerFoto(archivo, cuandoTermine) {
    var lector = new FileReader();

    lector.onload = function () {
        var imagen = new Image();

        imagen.onload = function () {
            var escala = 600 / imagen.width;

            if (escala > 1) {
                escala = 1;
            }

            var lienzo = document.createElement("canvas");
            lienzo.width = imagen.width * escala;
            lienzo.height = imagen.height * escala;
            lienzo.getContext("2d").drawImage(imagen, 0, 0, lienzo.width, lienzo.height);
            cuandoTermine(lienzo.toDataURL("image/jpeg", 0.7));
        };

        imagen.src = lector.result;
    };

    lector.readAsDataURL(archivo);
}

function dibujarTablas() {
    var htmlInmuebles = "<tr><th>Foto</th><th>Código</th><th>Título</th><th>Tipo</th><th>Operación</th><th>Precio</th><th>Acciones</th></tr>";

    for (var i = 0; i < lista.length; i++) {
        var x = lista[i];

        htmlInmuebles = htmlInmuebles + "<tr>";

        if (x.foto) {
            htmlInmuebles = htmlInmuebles + "<td><img class='mini' src='" + x.foto + "' alt=''></td>";
        } else {
            htmlInmuebles = htmlInmuebles + "<td>Sin foto</td>";
        }

        htmlInmuebles = htmlInmuebles + "<td>" + x.cod + "</td>";
        htmlInmuebles = htmlInmuebles + "<td>" + limpiar(x.titulo) + "</td>";
        htmlInmuebles = htmlInmuebles + "<td>" + x.tipo + "</td>";
        htmlInmuebles = htmlInmuebles + "<td>" + x.op + "</td>";
        htmlInmuebles = htmlInmuebles + "<td>USD $" + x.precio.toLocaleString("es-VE") + "</td>";
        htmlInmuebles = htmlInmuebles + "<td><button data-editar='" + i + "'>Editar</button> <button data-borrar='" + i + "'>Borrar</button></td>";
        htmlInmuebles = htmlInmuebles + "</tr>";
    }

    document.getElementById("tablaInmuebles").innerHTML = htmlInmuebles;

    var usuarios = [];

    for (var j = 0; j < localStorage.length; j++) {
        var clave = localStorage.key(j);

        if (clave.indexOf("usuario_") == 0) {
            usuarios.push(JSON.parse(localStorage.getItem(clave)));
        }
    }

    var htmlUsuarios = "<tr><th>Cédula</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Acciones</th></tr>";

    for (var k = 0; k < usuarios.length; k++) {
        var u = usuarios[k];
        var telefono = u.telefono;

        if (!telefono) {
            telefono = "Sin dato";
        }

        htmlUsuarios = htmlUsuarios + "<tr>";
        htmlUsuarios = htmlUsuarios + "<td>" + limpiar(u.cedula) + "</td>";
        htmlUsuarios = htmlUsuarios + "<td>" + limpiar(u.nombre) + " " + limpiar(u.apellido) + "</td>";
        htmlUsuarios = htmlUsuarios + "<td>" + limpiar(u.correo) + "</td>";
        htmlUsuarios = htmlUsuarios + "<td>" + limpiar(telefono) + "</td>";
        htmlUsuarios = htmlUsuarios + "<td><button data-editaru='" + limpiar(u.cedula) + "'>Editar</button> <button data-borraru='" + limpiar(u.cedula) + "'>Borrar</button></td>";
        htmlUsuarios = htmlUsuarios + "</tr>";
    }

    document.getElementById("tablaUsuarios").innerHTML = htmlUsuarios;
}

function cancelarEdicion() {
    document.getElementById("formInmueble").reset();
    editando = -1;
    fotoActual = "";
    document.getElementById("formTitulo").textContent = "Agregar inmueble";
    document.getElementById("cancelar").hidden = true;
}

function guardarInmueble(foto) {
    var inmueble = {
        cod: Number(valor("aCod")),
        titulo: valor("aTitulo"),
        tipo: valor("aTipo"),
        op: valor("aOp"),
        precio: Number(valor("aPrecio")),
        zona: valor("aZona"),
        m2: numeroOVacio(valor("aM2")),
        terreno: numeroOVacio(valor("aTerreno")),
        foto: foto
    };

    if (editando == -1) {
        lista.unshift(inmueble);
    } else {
        lista[editando] = inmueble;
    }

    guardarLista();
    cancelarEdicion();
    dibujarTablas();
}

function clicEnPagina(evento) {
    var boton = evento.target;
    var editar = boton.getAttribute("data-editar");
    var borrar = boton.getAttribute("data-borrar");
    var editarUsuario = boton.getAttribute("data-editaru");
    var borrarUsuario = boton.getAttribute("data-borraru");

    if (editar != null) {
        var x = lista[editar];

        ponerValor("aCod", x.cod);
        ponerValor("aTitulo", x.titulo);
        ponerValor("aTipo", x.tipo);
        ponerValor("aOp", x.op);
        ponerValor("aPrecio", x.precio);
        ponerValor("aZona", x.zona);
        ponerValor("aM2", x.m2);
        ponerValor("aTerreno", x.terreno);

        editando = Number(editar);
        fotoActual = x.foto || "";

        document.getElementById("formTitulo").textContent = "Editar inmueble";
        document.getElementById("cancelar").hidden = false;
        document.getElementById("formInmueble").scrollIntoView();
    }

    if (borrar != null) {
        if (confirm("¿Borrar este inmueble?")) {
            lista.splice(borrar, 1);
            guardarLista();
            dibujarTablas();
        }
    }

    if (editarUsuario != null) {
        var u = buscarUsuario(editarUsuario);

        var nombre = prompt("Nombre:", u.nombre);
        if (nombre != null) {
            u.nombre = nombre;
        }

        var apellido = prompt("Apellido:", u.apellido);
        if (apellido != null) {
            u.apellido = apellido;
        }

        var correo = prompt("Correo:", u.correo);
        if (correo != null) {
            u.correo = correo;
        }

        var telefono = prompt("Teléfono:", u.telefono || "");
        if (telefono != null) {
            u.telefono = telefono;
        }

        localStorage.setItem("usuario_" + editarUsuario, JSON.stringify(u));
        dibujarTablas();
    }

    if (borrarUsuario != null) {
        if (borrarUsuario == ADMIN_CEDULA) {
            alert("No puedes borrar al administrador.");
        } else if (confirm("¿Borrar a esta persona?")) {
            localStorage.removeItem("usuario_" + borrarUsuario);
            dibujarTablas();
        }
    }
}

if (usuarioActual != null && usuarioActual.cedula == ADMIN_CEDULA) {
    dibujarTablas();

    document.addEventListener("click", clicEnPagina);

    document.getElementById("cancelar").addEventListener("click", cancelarEdicion);

    document.getElementById("formInmueble").addEventListener("submit", function (evento) {
        evento.preventDefault();

        var archivo = document.getElementById("aFoto").files[0];

        if (archivo) {
            leerFoto(archivo, guardarInmueble);
        } else {
            guardarInmueble(fotoActual);
        }
    });

    document.getElementById("restaurar").addEventListener("click", function () {
        if (confirm("¿Volver a los inmuebles originales? Se pierden los cambios.")) {
            localStorage.removeItem("inmuebles");
            location.reload();
        }
    });
} else {
    location.href = "remax.html";
}
var BASE = [
    {cod: 325900, titulo: "Casa en Altos de Paramillo, Palogordo", tipo: "Casa", op: "Venta", precio: 80000, zona: "Altos de Paramillo", m2: 250, terreno: 143, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332621/0_0a4b143c10dbf2fcd85d7c85e8b5e17a.webp"}, // similar de la zona
    {cod: 332611, titulo: "Casa en El Junco, sector La Esperanza", tipo: "Casa", op: "Venta", precio: 15000, zona: "Barrio La Esperanza", m2: 49, terreno: 49, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332611/0_20bce3420c2b70c37dd35dab59ae590c.webp"},
    {cod: 332615, titulo: "Terreno en El Junco Páramo", tipo: "Terreno", op: "Venta", precio: 11000, zona: "Barrio La Esperanza", m2: null, terreno: 175, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332615/0_d59f1a85dda9d10aff2c43af8d865683.webp"},
    {cod: 326141, titulo: "Casa en proyecto Urb. Villa Camila", tipo: "Casa", op: "Venta", precio: 50000, zona: "Boca de Caneyes", m2: 136, terreno: 136, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332621/0_0a4b143c10dbf2fcd85d7c85e8b5e17a.webp"},
    {cod: 329952, titulo: "Casa en Colón, Barrio Urdaneta", tipo: "Casa", op: "Venta", precio: 39000, zona: "Colón", m2: 270, terreno: 270, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/329952/0_1c58e0c8cc54305e269ee69819257c6e.webp"},
    {cod: 329944, titulo: "Casa y terreno en Monte Carmelo", tipo: "Casa", op: "Venta", precio: 45000, zona: "Cordero", m2: 80, terreno: 15000, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/329944/0_c0ee1d91200c87434e5e171c3f5efa8b.webp"},
    {cod: 330268, titulo: "Casa con terreno en La Ahuyamala", tipo: "Casa", op: "Venta", precio: 69000, zona: "Cordero", m2: 8763, terreno: 8763, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/330268/0_541229113ef7331c64425e57f6eded36.webp"},
    {cod: 331988, titulo: "Casa en Sabana Larga", tipo: "Casa", op: "Venta", precio: 35000, zona: "Cordero", m2: 276, terreno: 276, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/331988/0_c835ef308f2545615fa9e061b1ca7632.webp"},
    {cod: 331996, titulo: "Casa en La Ahuyamala", tipo: "Casa", op: "Venta", precio: 24000, zona: "Cordero", m2: 276, terreno: 276, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/331996/0_e32d6cec41b51fba5559ef02f495239b.webp"},
    {cod: 332256, titulo: "Casa en el sector Salomón", tipo: "Casa", op: "Venta", precio: 16000, zona: "Cordero", m2: 240, terreno: 240, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332256/0_19910ed9eb57d7ec63d17ba265f6693d.webp"},
    {cod: 331415, titulo: "Casa en Santa Eduviges", tipo: "Casa", op: "Venta", precio: 19000, zona: "El Diamante", m2: 100, terreno: 100, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/331415/0_a63b23b30e4d2789621423f9868e5108.webp"},
    {cod: 331420, titulo: "Local en el C.C. Mercado Metropolitano", tipo: "Local", op: "Venta", precio: 170000, zona: "La Concordia, San Cristóbal", m2: 194, terreno: 194, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/331420/0_988246d861997af17809d8648abbf792.webp"},
    {cod: 332254, titulo: "Galpón y terreno en Potrero de las Casas", tipo: "Galpón", op: "Venta", precio: 45000, zona: "Lobatera", m2: 500, terreno: 13400, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332254/0_81fe1f99a22693ad943debb48a465a46.webp"},
    {cod: 330916, titulo: "Terreno con avances de construcción", tipo: "Terreno", op: "Venta", precio: 16000, zona: "Palmira", m2: null, terreno: 105, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/330916/0_e24d33acf446aaf1e588679825eabf52.webp"},
    {cod: 328889, titulo: "Apartamento piso 9, Res. La Hacienda", tipo: "Apartamento", op: "Alquiler", precio: 330, zona: "San Cristóbal, Av. 19 de Abril", m2: 85, terreno: null, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/328889/0_fb3fad7e348b94f1e67a09014bc00fcf.webp"},
    {cod: 332252, titulo: "Apartamento en Res. Alcázar", tipo: "Apartamento", op: "Venta", precio: 115000, zona: "San Cristóbal", m2: 90, terreno: null, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/332252/0_894be34fc0ee7307dc6a56eb0edd2626.webp"},
    {cod: 327250, titulo: "Casa en Urb. Bermeja Sur", tipo: "Casa", op: "Venta", precio: 180000, zona: "San Cristóbal, Urb. Sucre", m2: 475, terreno: 475, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/327250/P_0_1686eed0e6960c49d8339fe7419354.webp"},
    {cod: 330915, titulo: "Casa en Barrio Obrero", tipo: "Casa", op: "Venta", precio: 650000, zona: "San Cristóbal, Barrio Obrero", m2: 1415, terreno: 1415, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/330915/0_ce0a91c87e3a087613a917bb35a77f42.webp"},
    {cod: 317839, titulo: "Edificio con locales comerciales", tipo: "Edificio", op: "Venta", precio: 850000, zona: "San Cristóbal, Barrio Lourdes", m2: 296, terreno: 296, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/317839/0_f8b35c8674c7bd98a501cc3fec787d.webp"},
    {cod: 330207, titulo: "Hotel y tasca, Plaza Venezuela", tipo: "Hotel", op: "Venta", precio: 155000, zona: "San Cristóbal", m2: 544, terreno: 272, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/330207/0_db6b11c3d8f3ff32e53f6dea0c404ba8.webp"},
    {cod: 328865, titulo: "Local comercial de 20 m2", tipo: "Local", op: "Alquiler", precio: 87, zona: "San Cristóbal", m2: 20, terreno: 20, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/328865/0_f94a0be12aad5372f672fd17aa39b6d3.webp"},
    {cod: 328872, titulo: "Local comercial de 40 m2", tipo: "Local", op: "Alquiler", precio: 175, zona: "San Cristóbal", m2: 40, terreno: 40, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/328872/0_60d5435af6d54808e996644d22e01a65.webp"},
    {cod: 329025, titulo: "Terreno en Helechales, Palo Gordo", tipo: "Terreno", op: "Venta", precio: 6800, zona: "San Cristóbal", m2: null, terreno: 413, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/329025/0_0a1ecdea4e13ee23e24f8e90c70d0a4f.webp"},
    {cod: 315766, titulo: "Apartamento Los Naranjos, Pueblo Nuevo", tipo: "Apartamento", op: "Alquiler", precio: 400, zona: "San Juan Bautista", m2: 92, terreno: null, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/315766/0_09164ce87966655f31d58226f9150b.webp"},
    {cod: 326135, titulo: "Casa en construcción, Polígono de Tiro", tipo: "Casa", op: "Venta", precio: 50000, zona: "San Juan Bautista", m2: 85, terreno: 85, foto: ""},
    {cod: 329955, titulo: "Terreno en San Juan de Colón", tipo: "Terreno", op: "Venta", precio: 8000, zona: "San Juan de Colón", m2: null, terreno: 600, foto: "https://cdn.remax.com.ve/api/novus/inmuebles_usados/329955/0_564f15f83f4d8b2c9b201c28bf69bbd9.webp"}
];s