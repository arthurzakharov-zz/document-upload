import { useState, useEffect, useRef, ReactElement } from "react";
import { collapseContent, stylesCollapse } from "./collapse.utils";
import "./collapse.css";

export interface CollapseProps {
  isOpen: boolean;
  children: ReactElement;
}

function Collapse(props: CollapseProps) {
  const { isOpen, children } = props;

  const [contentHeight, setContentHeight] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const getHeight = (el: ChildNode) => {
    const component = el as HTMLElement;
    const { height } = component.getBoundingClientRect();
    return height;
  };

  useEffect(() => {
    if (ref.current) {
      const childrenArray = Array.from(ref.current.childNodes);
      const height = childrenArray.reduce((sum, node) => sum + getHeight(node), 0) - 2;
      setContentHeight(height);
    }
  }, [isOpen]);

  return (
    <div ref={ref} className="collapse" style={{ ...stylesCollapse(isOpen, contentHeight) }}>
      <div className={collapseContent(isOpen)}>{children}</div>
    </div>
  );
}

export default Collapse;
