import { Link, Navigate, useLoaderData, useRouteLoaderData } from "react-router-dom";
import ContestThumbnail from "../components/contest/ContestThumbnail";

const User = () => {
  const contests = useLoaderData();
  const user = useRouteLoaderData("root");
  return user?.isLogin ? (
    <div className="contestList p-4 sm:p-6">
      {contests &&
        contests?.map((contest) => <ContestEditWrapper key={contest._id} contest={contest} />)}
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
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
