/* eslint-disable react/prop-types */
import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { ChooseSvg } from "../svgs/ContestSvgs";
import { duration } from "./variants";

const CompeteItemBox = ({ children, onClick, leftside }) => {
  const [chose, setChose] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { opacity: 1, x: 0 },
          { delay: duration.borderTotal, duration: 1 },
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        if (chose) {
          await animate(
            "#animatedBorder",
            {
              y: "-100%",
            },
            { duration: duration.borderShow },
          );
          await animate(
            "#animatedBorder",
            {
              opacity: 0,
            },
            { duration: duration.borderDisappear },
          );
        }

        await animate(
          scope.current,
          { opacity: 0, x: leftside ? "-50%" : "50%" },
          { duration: duration.borderTotal },
        );

        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, safeToRemove, animate, scope, chose, leftside]);

  function handleClick() {
    setChose(true);
    onClick();
  }

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, x: leftside ? "-50%" : "50%" }}
      className="relative mx-auto max-w-[550px] flex-1 overflow-hidden rounded-lg p-1"
    >
      {/* border animation */}
      <motion.div
        id="animatedBorder"
        className="absolute left-0 top-full h-full w-full rounded-lg bg-primary-300"
      />
      {/* content */}
      <div className="relative flex flex-col gap-2 rounded-lg bg-primary-900 sm:gap-4">
        {children}
        <p className="text-base">Chat Votes : 10</p>
        <Button
          onClick={handleClick}
          className={`text-center font-bold md:text-lg
            ${isPresent ? "hover:text-primary-300" : ""}`}
          disabled={!isPresent}
        >
          <ChooseSvg />
          <span>WIN</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default CompeteItemBox;
