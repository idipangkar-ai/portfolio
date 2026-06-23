import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as = "div", delay = 0, className = "", children }) {
  const Component = motion[as] ?? motion.div;
  const motionProps = useReveal(delay);

  return (
    <Component className={className} {...motionProps}>
      {children}
    </Component>
  );
}

