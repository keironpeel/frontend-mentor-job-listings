import useFilterTagsStore from "../../store/filterTags";
import "./JobListingTag.css";

interface JobListingTagProps {
  title: string;
}

function JobListingTag({ title }: JobListingTagProps) {
  const toggleFilterTag = useFilterTagsStore((state) => state.toggleFilterTag);

  function handleClick() {
    toggleFilterTag(title);
  }

  return (
    <li className="filter-tag" onClick={handleClick}>
      {title}
    </li>
  );
}

export default JobListingTag;
