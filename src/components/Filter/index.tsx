import useFilterTagsStore from "../../store/filterTags";
import JobListingTag from "../JobListingTag";
import "./Filter.css";

function Filter() {
  const filterTags = useFilterTagsStore((state) => state.filterTags);
  const clearFilterTags = useFilterTagsStore((state) => state.clearFilterTags);

  return (
    <div className="filter">
      <div className="filter__tags">
        {filterTags.length > 0 ? (
          <ul>
            {filterTags.map((tag, index) => (
              <JobListingTag key={index} title={tag} addTag={false} />
            ))}
          </ul>
        ) : (
          <p>Click on a tag to filter the results.</p>
        )}
      </div>
      <div className="filter__actions">
        <button onClick={clearFilterTags}>Clear</button>
      </div>
    </div>
  );
}

export default Filter;
