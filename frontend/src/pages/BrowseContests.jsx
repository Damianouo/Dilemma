/* eslint-disable react/prop-types */
import ContestThumbnail from "../components/contest/ContestThumbnail";
import { json, useRouteLoaderData } from "react-router-dom";

const BrowseContests = () => {
  const data = useRouteLoaderData("contests");
  return (
    <div className="p-4 text-primary-100 sm:p-6">
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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 sm:gap-6">
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
