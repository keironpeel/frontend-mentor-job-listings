import useFilterTagsStore from "../../store/filterTags";
import "./JobListingTag.css";

interface JobListingTagProps {
  title: string;
}

function JobListingTag({ title }: JobListingTagProps) {
  const addFilterTag = useFilterTagsStore((state) => state.addFilterTag);

  function handleClick() {
    addFilterTag(title);
  }

  return (
    <li className="filter-tag" onClick={handleClick}>
      {title}
    </li>
  );
}

export default JobListingTag;
