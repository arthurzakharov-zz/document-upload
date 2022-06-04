import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useWindowSize from "../../hooks/useWindowSize";
import "./tooltip.css";

export interface TooltipProps {
  content: string;
}

type HorizontalPositionType = {
  left?: string;
};

type VerticalPositionType = {
  top?: string;
  bottom?: string;
};

type PointerPositionType = {
  left?: string;
  top?: string;
  bottom?: string;
};

function Tooltip(props: PropsWithChildren<TooltipProps>) {
  const { content, children } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [horizontalPosition, setHorizontalPosition] = useState<HorizontalPositionType>({});
  const [verticalPosition, setVerticalPosition] = useState<VerticalPositionType>({});
  const [pointerPosition, setPointerPosition] = useState<PointerPositionType>({});

  const tooltipRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowSize();

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (tooltipRef.current && tooltipRef.current.contains(e.target as Node)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  useEffect(() => {
    const CORRECTION = 25;
    const VERTICAL_GAP = 1.5;
    const childInfo = childRef.current && childRef.current.getBoundingClientRect();
    const modalInfo = modalRef.current && modalRef.current.getBoundingClientRect();
    const pointerInfo = pointerRef.current && pointerRef.current.getBoundingClientRect();
    const documentWidth = width || 0;
    const modalWidth = modalInfo ? modalInfo.width : 0;
    const modalHeight = modalInfo ? modalInfo.height : 0;
    const pointerHeight = pointerInfo ? pointerInfo.height : 0;
    const childToTop = childInfo ? childInfo.top : 0;
    const childToRight = childInfo ? documentWidth - childInfo.right : 0;
    const childToLeft = childInfo ? childInfo.left : 0;
    const childWidth = childInfo ? childInfo.width : 0;
    const childHeight = childInfo ? childInfo.height : 0;
    const needsTopCorrection = modalHeight + childHeight * VERTICAL_GAP > childToTop;
    const needsLeftCorrection = modalWidth < childToRight + childWidth;
    const leftCorrection = needsLeftCorrection ? CORRECTION : modalWidth - (documentWidth - childToLeft) + CORRECTION;
    if (isVisible) {
      setHorizontalPosition({ left: `-${Math.ceil(leftCorrection)}px` });
      setVerticalPosition(
        needsTopCorrection ? { top: `${VERTICAL_GAP * 100}%` } : { bottom: `${VERTICAL_GAP * 100}%` },
      );
      setPointerPosition(
        needsTopCorrection
          ? {
              bottom: `calc(100% - ${pointerHeight / 2}px)`,
              left: `${Math.ceil(leftCorrection) - CORRECTION + childWidth + 7}px`,
            }
          : {
              top: `calc(100% - ${pointerHeight / 2}px)`,
              left: `${Math.ceil(leftCorrection) - CORRECTION + childWidth + 7}px`,
            },
      );
    }
  }, [width, isVisible]);

  const onExit = () => {
    setHorizontalPosition({});
    setVerticalPosition({});
    setPointerPosition({});
  };

  const makeTooltipVisible = () => {
    setIsVisible(true);
  };

  const makeTooltipHidden = () => {
    setIsVisible(false);
  };

  return (
    <div
      ref={tooltipRef}
      className="tooltip"
      onFocus={makeTooltipVisible}
      onBlur={makeTooltipHidden}
      onMouseEnter={makeTooltipVisible}
      onMouseLeave={makeTooltipHidden}
    >
      <CSSTransition
        in={isVisible}
        timeout={300}
        nodeRef={modalRef}
        classNames="tooltip__modal"
        onExited={onExit}
        unmountOnExit
      >
        <div ref={modalRef} className="tooltip__modal" style={{ ...horizontalPosition, ...verticalPosition }}>
          <div className="tooltip__content" dangerouslySetInnerHTML={{ __html: content }} />
          <div ref={pointerRef} className="tooltip__pointer" style={{ ...pointerPosition }} />
        </div>
      </CSSTransition>
      <div ref={childRef} className="tooltip__child">
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
