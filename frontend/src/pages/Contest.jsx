/* eslint-disable react/prop-types */
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import ContestInfoPage from "../components/contest/ContestInfoPage";
import ContestCompetePage from "../components/contest/ContestCompetePage.";
import ContestResultPage from "../components/contest/ContestResultPage";
import useContestCtx from "../hooks/useContestCtx";
import useCompeteCtx from "../hooks/useCompeteCtx";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "../components/contest/variants";
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
    }
  }, [contestData, setContest]);

  useEffect(() => {
    const data = localStorage.getItem("competeContent");
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData[contestId]) {
        dispatch({ type: "setState", payload: parsedData[contestId] });
      }
    }
  }, [dispatch, contestId]);

  return (
    <div className="mx-auto max-w-[1500px] p-4 text-primary-100 md:p-8">
      {contestData ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
            key={`${compete.phase}container`}
          >
            <h2 className=" mb-6 text-center text-2xl font-bold sm:mb-10 sm:text-3xl md:text-4xl">
              {contestData.title}
            </h2>

            {compete.phase === "info" && <ContestInfoPage />}
            {compete.phase === "compete" && <ContestCompetePage />}
            {compete.phase === "result" && <ContestResultPage />}
          </motion.div>
        </AnimatePresence>
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
