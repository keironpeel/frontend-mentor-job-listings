import { useState } from "react";
import "./App.css";
import JobListing from "./components/JobListing";
import data from "./data.json";

function App() {
  const [listings, setListings] = useState(data);

  return (
    <div>
      {listings.map((listing) => (
        <JobListing key={listing.id} {...listing} />
      ))}
    </div>
  );
}

export default App;
