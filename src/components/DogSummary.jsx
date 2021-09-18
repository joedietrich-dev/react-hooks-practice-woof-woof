function DogSummary({
  selectedDog = {
    id: 0,
    name: "",
    isGoodDog: true,
    image: "",
  },
  updateDog = (f) => f,
}) {
  function handleGoodDogClick() {
    fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isGoodDog: !selectedDog.isGoodDog }),
    })
      .then((res) => res.json())
      .then(updateDog);
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={selectedDog.image} alt={selectedDog.name} />
        <h2>{selectedDog.name}</h2>
        <button onClick={handleGoodDogClick}>{selectedDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
      </div>
    </div>
  );
}

export default DogSummary;
