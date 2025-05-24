document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('buscar').addEventListener('click', function () {
        const nome = document.getElementById('nomePokemon').value.toLowerCase()
        const url = `https://pokeapi.co/api/v2/pokemon/${nome}`

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(alert('Pokemon não encontrado'))
                }
                return response.json()
            })

            .then(data => {
                document.getElementById('resultado').innerHTML =
                    `<h2>${data.name}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}" >
                    <p>Tipo: ${data.types[0].type.name}
                                `
            })
            .catch(error => {
                document.getElementById('resultado').innerHTML = `<p>${error.message}</p>`
            })
    })
})