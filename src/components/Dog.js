import React from "react";

function Dog({ dogs, onUpdate }) {
    if (!dogs) return <h3>Select a doggo</h3>;
    
    function handleClick() {
        fetch(`http://localhost:3001/pups/${dogs.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDog: !dogs.isGoodDog,
            }),
        })
            .then(r => r.json())
            .then(onUpdate);
    }
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={dogs.image} alt={dogs.name} />
                <h2>{dogs.name}</h2>
                <button onClick={handleClick}>{dogs.isGoodDog ? "Good" : "Bad"} Dog!</button>
            </div>
        </div>
    );
}

export default Dog;