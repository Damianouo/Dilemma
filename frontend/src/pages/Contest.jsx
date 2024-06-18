/* eslint-disable react/prop-types */
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import ContestInfoPage from "../components/contest/ContestInfoPage";
import ContestCompetePage from "../components/contest/ContestCompetePage.";
import { useContext, useRef } from "react";
import { ConfigCtx } from "../contexts/ConfigCtx";
import { ContentCtx } from "../contexts/ContentCtx";
import ContestResultPage from "../components/contest/ContestResultPage";

const Contest = () => {
  const contestData = useRouteLoaderData("contests");
  const { config } = useContext(ConfigCtx);
  // get contest information through id
  const { contestId } = useParams();
  const contestObj = contestData.find((element) => element._id === contestId);
  const contentRef = useRef(contestObj);
  const competeResult = useRef([]);

  return (
    <div className=" h-full py-6 text-white">
      {contestObj ? (
        <ContentCtx.Provider value={contentRef.current}>
          <h2 className="mx-auto  max-w-[80%] text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            {contentRef.current.title}
          </h2>

          {config.phase === "info" && <ContestInfoPage />}
          {config.phase === "compete" && (
            <ContestCompetePage competeResult={competeResult} />
          )}
          {config.phase === "result" && (
            <ContestResultPage competeResult={competeResult} />
          )}
        </ContentCtx.Provider>
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
