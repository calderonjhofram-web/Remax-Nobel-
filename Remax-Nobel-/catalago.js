// [código, título, tipo, operación, precio USD, zona, m² construcción, m² terreno]
const INMUEBLES = [
    [325900, "Casa en Altos de Paramillo, Palogordo", "Casa", "Venta", 80000, "Altos de Paramillo", 250, 143],
    [332611, "Casa en El Junco, sector La Esperanza", "Casa", "Venta", 15000, "Barrio La Esperanza", 49, 49],
    [332615, "Terreno en El Junco Páramo", "Terreno", "Venta", 11000, "Barrio La Esperanza", null, 175],
    [326141, "Casa en proyecto Urb. Villa Camila", "Casa", "Venta", 50000, "Boca de Caneyes", 136, 136],
    [329952, "Casa en Colón, Barrio Urdaneta", "Casa", "Venta", 39000, "Colón", 270, 270],
    [329944, "Casa y terreno en Monte Carmelo", "Casa", "Venta", 45000, "Cordero", 80, 15000],
    [330268, "Casa con terreno en La Ahuyamala", "Casa", "Venta", 69000, "Cordero", 8763, 8763],
    [331988, "Casa en Sabana Larga", "Casa", "Venta", 35000, "Cordero", 276, 276],
    [331996, "Casa en La Ahuyamala", "Casa", "Venta", 24000, "Cordero", 276, 276],
    [332256, "Casa en el sector Salomón", "Casa", "Venta", 16000, "Cordero", 240, 240],
    [331415, "Casa en Santa Eduviges", "Casa", "Venta", 19000, "El Diamante", 100, 100],
    [331420, "Local en el C.C. Mercado Metropolitano", "Local", "Venta", 170000, "La Concordia, San Cristóbal", 194, 194],
    [332254, "Galpón y terreno en Potrero de las Casas", "Galpón", "Venta", 45000, "Lobatera", 500, 13400],
    [330916, "Terreno con avances de construcción", "Terreno", "Venta", 16000, "Palmira", null, 105],
    [328889, "Apartamento piso 9, Res. La Hacienda", "Apartamento", "Alquiler", 330, "San Cristóbal, Av. 19 de Abril", 85, null],
    [332252, "Apartamento en Res. Alcázar", "Apartamento", "Venta", 115000, "San Cristóbal", 90, null],
    [327250, "Casa en Urb. Bermeja Sur", "Casa", "Venta", 180000, "San Cristóbal, Urb. Sucre", 475, 475],
    [330915, "Casa en Barrio Obrero", "Casa", "Venta", 650000, "San Cristóbal, Barrio Obrero", 1415, 1415],
    [317839, "Edificio con locales comerciales", "Edificio", "Venta", 850000, "San Cristóbal, Barrio Lourdes", 296, 296],
    [330207, "Hotel y tasca, Plaza Venezuela", "Hotel", "Venta", 155000, "San Cristóbal", 544, 272],
    [328865, "Local comercial de 20 m²", "Local", "Alquiler", 87, "San Cristóbal", 20, 20],
    [328872, "Local comercial de 40 m²", "Local", "Alquiler", 175, "San Cristóbal", 40, 40],
    [329025, "Terreno en Helechales, Palo Gordo", "Terreno", "Venta", 6800, "San Cristóbal", null, 413],
    [315766, "Apartamento Los Naranjos, Pueblo Nuevo", "Apartamento", "Alquiler", 400, "San Juan Bautista", 92, null],
    [326135, "Casa en construcción, Polígono de Tiro", "Casa", "Venta", 50000, "San Juan Bautista", 85, 85],
    [329955, "Terreno en San Juan de Colón", "Terreno", "Venta", 8000, "San Juan de Colón", null, 600]
];

