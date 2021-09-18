function Filter({ onFilter = (f) => f, isFiltered = false }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={() => onFilter((filtered) => !filtered)}>
        Filter good dogs: {isFiltered ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Filter;
