// https://github.com/mottox2/react-motion-training/blob/master/src/03-bottomSheet/index.tsx
import { RemoveScroll } from "react-remove-scroll";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BottomSheet.module.css";
import { Portal } from "./Portal";

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const BottomSheet: React.FC<{
  isOpen: boolean;
  requestClose: () => void;
  transition: any;
}> = ({ isOpen, children, requestClose, transition }) => {
  console.log(isOpen);
  return (
    <Portal>
      <RemoveScroll enabled={isOpen}>
        <AnimatePresence initial={true}>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                opacity: { duration: 0.2 },
              }}
              onClick={() => requestClose()}
              key="overlay"
              className={styles.overlay}
            />
          )}
          {isOpen && (
            <motion.div
              key="sheet"
              drag="y"
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                height: transition,
                opacity: { duration: 0.2 },
              }}
              onDragEnd={(e, info) => {
                const { offset, velocity } = info;
                const swipe = swipePower(offset.y, velocity.y);
                console.log(swipe);
                if ((offset.y > 0 && swipe > 10000) || swipe > 50000) {
                  requestClose();
                }
              }}
              className={styles.container}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </RemoveScroll>
    </Portal>
  );
};
