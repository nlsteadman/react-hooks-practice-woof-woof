import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import Dog from "./Dog";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [goodDogs, setGoodDogs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(setDogs);
  }, []);

  function onUpdate(updatedDog) {
    const updatedDogs = dogs.map(dog => 
      dog.id === updatedDog.id ? updatedDog : dog
      );
      setDogs(updatedDogs);
  }

  function handleFilter() {
    setGoodDogs(goodDogs => !goodDogs);
  }

  const selectDog = dogs.find(dog => dog.id === selectedDog);

  let displayDogs = dogs;
  if (goodDogs) {
    displayDogs = displayDogs.filter(dog => dog.isGoodDog);
  }

  return (
    <div className="App">
      <Filter goodDogs={goodDogs} onFilter={handleFilter} />
      <DogBar dogs={displayDogs} onClickDog={setSelectedDog} />
      <Dog dogs={selectDog} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
