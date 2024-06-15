/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ContestThumbnail from "../components/ContestThumbnail";

const BrowseContests = () => {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8080/contest/");
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="padding">
      <AllContests>
        {fetchData.length > 0 &&
          fetchData?.map((contest) => (
            <ContestThumbnail key={contest._id} contestContents={contest} />
          ))}
      </AllContests>
    </div>
  );
};

export default BrowseContests;

const AllContests = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};
