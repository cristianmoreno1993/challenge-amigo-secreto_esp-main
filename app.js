/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema */

// Variables principales
let listaDeAmigos = [];     // Almacena todos los amigos agregados
let nombreActual = '';      // Almacena el nombre ingresado en el input

// Funciones
function agregarAmigo() {
    nombreActual = document.getElementById('amigo').value;

    if (nombreActual === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    } else {
        // Agrega el nombre a la lista
        listaDeAmigos.push(nombreActual);
        // Limpia el input
        limpiarCaja();
    }

    mostrarAmigos();
}

function mostrarAmigos() {
    // Capturar el elemento de la lista
    let listaHTML = document.getElementById('listaAmigos');
    // Limpiar la lista antes de mostrar los amigos 
    listaHTML.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];     // Nombre del amigo actual
        let li = document.createElement('li'); // Crea un elemento <li>
        li.textContent = amigo;           // Le asigna el nombre
        listaHTML.appendChild(li);        // Agrega el <li> a la lista UL
    }

    console.log('Mostrando amigos:', listaDeAmigos);
}

function sortearAmigo() {
    // Pendiente de implementar

    if (listaDeAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear!');
        return;
    }

    // Seleccionar un índice aleatorio (0 a length-1)
    let indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoGanador = listaDeAmigos[indiceGanador];

    //mostrar el resultado
    let mostrarGanador = document.getElementById('resultado');
    mostrarGanador.innerHTML = '';
    let listaGanador = document.createElement('li');
    listaGanador.textContent = amigoGanador;
    mostrarGanador.appendChild(listaGanador);

}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// llamado de funciones
