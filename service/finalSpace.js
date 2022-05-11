export async function finalSpace(personagem) {
    try{
        let personagens = await fetch(`https://finalspaceapi.com/api/v0/character/${personagem}`)
        return personagens.json()
    }
    catch (err){
        alert("Try again!")
    }
}

