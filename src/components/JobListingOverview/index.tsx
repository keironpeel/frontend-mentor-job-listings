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
    <div className="job-overview-details">
      <div className="top-row">
        <p className="company-name">{company}</p>
        <ul className="job-tags">
          {isNew && <li className="tag tag--new">New!</li>}
          {featured && <li className="tag tag--featured">Featured</li>}
        </ul>
      </div>
      <div>
        <h2 className="position">{position}</h2>
      </div>
      <div className="detail-row">
        <span>{postedAt} ·</span>
        <span> {contract} ·</span>
        <span> {location}</span>
      </div>
    </div>
  );
}

export default JobListingOverview;
