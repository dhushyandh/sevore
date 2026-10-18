import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position to top on every route change. */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};
