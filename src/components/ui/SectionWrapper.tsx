import { FC } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionWrapper: FC<Props> = ({ id, children }) => {
  return (
    <div id={id} className="pt-20 -mt-20">
      {children}
    </div>
  );
};

export default SectionWrapper;
