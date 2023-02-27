import JobListingTag from "../JobListingTag";
import "./JobListingTags.css";

interface JobListingTagsProps {
  role: string;
  level: string;
  languages: Array<string>;
  tools: Array<string>;
}

function JobListingTags({
  role,
  level,
  languages,
  tools,
}: JobListingTagsProps) {
  return (
    <div>
      <ul className="filter-tags">
        <JobListingTag title={role} />
        <JobListingTag title={level} />
        {languages.map((language, index) => (
          <JobListingTag key={index} title={language} />
        ))}
        {tools.map((tool, index) => (
          <JobListingTag key={index} title={tool} />
        ))}
      </ul>
    </div>
  );
}

export default JobListingTags;
