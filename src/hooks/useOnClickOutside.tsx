import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  exceptionRef?: RefObject<T>
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const exceptionEl = exceptionRef?.current;
      if (!el || el.contains(event.target as Node) || (exceptionEl && exceptionEl.contains(event.target as Node))) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, handler, exceptionRef]);
};

export { useOnClickOutside };
