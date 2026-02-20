import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the window whenever the path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" prevents the jarring visual of scrolling rapidly up the page
    });
  }, [pathname]);

  return null;
}
