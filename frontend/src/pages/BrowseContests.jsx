/* eslint-disable react/prop-types */
import ContestThumbnail from "../components/ContestThumbnail";
import { json, useLoaderData } from "react-router-dom";

const BrowseContests = () => {
  const data = useLoaderData();
  return (
    <div className="padding">
      <AllContests>
        {data.map((contest) => (
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

export async function loader() {
  const response = await fetch("http://localhost:8080/contest");
  if (!response.ok) {
    throw json({ message: "Could not fetch contests" }, { status: 500 });
  }
  return response;
}
