import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ViewPager.module.css";

// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface PagerProps {
  current: number;
  length: number;
  direction: number;
  paginate: (direction: number) => void;
}

type PagerState = [number, number];

export const usePager = (length: number, initialPage = 0): PagerProps => {
  const [[current, direction], setPage] = useState<PagerState>([
    initialPage,
    0
  ]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([
        Math.min(Math.max(current + newDirection, 0), length - 1),
        newDirection
      ]);
    },
    [current, length]
  );

  return { length, current, direction, paginate };
};

export const ViewPager: React.FC<PagerProps> = ({
  current,
  direction,
  paginate,
  children
}) => {
  return (
    <div className={styles.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          // drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, info) => {
            console.log(info);
            const { offset, velocity } = info;
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              console.log("next", direction);
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              console.log("prev", direction);
              paginate(-1);
            }
          }}
          className={styles.page}
        >
          {children[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
