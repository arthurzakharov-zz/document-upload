import { useState, useEffect, PropsWithChildren } from "react";
import AnimateHeight from "react-animate-height";

export interface CollapseProps {
  opened: boolean;
  duration?: number;
}

function Collapse(props: PropsWithChildren<CollapseProps>) {
  const { opened, children, duration = 300 } = props;

  const [height, setHeight] = useState<string | number>(0);

  useEffect(() => {
    setHeight(opened ? "auto" : 0);
  }, [opened]);

  return (
    <AnimateHeight
      duration={duration}
      delay={duration / 2}
      animateOpacity
      easing="cubic-bezier(0.4, 0, 0.2, 1)"
      height={height}
    >
      {children}
    </AnimateHeight>
  );
}

export default Collapse;
