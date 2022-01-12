import React from "react"

function DogBar({ dogs, onClickDog }) {
    const dogCard = dogs.map(dog => (
        <span key={dog.id} onClick={() => onClickDog(dog.id)}>{dog.name}</span>
    ));

    return <div id="dog-bar">{dogCard}</div>
}

export default DogBar;