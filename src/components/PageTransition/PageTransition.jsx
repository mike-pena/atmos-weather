import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
    width: "100%",
    minHeight: "100%",
  }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;