// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
    
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

   
    amigos.push(nombre);

    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        li.style.cursor = "pointer";

        
        li.onclick = () => {
            if (confirm(`¿Eliminar a ${amigos[i]}?`)) {
                amigos.splice(i, 1);
                guardarEnLocalStorage();
                actualizarLista();
            }
        };

        lista.appendChild(li);
    }
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarLista() {
    if (confirm("¿Seguro que quieres borrar toda la lista?")) {
        amigos = [];
        actualizarLista();
        document.getElementById("resultado").innerHTML = "";
    }
}
