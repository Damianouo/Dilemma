import { Link, useRouteLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const BrowseContests = () => {
  return (
    <div className="p-4 sm:p-6">
      <ContestList />
    </div>
  );
};

export default BrowseContests;

const ContestList = () => {
  const contests = useRouteLoaderData("contests");
  return (
    <div className="contestList">
      {contests.map((contest) => (
        <Link className="flex max-w-[550px]" key={contest._id} to={`/contests/${contest._id}`}>
          <ContestThumbnail contest={contest} />
        </Link>
      ))}
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
