import { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { StoryPage } from "./pages/StoryPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

/** Handles ?section=reserve deep links from other pages → scrolls on Home. */
const useSectionDeepLink = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") return;
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;
    // wait for layout
    const id = window.setTimeout(() => {
      const el = document.querySelector(`#${section}`);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [location]);
};

const AnimatedRoutes = () => {
  const location = useLocation();
  useSectionDeepLink();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};
