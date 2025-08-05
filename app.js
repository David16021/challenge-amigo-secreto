let amigos = [];

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