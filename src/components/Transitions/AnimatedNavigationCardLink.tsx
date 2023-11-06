"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";

const MotionLink = motion(Link);

export const AnimatedNavigationCardLink = ({
  id,
  ...rest
}: ComponentProps<typeof MotionLink> & { id: string }) => {
  const shown = useRef(false);
  const animationControl = useAnimation();
  const delay = useRef(Math.random() * 0.5 + 0.3);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useLayoutEffect(() => {
    const animate = async () => {
      if (shown.current) {
        return;
      }
      if (isInView) {
        animationControl.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            delay: delay.current,
          },
        });
      }
    };

    animate();
  }, [isInView]);
  return (
    <MotionLink
      {...rest}
      ref={ref}
      animate={animationControl}
      initial={{ opacity: 0, y: 10 }}
    />
  );
};
