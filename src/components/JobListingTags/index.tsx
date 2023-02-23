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
      <ul>
        <li>{role}</li>
        <li>{level}</li>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobListingTags;
