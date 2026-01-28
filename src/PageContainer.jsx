import { motion } from "framer-motion";

// Cinematic page entrance variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    y: 60,
    rotateX: 8
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    y: -60,
    rotateX: -8
  }
};

// Premium easing curves
const pageTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1], // Custom easeOutExpo
  duration: 1.2,
  delay: 0.2
};

// Staggered container for cinematic reveals
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  }
};

// Enhanced stagger items with multiple variants
const staggerItem = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    rotateX: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.9
    }
  }
};

// Hero element variant for dramatic entrances
const heroVariant = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotateX: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 1.0,
      delay: 0.3
    }
  }
};

// Card/section variant for smooth reveals
const cardVariant = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateY: 5
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.8
    }
  }
};

export default function PageContainer({ children, className = "" }) {
  return (
    <motion.div
      className={`${className} perspective-1000 relative z-10`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export { staggerItem, staggerContainer, heroVariant, cardVariant };