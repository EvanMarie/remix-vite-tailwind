import Center from "~/components/buildingBlocks/center";
import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import Heading from "~/components/buildingBlocks/headingText";
import Text from "~/components/buildingBlocks/text";
import { SVGHeading } from "../../components/formattingComponents";

export default function SVGTiming() {
  const eases = [
    "none",
    "anticipate",
    "backIn",
    "backOut",
    "backInOut",
    "circIn",
    "circOut",
    "circInOut",
    "easeIn",
    "easeOut",
    "easeInOut",
  ];

  const speeds = [
    { speed: "too slow", multiplier: 3 },
    { speed: "slowish", multiplier: 2 },
    { speed: "normal", multiplier: 1 },
    { speed: "fastish", multiplier: 0.75 },
    { speed: "fast", multiplier: 0.5 },
    { speed: "too fast", multiplier: 0.25 },
  ];
  const [ease, setEase] = useState("");
  const [animationKey, setAnimationKey] = useState(0);
  const [speed, setSpeed] = useState("normal");
  const paths = [
    {
      path: "M1 1 V 199 H 199 V 0 Z",
      // ease: "anticipate",
      delay: 0.1,
      duration: 3,
      strokeWidth: 2,
    },
    {
      path: "M10 10 H 190 V 190 H 10 Z",
      // ease: "backIn",
      delay: 1.3,
      duration: 2.5,
      strokeWidth: 1.8,
    },
    {
      path: "M20 20 V 180 H 180 V 20 Z",
      // ease: "circIn",
      delay: 0.2,
      duration: 1.5,
      strokeWidth: 1.6,
    },
    {
      path: "M30 30 H 170 V 170 H 30 Z",
      // ease: "backInOut",
      delay: 0.6,
      duration: 2.9,
      strokeWidth: 1.4,
    },
    {
      path: "M40 40 V 160 H 160 V 40 Z",
      // ease: "circOut",
      delay: 0.3,
      duration: 1.7,
      strokeWidth: 1.2,
    },
    {
      path: "M50 50 H 150 V 150 H 50 Z",
      // ease: "circInOut",
      delay: 1,
      duration: 2.5,
      strokeWidth: 1,
    },
    {
      path: "M60 60 V 140 H 140 V 60 Z",
      // ease: "easeIn",
      delay: 0.4,
      duration: 1.3,
      strokeWidth: 0.9,
    },
    {
      path: "M70 70 H 130 V 130 H 70 Z",
      // ease: "easeOut",
      delay: 1.2,
      duration: 2.1,
      strokeWidth: 0.8,
    },
    {
      path: "M80 80 V 120 H 120 V 80 Z",
      // ease: "easeInOut",
      delay: 0.6,
      duration: 1.9,
      strokeWidth: 0.7,
    },
    {
      path: "M90 90 H 110 V 110 H 90 Z",
      // ease: "anticipate",
      delay: 1,
      duration: 1.5,
      strokeWidth: 0.6,
    },
  ];
  const currentMultiplier =
    speeds.find((s) => s.speed === speed)?.multiplier || 1;
  const handleEase = (e: string) => {
    setEase("");
    setAnimationKey((prevKey) => prevKey + 1); // Increment the animation key
    setEase(e);
  };

  const componentDimensions =
    "w-[40vh] max-w-screen h-[40vh] md:w-[50vh] md:h-[50vh]";
  const headingStyles = "text-cyan-200  text-md-normal md:text-lg-normal";
  const buttonStyles =
    "text-sm-tight md:text-lg-tight md:px-[1vh] justify-center flex-shrink-0 hover:cursor-pointer";

  return (
    <FlexFull className="justify-center">
      <Flex className="w-95% xxl:w-80% h-fit justify-center overflow-y-auto bg-600-linear6op75">
        <VStack className="h-fit pb-[2vh]" gap="gap-[3vh]">
          <VStackFull gap="gap-[2vh]">
            <Heading
              text="Timing Playground"
              className="py-[1vh] text-stroke-5-100"
              color="text-col-100"
            />
            <Wrap className="w-90% p-[1vh] shadowBroadNormal justify-evenly gap-x-[3vh] gap-y-[1vh] bg-col-970 items-center">
              <SVGHeading className={headingStyles}>
                Timing Functions:{" "}
              </SVGHeading>
              {eases.map((e, i) => (
                <Flex
                  key={i}
                  onClick={() => handleEase(e)}
                  className={buttonStyles}
                >
                  <Text
                    className={
                      ease === e
                        ? "text-cyan-200 font-semibol px-[0.5vh] metallicEdgesSm textShadow"
                        : "text-col-100 textShadow"
                    }
                  >
                    {e}
                  </Text>
                </Flex>
              ))}
            </Wrap>
            <Wrap className="justify-center items-center text-lg-tight gap-x-[2vh] w-90% p-[1.5vh] shadowBroadNormal bg-col-970">
              {" "}
              <SVGHeading className={headingStyles}>Speed:</SVGHeading>
              {speeds.map((s, i) => (
                <Flex
                  key={i}
                  onClick={() => setSpeed(s.speed)}
                  className={buttonStyles}
                >
                  <Text
                    className={
                      speed === s.speed
                        ? "text-cyan-200 font-semibol px-[0.5vh] metallicEdgesSm textShadow"
                        : "text-col-100 textShadow"
                    }
                  >
                    {s.speed}
                  </Text>
                </Flex>
              ))}
            </Wrap>
          </VStackFull>
          <Flex className={`${componentDimensions}`}>
            {" "}
            {ease && ease !== "none" && (
              <Center className="h-full w-full bg-300-radial6op75 border-900-md shadowBroadNormal animate-fadeIn ">
                <Center className="w-full h-full insetShadowXl">
                  <Flex className="w-full h-full shadowBroadNormal">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      {paths.map((path, i) => (
                        <motion.path
                          key={`${animationKey}-${i}`}
                          d={path.path}
                          fill="transparent"
                          stroke="rgb(217, 181, 173)"
                          strokeWidth={path.strokeWidth}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: path.duration * currentMultiplier,
                            ease: ease,
                            delay: path.delay || 0,
                          }}
                        />
                      ))}
                    </svg>
                  </Flex>
                </Center>
              </Center>
            )}
            {ease === "none" && (
              <Center
                className={`${componentDimensions} bg-500-radial5op50 border-900-md shadowBroadNormal animate-fadeIn`}
              >
                <Center className="w-full h-full insetShadowXl">
                  <Heading
                    text="This is fun, right?!"
                    className="py-[1vh] text-stroke-10-800"
                    layout="text-[5vh]"
                    shadow="boldTextGlow"
                    color="text-col-800"
                  />
                </Center>
              </Center>
            )}
          </Flex>
        </VStack>
      </Flex>
    </FlexFull>
  );
}
