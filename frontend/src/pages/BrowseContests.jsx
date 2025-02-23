import { useRouteLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const BrowseContests = () => {
  const data = useRouteLoaderData("contests");
  return (
    <div className="text-primary-100 p-4 sm:p-6">
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
    throw new Response.json({ message: "Could not fetch contests" }, { status: 500 });
  }
  return response;
}
