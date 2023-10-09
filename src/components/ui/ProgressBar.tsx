import { animate, motion } from "framer-motion";
import { FC } from "react";

export type Props = {
  questionsAmount: number;
  currentQuestion: number;
};

const ProgressBar: FC<Props> = ({ questionsAmount, currentQuestion }) => {
  const calcWidth = currentQuestion >= 1 && currentQuestion <= questionsAmount ? Math.round((currentQuestion / questionsAmount) * 100) : 0;

  return (
    <>
      <div className="w-full h-2 bg-orange-800 absolute top-0 left-0">
        <motion.div animate={{ width: `${calcWidth}%` }} transition={{ duration: 1 }} className="bg-orange-600 h-2" />
      </div>
    </>
  );
};

export default ProgressBar;
