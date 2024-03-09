import Wrap from "~/components/buildingBlocks/wrap";
import DescriptionModalContent from "../css-animation+/components/descriptionModalContent";
import { SimplePathRender } from "./components/renderSimplePath";
import { Reanimate } from "./components/reanimate";
import FloatDown from "./components/floatDown";
import SVGTiming from "./components/svg-animation-timing";
import Transition from "~/components/buildingBlocks/transition";
import FloatDownExperiements from "./components/floatDownExperiments";

export default function SVGPathExamples() {
  return (
    <Transition className="w-full h-full">
      <DescriptionModalContent
        heading="SVG Path Playground"
        bg="bg-linear2op50"
        headingColor="bg-col-890"
      >
        <Wrap className="w-full gap-[3vh] justify-around py-[3vh]">
          {" "}
          <SimplePathRender path="M10 10 H 440 V 440 H 10 Z" title="Square" />
          <SimplePathRender
            path="M.4 84.1s150 188 300 3 300 0 300 0"
            viewBox="0 0 600 200"
            title="Small Wave"
          />
          <SimplePathRender
            path="M1.1 77.8c101.7-101.7 266.5-101.7 368.2 0 81.3 81.3 81.3 213.2 0 294.5-65.1 65.1-170.6 65.1-235.6 0-52.1-52.1-52.1-136.5 0-188.5 41.6-41.6 109.2-41.6 150.8 0 33.3 33.3 33.3 87.3 0 120.6-26.7 26.7-69.9 26.7-96.5 0-21.3-21.3-21.3-55.9 0-77.2 17.1-17.1 44.7-17.1 61.8 0 13.6 13.6 13.6 35.8 0 49.4-10.9 10.9-28.6 10.9-39.5 0-8.7-8.7-8.7-22.9 0-31.6 7-7 18.3-7 25.3 0"
            title="Spiral"
          />
          <SimplePathRender
            path="m252.81903,11.44752c65.72359,0 119.04232,53.56371 119.04232,119.52575c0,65.96207 -53.31874,119.47424 -119.04232,119.47424c-65.72362,0 -119.04236,53.56375 -119.04236,119.52578c0,65.96205 53.31874,119.47424 119.04236,119.47424c131.44718,0 238.13597,-107.07595 238.13597,-239.00003c0,-131.92409 -106.6888,-238.99998 -238.13597,-238.99998l0,0.00002zm0,82.17395c-20.54919,0 -37.2168,16.72801 -37.2168,37.35179c0,20.62381 16.66756,37.35179 37.2168,37.35179c20.54922,0 37.21675,-16.72801 37.21675,-37.35179c0,-20.62378 -16.66753,-37.35179 -37.21675,-37.35179zm0,239.00003c20.53859,0 37.21675,16.73864 37.21675,37.35179c0,20.6131 -16.67815,37.35182 -37.21675,37.35182c-20.53862,0 -37.2168,-16.7387 -37.2168,-37.35182c0,-20.6131 16.67818,-37.35179 37.2168,-37.35179zm238.79474,-82.02172c0,131.82607 -112.47979,238.69222 -243.82939,238.69222c-131.34954,0 -237.82939,-106.86615 -237.82939,-238.69222c0,-131.82612 110.47985,-239.6923 241.82939,-239.6923c131.3496,0 239.82939,107.86618 239.82939,239.6923z"
            viewBox="0 0 500 500"
            duration={5}
            title="Yin Yang"
          />
          <SimplePathRender
            path="m214.73558,483.64404c-76.65775,-11.54369 -145.25087,-62.84329 -177.89324,-132.85345c-39.37898,-82.804 -25.01357,-188.274 37.61533,-256.02251c61.24736,-71.44285 167.48283,-97.15495 255.68461,-65.47996c92.11854,31.33327 158.6815,124.55201 156.74095,221.70938c1.91216,95.35308 -62.03228,186.84477 -151.59635,219.79091c-38.27923,14.92469 -80.00541,17.91388 -120.55127,12.85565l-0.00005,-0.00002zm13.7968,-144.91168c-0.14116,-11.49429 -0.28229,-22.98861 -0.42346,-34.48291c-32.40207,32.28313 -64.80411,64.56629 -97.2062,96.84947c27.85942,22.17294 61.91806,35.90485 97.2062,40.4911c0.46621,-34.28394 0.84848,-68.57065 0.42346,-102.85765zm76.58226,96.28263c22.9268,-6.74055 44.94166,-17.47526 63.53307,-32.48231c-14.71376,-21.20527 -35.80424,-38.14116 -53.60042,-57.11575c-14.03274,-13.96985 -28.06552,-27.93966 -42.09826,-41.90951c0,46.05894 0,92.11787 0,138.1768c10.87412,-1.44053 21.61587,-3.66166 32.1656,-6.66925l0,0.00002zm-76.21908,-283.66265c0,-30.34719 0,-60.69438 0,-91.04158c-81.85119,8.78927 -154.41861,74.72321 -167.13571,156.30828c-9.34668,53.6254 3.49912,111.51172 38.44582,153.90922c42.89663,-42.71144 85.79326,-85.42289 128.6899,-128.13431c0,-30.34719 0,-60.6944 0,-91.04159l0,-0.00002zm183.12621,204.81361c47.26757,-70.25476 40.37903,-171.8582 -18.37791,-233.60428c-31.03267,-34.25289 -74.51645,-57.27007 -120.69486,-62.25092c0,60.68489 0,121.36979 0,182.05468c42.01194,41.24912 82.67174,83.92754 126.11305,123.68489c6.08885,7.17875 9.14434,-7.47318 12.95971,-9.88436z"
            viewBox="0 0 500 500"
            duration={5}
            title="Peace Symbol"
          />
          <Reanimate
            title="Floating Circles"
            isPath={false}
            code={`interface Circle {
  x: number;
  y: number[];
  duration: number;
  delay: number;
  key: number;
}

interface FloatDownProps {
  containerWidth?: string;
  containerHeight?: string;
  containerBg?: string;
  containerShadow?: string;
  containerBorder?: string;
  numCircles?: number;
  circleColor?: string;
  maxMovements?: number;
  minMovements?: number;
  minDuration?: number;
  maxDuration?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  circleRadius?: number;
  horizontalMax?: number;
  verticalMax?: number;
  durationMultiplier?: number;
}

const generateRandomValues = (
  count: number,
  minValue: number,
  maxValue: number
): number[] => {
  return Array.from(
    { length: count },
    () => Math.random() * (maxValue - minValue) + minValue
  );
};

const FloatDown: React.FC<FloatDownProps> = ({
  containerHeight = "h-[40vh]",
  containerWidth = "w-[40vh]",
  containerBg = "bg-100-radial6op75",
  containerShadow = "insetShadowXL",
  containerBorder = "border-970-md",
  numCircles = 53,
  circleColor = "cyan",
  minMovements = 4,
  maxMovements = 8,
  viewBoxHeight = 1000,
  viewBoxWidth = 1000,
  circleRadius = 20,
  horizontalMax = 200,
  verticalMax = 40,
  minDuration = 5,
  maxDuration = 23,
  durationMultiplier = 20,
}) => {
  const numMovements =
    Math.floor(Math.random() * (maxMovements - minMovements + 1)) +
    minMovements;

  const circleVariants: Variants = {
    initial: (custom: Circle) => ({
      cx: custom.x,
      cy: custom.y[0],
      r: circleRadius,
      filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
    }),
    animate: (custom: Circle) => ({
      cy: viewBoxHeight + 60,
      x: generateRandomValues(numMovements, -horizontalMax, horizontalMax),
      y: custom.y,
      transition: {
        duration: custom.duration,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        loop: Infinity,
        delay: custom.delay,
        filter: "drop-shadow(2vh 2vh 2vh rgba(0, 0, 0, 1))",
      },
    }),
  };

  const circles: Circle[] = Array.from({ length: numCircles }, (_, index) => ({
    x: Math.random() * viewBoxWidth,
    y: [
      -60,
      ...generateRandomValues(numMovements - 1, -verticalMax, verticalMax),
    ],
    duration: Math.random() * (maxDuration - minDuration) + minDuration,
    delay: Math.random() * durationMultiplier,
    key: index,
  }));

  return (
    <Flex className="shadowBroadNormal">
      <Center
        className={\`\${containerHeight} \${containerWidth} \${containerBg} \${containerShadow} relative \${containerBorder}\`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <svg
            viewBox={\`0 0 \${viewBoxWidth} \${viewBoxHeight}\`}
            className="w-full h-full"
          >
            {circles.map((circle) => (
              <motion.circle
                key={circle.key}
                initial="initial"
                animate="animate"
                variants={circleVariants}
                fill={circleColor}
                custom={circle}
              />
            ))}
          </svg>
        </div>
      </Center>
    </Flex>
  );
};

export default FloatDown;`}
          >
            <FloatDown />
          </Reanimate>
        </Wrap>
        <SVGTiming />
        <FloatDownExperiements />
      </DescriptionModalContent>
    </Transition>
  );
}
