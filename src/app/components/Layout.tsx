import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100] animate-gradient-x"
        style={{ scaleX }}
      />
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
      <ScrollToTop />
      <Navbar />
      <main className={cn("min-h-screen", isHome ? "pt-0" : "pt-20")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
