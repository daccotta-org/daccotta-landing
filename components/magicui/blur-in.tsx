"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 2 }: BlurInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-2xl font-extrabold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]",
        className
      )}
    >
      {word}
    </motion.span>
  );
};

export default BlurIn;
