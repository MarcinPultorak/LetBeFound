import { animate, motion } from "framer-motion";
import { FC } from "react";

export type Props = {
  questionsCount: number;
  currentQuestion: number;
};

const ProgressBar: FC<Props> = ({ questionsCount, currentQuestion }) => {
  const calcWidth =
    currentQuestion >= 1 && currentQuestion <= questionsCount
      ? Math.round((currentQuestion / questionsCount) * 100)
      : 0;

  return (
    <>
      <div className="w-full h-2 bg-orange-800 absolute top-0 left-0 -translate-y-1">
        <motion.div
          animate={{ width: `${calcWidth}%` }}
          transition={{ duration: 1 }}
          className="bg-orange-600 h-2"
        ></motion.div>
      </div>
    </>
  );
};

export default ProgressBar;
