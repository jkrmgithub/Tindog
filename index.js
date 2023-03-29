// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

// EVENT LISTENERS

document.getElementById('cross-button').addEventListener('click', function(){
    currentDog.hasBeenSwiped = true
    nopeBadgeRender()
    setTimeout(() => {
        getNewDog()
        renderDog()
        if (currentDogIndex > 2) {
            document.getElementById('dogs').innerHTML = noMoreDogs()
        }
    }, 1800)
})

document.getElementById('heart-button').addEventListener('click', function(){
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
    likeBadgeRender()
    setTimeout(() => {
        getNewDog()
        renderDog()
        if (currentDogIndex > 2) {
            document.getElementById('dogs').innerHTML = noMoreDogs()
        }
    }, 1800)
})

function renderDog(){
    document.getElementById('dogs').innerHTML = currentDog.getDogHTML()
}

// GET NEW DOG:
function getNewDog(){
    currentDogIndex += 1
    currentDog = new Dog(dogs[currentDogIndex])
    renderDog()
}

// BADGES:

function likeBadgeRender(){
    document.getElementById('badge-like').classList.remove('hidden')
}

function nopeBadgeRender(){
    document.getElementById('badge-nope').classList.remove('hidden')
}

// NO MORE DOGS:

function noMoreDogs(){
    document.getElementById('dog-buttons-container').classList.add('hidden')
    return `
    <div class="no-more-dogs-message">
        <h1>No more single dogs near your area! 💔 </h1>
    </div>
    `
}

renderDog()