const AGENTES = [
    ["Leyddi Dayana Vivas Torres", "4147008030", "leyddivivas", "Bróker"],
    ["Aida Barjas Al Khatib", "4265754775", "aidabarjas", "Agente"],
    ["Christian José Rincón Villamizar", "4120630976", "jose.rincon", "Agente"],
    ["Erika Vanessa Verdi Quemba", "4147225029", "erikaverdi", "Agente"],
    ["Giuliana Carrero", "4247341290", "giulianacarrero", "Agente"],
    ["Jacqueline Alvarado Garcia", "4147058784", "jacquelinealvarado", "Agente"],
    ["Jaiberth Alberto Zambrano Colmenares", "4147315611", "jaiberthzambrano", "Agente"],
    ["Lennys Lissett Castillo Conde", "4147520075", "lennys.castillo", "Agente"],
    ["Licel Morales", "4147076927", "licelmorales", "Agente"],
    ["Maria Espitia", "4247545580", "mariaespitia", "Agente"],
    ["Maria Yacqueline Gonzalez Nieto", "4247008815", "yacquelinegonzalez", "Agente"],
    ["Marisela Esther Luna Romero", "4147103054", "mariselaluna", "Agente"],
    ["Miguel Suarez", "4120780439", "miguelsuarez", "Agente"],
    ["Neyra Josefa Barrera Cardozo", "4247047896", "neyra.barrera", "Agente"],
    ["Nicolina Ontiveros De Noguera", "4247079299", "nicolina.ontiveros", "Agente"],
    ["Okayrelis Chichinquira Grimaldo Gonzalez", "4121137186", "okayrelis.gonzalez", "Agente"],
    ["Rossemelhy Karina Moncada Marquez", "4127990568", "rossemelhymoncada", "Agente"],
    ["Víctor Ramón Mendoza Maldonado", "4147044523", "victormendoza", "Agente"],
    ["Yelka Stefanni Rojas Lizcano", "4121720940", "YelkaRojas", "Agente"],
    ["Yesenia Carolina Soto Bohorquez", "4227001757", "yeseniasoto", "Agente"],
    ["Zorley Andrea Gomez Florez", "4143681675", "zorley.gomez", "Agente"]
];

const byId = (id) => document.getElementById(id);
const usd = (n) => `USD $${n.toLocaleString("es-VE")}`;

byId("inmuebles").innerHTML = INMUEBLES.map(([cod, titulo, tipo, op, precio, zona, m2, terreno]) => `
    <article class="tarjeta" data-tipo="${tipo}" data-op="${op}">
        <span class="etiqueta ${op.toLowerCase()}">${op}</span>
        <h3>${titulo}</h3>
        <p class="precio">${usd(precio)}${op === "Alquiler" ? " / mes" : ""}</p>
        <p>📍 ${zona}</p>
        <p>${tipo}${m2 ? ` · 🏠 ${m2} m²` : ""}${terreno ? ` · 🌳 ${terreno} m² terreno` : ""}</p>
        <small>Código REMAX: ${cod}</small>
        <a class="enlace" target="_blank" href="https://wa.me/584147071434?text=${encodeURIComponent(`Hola, me interesa el inmueble código ${cod}`)}">Consultar por WhatsApp</a>
    </article>`).join("");

byId("agentes").innerHTML = AGENTES.map(([nombre, tel, correo, cargo]) => `
    <article class="tarjeta agente">
        <span class="etiqueta">${cargo}</span>
        <h3>${nombre}</h3>
        <p>📱 +58-${tel}</p>
        <p>✉️ ${correo}@nobel.remax.com.ve</p>
        <a class="enlace" target="_blank" href="https://wa.me/58${tel}">WhatsApp</a>
    </article>`).join("");

[...new Set(INMUEBLES.map((i) => i[2]))].forEach((t) => byId("fTipo").add(new Option(t, t)));

function filtrar() {
    const q = byId("busqueda").value.toLowerCase();
    const { value: tipo } = byId("fTipo");
    const { value: op } = byId("fOp");
    let visibles = 0;

    document.querySelectorAll(".tarjeta").forEach((t) => {
        const esInmueble = !t.classList.contains("agente");
        const ok = t.textContent.toLowerCase().includes(q)
            && (!esInmueble || ((!tipo || t.dataset.tipo === tipo) && (!op || t.dataset.op === op)));
        t.hidden = !ok;
        if (esInmueble) visibles += ok;
    });
    byId("sinResultados").hidden = visibles > 0;
}
["busqueda", "fTipo", "fOp"].forEach((id) => byId(id).addEventListener("input", filtrar));

document.querySelectorAll(".pestanas button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".pestanas button").forEach((x) => x.classList.toggle("activa", x === b));
    byId("inmuebles").hidden = b.dataset.ver !== "inmuebles";
    byId("agentes").hidden = b.dataset.ver !== "agentes";
    byId("filtros").hidden = b.dataset.ver !== "inmuebles";
}));