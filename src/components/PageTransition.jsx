import { motion } from 'framer-motion';
import { Children } from 'react';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const childVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const PageTransition = ({ children }) => {
  const items = Children.toArray(children);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PageTransition;
