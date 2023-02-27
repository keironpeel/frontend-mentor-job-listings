import useFilterTagsStore from "../../store/filterTags";
import "./Filter.css";

function Filter() {
  const filterTags = useFilterTagsStore((state) => state.filterTags);
  const clearFilterTags = useFilterTagsStore((state) => state.clearFilterTags);

  return (
    <div className="filter">
      <div className="filter__tags">
        <ul>
          {filterTags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="filter__actions">
        <button onClick={clearFilterTags}>Clear</button>
      </div>
    </div>
  );
}

export default Filter;
