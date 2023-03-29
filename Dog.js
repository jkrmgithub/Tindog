// Create the Dog class here
import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHTML(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <div class="dog-profile-container">
                <img src='${avatar}'>
                <div class="dog-profile-text">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>
                <div class="like-or-nope">
                    <img src="./images/badge-like.png" class="badge badge-like hidden" id="badge-like">
                    <img src="./images/badge-nope.png" class="badge badge-nope hidden" id="badge-nope">
                </div>
            </div>
        `
    }
}

export default Dog