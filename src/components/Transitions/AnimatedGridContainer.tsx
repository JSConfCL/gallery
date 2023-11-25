"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const AnimatedGridContainer = ({ className, children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className={
          className
            ? className
            : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
        variants={{
          enter: {
            transition: {
              staggerChildren: 1,
              delayChildren: 1,
            },
          },
          exit: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
