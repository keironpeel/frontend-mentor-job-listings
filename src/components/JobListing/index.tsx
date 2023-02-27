import JobListingOverview from "../JobListingOverview";
import JobListingTags from "../JobListingTags";
import "./JobListing.css";

interface JobListingProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
}

function JobListing(props: JobListingProps) {
  const jobListingClasses = props.featured
    ? "job-listing job-listing--featured"
    : "job-listing";

  return (
    <article className={jobListingClasses}>
      <div className="job-overview">
        <div>
          <img src={props.logo} alt={props.company} />
        </div>
        <JobListingOverview
          company={props.company}
          isNew={props.new}
          featured={props.featured}
          position={props.position}
          postedAt={props.postedAt}
          contract={props.contract}
          location={props.location}
        />
      </div>
      <JobListingTags
        level={props.level}
        role={props.role}
        languages={props.languages}
        tools={props.tools}
      />
    </article>
  );
}

export default JobListing;
