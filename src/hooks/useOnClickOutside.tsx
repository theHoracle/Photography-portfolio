import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listner = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event.target as Node) || null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchend", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchend", listner);
    };
  }, [ref, handler]);
};

export { useOnClickOutside };
