function DogBar({ dogs, onDogSelect = (f) => f }) {
  return (
    <div id="dog-bar">
      {dogs.map((dog) => (
        <span key={dog.id} onClick={() => onDogSelect(dog.id)}>
          {dog.name}
        </span>
      ))}
    </div>
  );
}

export default DogBar;
