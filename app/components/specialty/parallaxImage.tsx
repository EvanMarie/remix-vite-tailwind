import { Variants, motion } from "framer-motion";
import Flex from "../buildingBlocks/flex";

export default function ParallaxImage({
  dimensions = "w-[50vh] h-[50vh]",
  bgImage = "/images/rain.jpg",
  bgPosition = "center",
  bgSize,
  className,
  isAnimated = false,
  yValues = [0, -20, -40, -20, 0], // More intermediate steps for smooth transition
  duration = 20, // Consistent duration
}: {
  dimensions?: string;
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  className?: string;
  isAnimated?: boolean;
  yValues?: number[];
  duration?: number;
}) {
  const animationVariants = {
    move: {
      y: yValues,
      transition: {
        duration: duration,
        ease: "linear", // Changed to linear for consistent speed
        repeat: Infinity,
        repeatType: "reverse", // Changed to loop for continuous flow
      },
    },
  };

  return (
    <Flex className="relative" style={{ willChange: "transform" }}>
      {" "}
      {/* Performance optimization */}
      <motion.div
        className={`${dimensions} border-970-md overflow-y-scroll ${bgImage} bg-cover bg-no-repeat shadowWideLoose ${className}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: bgPosition,
          backgroundSize: bgSize,
        }}
        variants={isAnimated ? (animationVariants as Variants) : undefined}
        animate="move"
      ></motion.div>
    </Flex>
  );
}
