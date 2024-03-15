/* eslint-disable react/no-unescaped-entities */
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";

export default function Test() {
  const minDuration = 10;
  const maxDuration = 20;
  const minDelay = 0;
  const maxDelay = 10;
  const gap = 0;
  const divisions = 5;
  const bgImage = "https://picsum.photos/600/400";
  // const bgImage = "/images/rain.jpg";
  const bgPositions = ["0%", "25%", "50%", "75%", "100%"];
  const bgSize = String(100 * divisions) + "% 100%";
  const generateRandomValue = (min: number, max: number) => {
    return Math.random() * (max - min) + (min * 10) / 10;
  };

  return <ParallaxShiftingImage />;
}
