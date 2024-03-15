import { motion } from "framer-motion";

import Flex from "../buildingBlocks/flex";

export default function ParallaxImage({
  dimensions = "w-[50vh] h-[50vh]",
  bgImage = "/images/rain.jpg",
  bgPosition = "center",
  bgFit = "bg-cover",
  bgSize,
  bgAttachment = "bg-fixed",
  className,
  isAnimated = false,
  yValues = [0, -40, 0],
  duration = 20,
  delay = 0,
  timeValues = [0, 0.5, 1],
}: {
  dimensions?: string;
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  bgAttachment?: string;
  bgFit?: string;
  className?: string;
  isAnimated?: boolean;
  yValues?: number[];
  timeValues?: number[];
  duration?: number;
  delay?: number;
}) {
  const animationVariants = {
    move: {
      delay: "",
      y: yValues,
      transition: {
        duration: duration,
        ease: "easeInOut",
        times: timeValues,
        repeat: Infinity,
        delay: delay,
      },
    },
  };

  return (
    <Flex className="relative">
      <motion.div
        className={`${dimensions} border-970-md overflow-y-scroll ${bgAttachment} ${bgImage} ${bgFit} bg-no-repeat shadowWideLoose ${className}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: bgPosition,
          backgroundSize: bgSize,
        }}
        variants={isAnimated ? animationVariants : undefined}
        animate="move"
      ></motion.div>
    </Flex>
  );
}
