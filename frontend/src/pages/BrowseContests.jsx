/* eslint-disable react/prop-types */
import ContestThumbnail from "../components/contest/ContestThumbnail";
import { json, useRouteLoaderData } from "react-router-dom";

const BrowseContests = () => {
  const data = useRouteLoaderData("contests");
  return (
    <div className="p-6 text-primary-300">
      <AllContests>
        {data.map((contest) => (
          <ContestThumbnail key={contest._id} contest={contest} />
        ))}
      </AllContests>
    </div>
  );
};

export default BrowseContests;

const AllContests = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};

export async function loader() {
  console.log("contests loader runs");
  const response = await fetch("http://localhost:8080/contest");
  if (!response.ok) {
    throw json({ message: "Could not fetch contests" }, { status: 500 });
  }
  return response;
}
