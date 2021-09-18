import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(setDogs)
  }, []);

  function updateDog(updatingDog) {
    setDogs(dogs => dogs.map(dog => dog.id === updatingDog.id ? updatingDog : dog))
  }

  const displayDogs = dogs.filter(dog => isFiltered ? dog.isGoodDog === true : true)
  const isDogSelected = selectedDogId !== 0;
  const selectedDog = dogs.find(dog => dog.id === selectedDogId);

  return (
    <div className="App">
      <Filter onFilter={setIsFiltered} isFiltered={isFiltered} />
      <DogBar dogs={displayDogs} onDogSelect={setSelectedDogId} />
      {isDogSelected && <DogSummary selectedDog={selectedDog} updateDog={updateDog} />}
    </div>
  );
}

export default App;
