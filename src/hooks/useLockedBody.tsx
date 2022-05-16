import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from "react";

type UseLockedBody = (
  initialLocked?: boolean,
  documentId?: string,
) => {
  locked: boolean;
  setLocked: Dispatch<SetStateAction<boolean>>;
};

const useLockedBody: UseLockedBody = (initialLocked: boolean = false, documentId: string = "root") => {
  const [locked, setLocked] = useState<boolean>(initialLocked);

  useLayoutEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    const root = document.getElementById(documentId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // eslint-disable-next-line consistent-return
    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked, documentId]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked, locked]);

  return { locked, setLocked };
};

export default useLockedBody;
