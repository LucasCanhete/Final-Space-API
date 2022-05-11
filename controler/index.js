import { finalSpace } from "./../service/finalSpace.js"

async function mostrarPersonagem(id) {
    let info = {}
    info = await finalSpace(id)
    console.log(info)
    let quadro = document.getElementById("info")
    document.getElementById("imagem").src = info.img_url
    quadro.innerHTML = `
        <pr> Nome: ${info.name} 
        <br> Cabelo: ${info.hair} 
        <br> Espécie: ${info.species}
        <br> Gênero: ${info.gender}
        <br> Habilidades: ${info.abilities}
        </pr>
        `  
}

function buscarPorId() { 
    let idBusca = document.getElementById("busca").value
    mostrarPersonagem(idBusca)  
}

document.getElementById("btn").onclick = buscarPorId
