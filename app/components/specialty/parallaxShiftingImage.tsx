/* eslint-disable react/no-unescaped-entities */
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage() {
  const duration = 60;
  const bgImage = "https://picsum.photos/600/400";
  const minNumYmovements = 10;
  const maxNumYmovements = 20;
  const minYmovement = -50;
  const maxYmovement = 50;
  const imageHeight = "h-[85vh]";
  //   const bgPositions = ["0%", "20%", "40%", "60%", "80%", "100%"];
  const bgPositions = [
    "0%",
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
  ];
  const divisions = bgPositions.length;
  const sectionWidthCalc = (100 - 10) / divisions;
  const roundedSectionWidthCalc = Math.round(sectionWidthCalc);
  const sectionWidthString = String(roundedSectionWidthCalc);
  const sectionWidth = "w-[" + sectionWidthString + "vw]";
  console.log("divisions: ", divisions);
  console.log("sectionWidthCalc: ", sectionWidthCalc);
  console.log("sectionWidthString: ", sectionWidthString);
  console.log("sectionWidth for Tailwind: ", sectionWidth);

  const bgSize = String(100 * divisions) + "% 100%";
  const paddingGap = "p-[0.5vh]";

  const generateRandomValue = (min: number, max: number) => {
    return Math.random() * (max - min) + (min * 10) / 10;
  };
  const numYmovements = generateRandomValue(minNumYmovements, maxNumYmovements);

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
              duration={duration}
              //   delay={generateRandomValue(minDelay, maxDelay)}
              bgImage={bgImage}
              isAnimated={true}
              dimensions={`${sectionWidth} ${imageHeight}`}
              bgPosition={`${position}`}
              bgSize={bgSize}
              yValues={generateYvalues(minYmovement, maxYmovement)}
              //   timeValues={generateYvalues(minYmovementTime, maxYmovementTime)}
            />
          </Flex>
        ))}
      </HStackFull>
    </CenterFull>
  );
}
