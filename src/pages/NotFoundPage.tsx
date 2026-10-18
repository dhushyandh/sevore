import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";

export const NotFoundPage = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center text-center container-px">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-serif text-7xl text-amber"
    >
      404
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-4 font-serif text-2xl text-espresso"
    >
      This table isn't set
    </motion.p>
    <p className="mt-2 text-sm text-muted-dark max-w-sm">
      The page you're looking for isn't on the menu. Let's get you back to the
      dining room.
    </p>
    <Link
      to="/"
      className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-espresso hover:bg-amber-soft transition-colors"
    >
      <HomeIcon size={16} /> Back to home
    </Link>
  </section>
);
