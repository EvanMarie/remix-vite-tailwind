import { motion } from "framer-motion";

interface AnimatedInPlaceTextProps {
  text: string;
  containerClassName?: string;
  textClassName?: string;
  isWave?: boolean;
  isScale?: boolean;
  textSize?: string;
  textColor?: string;
  textShadow?: string;
  textSpacing?: string;
  letterDelay?: number;
  waveSize?: number;
  scaleSize?: number;
  fontStyle?: string;
  damping?: number;
  stiffness?: number;
}

export default function AnimatedInPlaceText({
  text,
  containerClassName,
  isWave,
  isScale,
  textSize = "text-too-big-normal",
  textColor = "text-col-100",
  textShadow = "textShadow",
  textSpacing = "tracking-wider",
  fontStyle = "font-cursive",
  letterDelay = 0.08,
  waveSize = -12,
  scaleSize = 1.4,
  textClassName,
  damping = 3,
  stiffness = 125,
}: AnimatedInPlaceTextProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const child = {
    visible: {
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: damping,
        stiffness: stiffness,
      },
    },
    hover: (i: number) => ({
      y: isWave ? [0, waveSize, 0] : 0,
      scale: isScale ? [1, scaleSize, 1] : 1,
      transition: {
        duration: 0.6,
        delay: i * letterDelay,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      className={`inline-block ${containerClassName}`}
      variants={container}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          custom={index}
          className={`inline-block ${textSize} ${textColor} ${textShadow} ${fontStyle} ${textSpacing} ${textClassName}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
