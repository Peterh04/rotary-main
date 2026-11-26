import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** If the URL has a #hash (for example /news#medical-camp), scroll that element into view. */
export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    // Small delay so it runs after the Layout scrolls to the top on page change.
    const timer = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ block: "center" });
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);
}
