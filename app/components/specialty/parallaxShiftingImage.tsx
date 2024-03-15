/* eslint-disable react/no-unescaped-entities */
import Box from "~/components/buildingBlocks/box";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

interface ParallaxShiftingImageProps {
  bgImage: string;
  numBoxes: number;
  minBounceHeight: number;
  maxBounceHeight: number;
  minDelay: number;
  maxDelay: number;
  minDuration: number;
  maxDuration: number;
  width?: string;
  height?: string;
}

export default function ParallaxShiftingImage({
  bgImage,
  numBoxes = 4,
  minBounceHeight,
  maxBounceHeight,
  minDelay,
  maxDelay,
  minDuration = 5,
  maxDuration = 10,
  width = "w-[20vw]",
  height = "h-[80vh]",
}: ParallaxShiftingImageProps) {
  const generateRandomValue = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < numBoxes; i++) {
      const bounceHeight = generateRandomValue(
        minBounceHeight,
        maxBounceHeight
      );
      const delay = generateRandomValue(minDelay, maxDelay);
      const duration = generateRandomValue(minDuration, maxDuration);

      boxes.push(
        <Box
          key={i}
          className={`animate-bounce`}
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            transform: `translateY(${bounceHeight}rem)`,
          }}
        >
          <ParallaxImage bgImage={bgImage} dimensions={`${width} ${height}`} />
        </Box>
      );
    }
    return boxes;
  };

  return <HStackFull className="justify-center">{renderBoxes()}</HStackFull>;
}
