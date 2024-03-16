/* eslint-disable react/no-unescaped-entities */
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage({
  animationCycleDuration = 20,
  bgImageLink,
  numDivisions = 8,
  imageHeight = "h-[75vh]",
  minNumYmovements = 10,
  maxNumYmovements = 20,
  minYdistance = -50,
  maxYdistance = 50,
  paddingGap = "p-[0.5vh]",
}: {
  bgImageLink: string;
  animationCycleDuration?: number;
  imageHeight?: string;
  numDivisions?: number;
  minYdistance?: number;
  maxYdistance?: number;
  minNumYmovements?: number;
  maxNumYmovements?: number;
  paddingGap?: string;
}) {
  // const [viewportWidth, setViewportWidth] = useState(0);
  // const [bgImageLink, setBgImageLink] = useState("");

  // useEffect(() => {
  //   const width = GetViewportWidth();
  //   setViewportWidth(width);
  //   const [linkHeight, linkWidth] = getHeightWidth(width);
  //   setBgImageLink(`${baseImageLink}/${linkWidth}/${linkHeight}`);
  // }, [baseImageLink, viewportWidth]);

  // const getHeightWidth = (viewportWidth: number) => {
  //   let linkWidth = "1000"; // Default values for server-side rendering
  //   let linkHeight = "500";
  //   if (viewportWidth < 600) {
  //     linkHeight = "500";
  //     linkWidth = "300";
  //   } else if (viewportWidth < 800) {
  //     linkHeight = "500";
  //     linkWidth = "500";
  //   } else if (viewportWidth < 1080) {
  //     linkHeight = "500";
  //     linkWidth = "700";
  //   } else if (viewportWidth < 1500) {
  //     linkHeight = "500";
  //     linkWidth = "900";
  //   }
  //   return [linkHeight, linkWidth];
  // };

  // Generate background positions based on the number of divisions
  const bgPositions = Array.from(
    { length: numDivisions },
    (_, index) => `${Math.floor((index / (numDivisions - 1)) * 100)}%`
  );
  const divisions = bgPositions.length;
  const sectionWidthCalc = (100 - 10) / divisions;
  const roundedSectionWidthCalc = Math.round(sectionWidthCalc);
  const sectionWidthString = String(roundedSectionWidthCalc) + "vw";
  // console.log("bgImageLink: ", bgImageLink);
  // console.log("divisions: ", divisions);
  // console.log("sectionWidfthCalc: ", sectionWidthCalc);
  // console.log("roundedSectionWidthCalc: ", roundedSectionWidthCalc);
  // console.log("sectionWidthString: ", sectionWidthString);
  // console.log("backgroundPositions: ", bgPositions);

  const bgSize = String(100 * divisions) + "% 100%";

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
    <HStackFull className="justify-center mx-1" gap="gap-[0px]">
      {bgPositions.map((position, index) => (
        <Flex key={index} className={`${paddingGap}`}>
          <ParallaxImage
            duration={animationCycleDuration}
            bgImage={bgImageLink}
            isAnimated={true}
            parallaxHeight={`${imageHeight}`}
            parallaxWidth={sectionWidthString}
            bgPosition={`${position}`}
            bgSize={bgSize}
            yValues={generateYvalues(minYdistance, maxYdistance)}
          />
        </Flex>
      ))}
    </HStackFull>
  );
}
