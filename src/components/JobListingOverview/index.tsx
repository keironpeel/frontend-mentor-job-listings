import "./JobListingOverview.css";

interface JobListingOverviewProps {
  company: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

function JobListingOverview({
  company,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
}: JobListingOverviewProps) {
  return (
    <div>
      <div className="top-row">
        <p>{company}</p>
        <ul className="job-tags">
          {isNew && <li>New!</li>}
          {featured && <li>Featured</li>}
        </ul>
      </div>
      <div>
        <h2>{position}</h2>
      </div>
      <div>
        <span>{postedAt} ·</span>
        <span> {contract} ·</span>
        <span> {location}</span>
      </div>
    </div>
  );
}

export default JobListingOverview;
