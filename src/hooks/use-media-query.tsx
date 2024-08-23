import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  // Initialize state with default value (false) to avoid accessing window during SSR
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is defined (this will only be true on the client side)
    if (typeof window !== 'undefined') {
      // Create a MediaQueryList object
      const mediaQueryList = window.matchMedia(query);
      // Set the initial state based on the media query
      setMatches(mediaQueryList.matches);

      // Define a listener that updates the state
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Add the listener to the MediaQueryList
      mediaQueryList.addEventListener("change", listener);

      // Clean up the event listener on component unmount
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
}

export { useMediaQuery };
