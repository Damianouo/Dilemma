import { motion, AnimatePresence, useIsPresent } from "motion/react";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import { duration, variants } from "./variants";
import Button from "../UI/Button";
import RefreshSvg from "../svgs/RefreshSvg";
import XmarkSvg from "../svgs/XmarkSvg";

const MatchHeader = () => {
  const { compete } = useCompeteCtx();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${compete.participantsNum}${compete.match}header`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ delay: duration.borderTotal }}
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-lg md:text-2xl">
          Round of {compete.participantsNum} : Match {compete.match}
        </h2>
        <CompeteBtns />
      </motion.div>
    </AnimatePresence>
  );
};

export default MatchHeader;

const CompeteBtns = () => {
  const { compete, handler } = useCompeteCtx();
  const competeItemIndex = (compete.match - 1) * 2;
  const isPresent = useIsPresent();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() => handler.changeOpponent(competeItemIndex)}
        className="hover:bg-primary-800 bg-transparent p-1 shadow-none"
        disabled={!isPresent}
      >
        <RefreshSvg />
      </Button>
      <Button
        onClick={handler.endCompeting}
        className="hover:bg-primary-800 bg-transparent p-1 shadow-none"
        disabled={!isPresent}
      >
        <XmarkSvg />
      </Button>
    </div>
  );
};
