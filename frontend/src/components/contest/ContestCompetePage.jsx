import ContestItem from "./ContestItem";
import Button from "../UI/Button";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import { useEffect, useRef } from "react";
import { useSubmit } from "react-router-dom";
import MatchHeader from "./MatchHeader";
import CompeteItems from "./CompeteItems";
import { motion, AnimatePresence } from "motion/react";
import { variants } from "./variants";
const ContestCompetePage = () => {
  const submit = useSubmit();
  const { compete, handler } = useCompeteCtx();
  const hasSubmitted = useRef(false);
  useEffect(() => {
    if (compete.finished && !hasSubmitted.current) {
      hasSubmitted.current = true;
      submit(compete.result[compete.result.length - 1].winners[0]._id, {
        method: "PATCH",
        encType: "text/plain",
      });
    }
  }, [compete, submit]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
        key={`${compete.phase}${compete.finished}`}
        className="flex flex-col items-center gap-4 overflow-hidden text-center md:gap-6"
      >
        {compete.finished ? (
          <>
            <h2 className="md:text-2xl">The Winner Gose to :</h2>
            <div className="mx-auto flex flex-col items-center gap-8">
              <ContestItem
                item={compete.result[compete.result.length - 1].winners[0]}
                mode="info"
              />
              <Button onClick={() => handler.changePhase("result")}>
                <span>Show Full Result</span>
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* info, buttons */}
            <MatchHeader />
            {/* compete items */}
            <CompeteItems />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ContestCompetePage;
