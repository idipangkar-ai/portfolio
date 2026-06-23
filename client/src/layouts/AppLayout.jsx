import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const MotionMain = motion.main;

export default function AppLayout() {
  const location = useLocation();
  const reduced = usePrefersReducedMotion();

  return (
    <div className="app-shell">
      <Header />
      <AnimatePresence mode="wait">
        <MotionMain
          key={location.pathname}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </MotionMain>
      </AnimatePresence>
      <Footer />
      <div className="noise" aria-hidden="true" />
    </div>
  );
}
