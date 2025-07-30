// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de los nombres ingresados
const listaAmigos = [];

// Elementos 
const inputNombre = document.getElementById("amigo");
const listaAmigosHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");


function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    // Validacion
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar
    listaAmigos.push(nombre);
    mostrarNombreEnLista(nombre);

    // Limpiar 
    inputNombre.value = "";
    inputNombre.focus();
}

function mostrarNombreEnLista(nombre) {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigosHTML.appendChild(li);
}

function sortearAmigo() {
    
    // Validación
    if (listaAmigos.length === 0) {
        alert("Primero debes agregar al menos un nombre.");
        return;
    }

    // Obtener nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];

    // Mostrar resultado
    alert(`El nombre secreto es: ${nombreSorteado}`);

    resultadoHTML.innerHTML = 
    `<li> El nombre secreto es: <strong>${nombreSorteado}</strong></li>`; 
}
