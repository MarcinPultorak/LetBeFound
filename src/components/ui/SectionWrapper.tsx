import { FC, HTMLAttributes } from "react";
import cx from "classnames";

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionWrapper: FC<HTMLAttributes<HTMLDivElement> & Props> = ({
  id,
  children,
  ...props
}) => {
  return (
    <div {...props} id={id} className={cx("pt-20 -mt-20", props.className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
