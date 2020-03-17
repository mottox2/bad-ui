import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ViewPager.module.css'

// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3

const colors: string[] = []

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
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
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const ViewPager: React.FC = (props) => {
  const [[page, direction], setPage] = useState([0, 0])
  const length = Array.isArray(props.children) ? props.children.length : 1

  const paginate = (newDirection: number) => {
    setPage([
      Math.min(Math.max(page + newDirection, 0), length - 1),
      newDirection
    ])
  }

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, info) => {
            console.log(info)
            const { offset, velocity } = info
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              console.log('next', direction)
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              console.log('prev', direction)
              paginate(-1)
            }
          }}
          className={styles.page}
        >
          {props.children[page]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
