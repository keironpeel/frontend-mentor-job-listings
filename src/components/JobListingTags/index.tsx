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
        <JobListingTag title={role} addTag={true} />
        <JobListingTag title={level} addTag={true} />
        {languages.map((language, index) => (
          <JobListingTag key={index} title={language} addTag={true} />
        ))}
        {tools.map((tool, index) => (
          <JobListingTag key={index} title={tool} addTag={true} />
        ))}
      </ul>
    </div>
  );
}

export default JobListingTags;
