import { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import type { Height } from "react-animate-height";
import AnimateHeight from "react-animate-height";
import type { CollapsePropsType } from "./collapse.types";

function Collapse(props: PropsWithChildren<CollapsePropsType>) {
  const { opened, children, duration = 300 } = props;

  const [height, setHeight] = useState<Height>(0);

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
