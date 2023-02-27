import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import JobListing from "./components/JobListing";
import data from "./data.json";
import useFilterTagsStore from "./store/filterTags";

function App() {
  const [listings, setListings] = useState(data);
  const filterTags = useFilterTagsStore((state) => state.filterTags);

  return (
    <div className="app">
      {filterTags.length > 0 && <Filter />}
      <div className="listings">
        {listings.map((listing) => (
          <JobListing key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}

export default App;
