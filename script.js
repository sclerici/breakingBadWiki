const inputSearch = document.getElementById('input')
const dataContainer = document.getElementById('data-container')
const overview = document.getElementById('overview')
const form = document.getElementById('form')
const verMas = document.getElementById('vermas-btn')

let offset = 0;
let limit = 12;

let ApiUrl = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`


// Fetch a la API
async function getPersonajes(){
    const response = await fetch(ApiUrl)
    const data = await response.json()
    showActores(data)

}

// Funcion que crea la tarjeta de los actores y toma la data de la API
function showActores(actor){
    actor.forEach(personaje => {
            const { name, img, birthday, status, nickname } = personaje;
           
            const actorElement = document.createElement('div')
            actorElement.classList.add('actor-img')

            actorElement.innerHTML = `
            <img class="actor-img" src="${img}" alt="cinema_img">
            <div class="overview" id="overview">
                <h1>${name}</h1>
                <h3>Nickname: ${nickname}</h3>
                <h3>Birthday: ${birthday}</h3>
                <h3>Status: ${status}</h3>
            </div>
            `

            dataContainer.appendChild(actorElement)
    

    });
}

getPersonajes()

verMas.addEventListener('click', () => {
    offset += limit;
    ApiUrl = `https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`
    getPersonajes()
})



