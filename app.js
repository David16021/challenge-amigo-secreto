let amigos = [];
// Función para agregar amigos
function agregarAmigo() {
    // 1. Capturar el valor del input
    let nombreAmigo = document.getElementById("amigo").value;

    // 2. Validar que no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si está vacío
    }

    // 3. Agregar el nombre al array
    amigos.push(nombreAmigo);
    console.log(amigos)

    // 4. Limpiar el input
    document.getElementById("amigo").value = "";

    // 5. Mostrar la lista actualizada en pantalla
    actualizarLista();
}

// Función para mostrar los nombres en la lista <ul>
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista para no duplicar

    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Crear <li>
        li.textContent = amigo;
        lista.appendChild(li); // Agregarlo a la <ul>
    });
}



function sortearAmigo() {
    // 1. Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para hacer el sorteo.");
        return;
    }

    // 2. Generar un índice aleatorio entre 0 y (amigos.length - 1)
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre correspondiente a ese índice
    let amigoSorteado = amigos[indiceSorteado];

    // 4. Mostrar el nombre en el <ul id="resultado">
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar contenido anterior

    let li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);
}