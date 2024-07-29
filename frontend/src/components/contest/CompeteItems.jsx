import { motion, AnimatePresence } from "framer-motion";

import { duration, variants } from "./variants";
import useCompeteCtx from "../../hooks/useCompeteCtx";
import CompeteItemBox from "./CompeteItemBox";
import ContestItem from "./ContestItem";

const CompeteItems = () => {
  const { compete, handler } = useCompeteCtx();
  const competeItemIndex = (compete.match - 1) * 2;
  const competeItem1 = compete.entries[competeItemIndex];
  const competeItem2 = compete.entries[competeItemIndex + 1];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ delay: duration.borderTotal }}
        key={`${compete.participantsNum}${compete.match}competeItems`}
        className="block w-full items-stretch justify-between gap-4 md:flex xl:gap-8 "
      >
        <CompeteItemBox
          leftside
          onClick={() => handler.chooseWinner(competeItem1, competeItem2)}
        >
          <ContestItem item={competeItem1} mode="compete" />
        </CompeteItemBox>

        <p className="my-4 self-center text-2xl md:my-0 xl:text-4xl">VS</p>

        <CompeteItemBox
          leftside={false}
          onClick={() => handler.chooseWinner(competeItem2, competeItem1)}
        >
          <ContestItem item={competeItem2} mode="compete" />
        </CompeteItemBox>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompeteItems;
