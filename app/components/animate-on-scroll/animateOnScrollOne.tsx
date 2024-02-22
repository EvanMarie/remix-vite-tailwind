import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children?: React.ReactNode;
  animationName?: AnimationName;
  duration?: number;
  slideInOffset?: string;
  delay?: number;
}

// Define a type for the animation names
type AnimationName = "slideIn" | "fadeIn";
const AnimatedComponent: React.FC<Props> = ({
  children,
  animationName = "slideIn",
  duration = 1,
  slideInOffset = "50vw",
  delay = 0.4,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animationVariants: Record<AnimationName, Variants> = {
    slideIn: {
      hidden: { x: slideInOffset, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0, // Apply delay only when becoming visible
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0, // Apply delay only when becoming visible
        },
      },
    },
  };

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Select the correct variant based on the animationName prop
  const variants = animationVariants[animationName];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
