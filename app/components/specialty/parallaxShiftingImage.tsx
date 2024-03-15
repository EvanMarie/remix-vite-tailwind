/* eslint-disable react/no-unescaped-entities */
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage() {
  const minDuration = 20;
  const maxDuration = 40;
  const minDelay = 0;
  const maxDelay = 10;
  const bgImage = "https://picsum.photos/600/400";
  //   const bgImage = "/images/rain.jpg";
  const numYmovements = 10;
  const minYmovement = -30;
  const maxYmovement = 30;
  const minYmovementTime = 0.5;
  const maxYmovementTIme = 3;
  const imageHeight = "h-[85vh]";
  const bgPositions = ["0%", "20%", "40%", "60%", "80%", "100%"];
  const divisions = bgPositions.length;
  const sectionWidth = ["w-[15vw]"];
  const bgSize = String(100 * divisions) + "% 100%";
  const paddingGap = "p-[0.5vh]";

  const generateRandomValue = (min: number, max: number) => {
    return Math.random() * (max - min) + (min * 10) / 10;
  };

  const generateYvalues = (min: number, max: number) => {
    const yValues = [];
    for (let i = 0; i < numYmovements; i++) {
      yValues.push(generateRandomValue(min, max));
    }
    return yValues;
  };

  return (
    <CenterFull>
      <HStackFull className="justify-center mx-1" gap="gap-[0px]">
        {bgPositions.map((position, index) => (
          <Flex key={index} className={`${paddingGap}`}>
            <ParallaxImage
              duration={generateRandomValue(minDuration, maxDuration)}
              delay={generateRandomValue(minDelay, maxDelay)}
              bgImage={bgImage}
              isAnimated={true}
              dimensions={`${sectionWidth} ${imageHeight}`}
              bgPosition={`${position}`}
              bgSize={bgSize}
              yValues={generateYvalues(minYmovement, maxYmovement)}
            />
          </Flex>
        ))}
      </HStackFull>
    </CenterFull>
  );
}
