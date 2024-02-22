import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Animations =
  | "slideInX"
  | "slideInY"
  | "fadeIn"
  | "fadeSlideUpperRight"
  | "fadeSlideUpperLeft"
  | "fadeSlideLowerRight"
  | "fadeSlideLowerLeft";

interface Props {
  children?: React.ReactNode;
  animation?: Animations;
  duration?: number;
  slideInOffsetX?: string;
  slideInOffsetY?: string;
  delay?: number;
  className?: string;
}

const AnimatedComponent: React.FC<Props> = ({
  children,
  animation = "slideInY",
  duration = 1,
  slideInOffsetX = "50vw",
  slideInOffsetY = "25vh",
  delay = 0.4,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animationVariants: Record<Animations, Variants> = {
    slideInX: {
      hidden: { x: slideInOffsetX, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    slideInY: {
      hidden: { y: slideInOffsetY, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    fadeSlideUpperRight: {
      hidden: { x: slideInOffsetX, y: `-${slideInOffsetY}`, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    fadeSlideUpperLeft: {
      hidden: { x: `-${slideInOffsetX}`, y: `-${slideInOffsetY}`, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    fadeSlideLowerRight: {
      hidden: { x: slideInOffsetX, y: slideInOffsetY, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
        },
      },
    },
    fadeSlideLowerLeft: {
      hidden: { x: `-${slideInOffsetX}`, y: slideInOffsetY, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          delay: isVisible ? delay : 0,
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

  const variants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
