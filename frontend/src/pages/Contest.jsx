/* eslint-disable react/prop-types */
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import ContestInfoPage from "../components/contest/ContestInfoPage";
import ContestCompetePage from "../components/contest/ContestCompetePage.";
import ContestResultPage from "../components/contest/ContestResultPage";
import useContestCtx from "../hooks/useContestCtx";
import useCompeteCtx from "../hooks/useCompeteCtx";
import { useEffect } from "react";

const Contest = () => {
  const { compete, dispatch } = useCompeteCtx();
  const { setContest } = useContestCtx();

  // get contest information through id
  const data = useRouteLoaderData("contests");
  const { contestId } = useParams();
  const contestData = data.find((element) => element._id === contestId);

  useEffect(() => {
    if (contestData) {
      setContest(contestData);
      dispatch({
        type: "changeParticipants",
        payload: contestData.totalParticipants,
      });
    }
  }, [contestData, setContest, dispatch]);

  useEffect(() => {
    const data = localStorage.getItem("competeContent");
    if (data) {
      dispatch({ type: "setState", payload: JSON.parse(data) });
    }
  }, [dispatch]);

  return (
    <div className=" mx-auto h-full max-w-[1000px] px-12 py-6 text-white">
      {contestData ? (
        <>
          <h2 className="my-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            {contestData.title}
          </h2>

          {compete.phase === "info" && <ContestInfoPage />}
          {compete.phase === "compete" && <ContestCompetePage />}
          {compete.phase === "result" && <ContestResultPage />}
        </>
      ) : (
        // no contest found
        <div className="flex flex-col items-start gap-4 p-20">
          <p>Can not find contest, please check contest id.</p>
          <Link to="/contests" className="rounded-lg bg-primary-200 p-2">
            Browse all Contests
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contest;
