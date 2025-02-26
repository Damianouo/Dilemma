import { Link, useLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const User = () => {
  const contests = useLoaderData();
  return (
    <div className="contestList p-4 sm:p-6">
      {contests.map((contest) => (
        <ContestEditWrapper key={contest._id} contest={contest} />
      ))}
    </div>
  );
};

export default User;

export const loader = async ({ params }) => {
  const { userId } = params;

  const response = await fetch(`http://localhost:8080/contest/user/${userId}`);
  if (!response.ok) {
    throw new Response.json({ message: "could not get contests" }, { status: 500 });
  }
  return response;
};

const ContestEditWrapper = ({ contest }) => {
  return (
    <div className="group relative overflow-hidden rounded-md shadow-md shadow-black">
      <ContestThumbnail className="shadow-none" contest={contest} />

      <div className="pointer-events-none absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-8 rounded-md bg-black/20 opacity-0 backdrop-blur-xs transition-all group-hover:pointer-events-auto group-hover:opacity-100">
        <Link className="btn btn-light font-bold" to={`/contests/${contest._id}`}>
          Contest Page
        </Link>
        <Link className="btn btn-dark font-bold" to="edit">
          Edit Contest
        </Link>
      </div>
    </div>
  );
};
