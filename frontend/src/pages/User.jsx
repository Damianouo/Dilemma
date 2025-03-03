import { Link, Navigate, useLoaderData, useRouteLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const User = () => {
  const contests = useLoaderData();
  const user = useRouteLoaderData("root");

  if (!user?.isLogin) return <Navigate to="/login" replace={true} />;

  return contests.length > 0 ? (
    <div className="contestList p-4 sm:p-6">
      {contests?.map((contest) => (
        <ContestEditWrapper key={contest._id} contest={contest} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center gap-8 px-6 py-12 sm:py-20">
      <h1 className="text-3xl">No contest created.</h1>
      <Link to="/create" className="btn btn-light text-xl">
        Create One!
      </Link>
    </div>
  );
};

export default User;

const ContestEditWrapper = ({ contest }) => {
  return (
    <div className="group relative max-w-[550px] overflow-hidden rounded-md shadow-md shadow-black">
      <ContestThumbnail className="shadow-none" contest={contest} />

      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-8 rounded-md bg-black/40 transition-all group-hover:pointer-events-auto group-hover:opacity-100 lg:pointer-events-none lg:opacity-0 lg:backdrop-blur-xs">
        <Link className="btn btn-light font-bold" to={`/contests/${contest._id}`}>
          Contest Page
        </Link>
        <Link className="btn btn-dark font-bold" to={`/edit/${contest._id}`}>
          Edit Contest
        </Link>
      </div>
    </div>
  );
};
