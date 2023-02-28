import useFilterTagsStore from "../../store/filterTags";
import "./JobListingTag.css";

interface JobListingTagProps {
  title: string;
  addTag: boolean;
}

function JobListingTag({ title, addTag }: JobListingTagProps) {
  const addFilterTag = useFilterTagsStore((state) => state.addFilterTag);
  const removeFilterTag = useFilterTagsStore((state) => state.removeFilterTag);

  function addClickedTag() {
    addFilterTag(title);
  }

  function removeClickedTag() {
    removeFilterTag(title);
  }

  return (
    <li
      className={addTag ? "filter-tag filter-tag--add" : "filter-tag"}
      onClick={addTag ? addClickedTag : removeClickedTag}
    >
      {title}
      {!addTag && <span className="filter-tag__close-btn">X</span>}
    </li>
  );
}

export default JobListingTag;
