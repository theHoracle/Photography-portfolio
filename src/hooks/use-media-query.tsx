import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  // Initialize state to store whether the media query matches
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    // Create a MediaQueryList object
    const mediaQueryList = window.matchMedia(query);

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
  }, [query]);

  return matches;
}

export { useMediaQuery };
