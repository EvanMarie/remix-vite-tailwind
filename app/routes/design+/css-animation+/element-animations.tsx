import FlexFull from "~/components/buildingBlocks/flexFull";
import Flex from "~/components/buildingBlocks/flex";
import { useCallback, useState } from "react";
import IconButton from "~/components/buildingBlocks/iconButton";
import { StopIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import HorizontalScrollingSelector from "~/components/buildingBlocks/horizontalScrollSelect";
import TailwindAnimationExample from "../components/cssAnimation/tailwindAnimationExample";

export default function AnimationsOne() {
  type AnimationsMapping = {
    [key: string]: string;
  };

  const animationsMapping: AnimationsMapping = {
    none: "animate-none",
    bounce: "animate-bounce",
    spin: "animate-spin",
    pulse: "animate-pulse",
    ping: "animate-ping",
    wiggle: "animate-wiggle",
    fadeIn: "animate-fadeIn",
    fadeOut: "animate-fadeOut",
    fadeInUp: "animate-fadeInUp",
    fadeInDown: "animate-fadeInDown",
    fadeInLeft: "animate-fadeInLeft",
    fadeInRight: "animate-fadeInRight",
    fadeOutUp: "animate-fadeOutUp",
    fadeOutDown: "animate-fadeOutDown",
    fadeOutLeft: "animate-fadeOutLeft",
    fadeOutRight: "animate-fadeOutRight",
    hueRotate: "animate-hueRotate",
    hueRotateUp: "animate-hueRotateUp",
    hueRotateDown: "animate-hueRotateDown",
    hueRotateLeft: "animate-hueRotateLeft",
    hueRotateRight: "animate-hueRotateRight",
    ripple: "animate-ripple",
    rippleUp: "animate-rippleUp",
    rippleDown: "animate-rippleDown",
    rippleLeft: "animate-rippleLeft",
    rippleRight: "animate-rippleRight",
    rippleUpLeft: "animate-rippleUpLeft",
    rippleUpRight: "animate-rippleUpRight",
    rippleDownLeft: "animate-rippleDownLeft",
    rippleDownRight: "animate-rippleDownRight",
    rotate: "animate-rotate",
    rotateUp: "animate-rotateUp",
    rotateDown: "animate-rotateDown",
    rotateLeft: "animate-rotateLeft",
    rotateRight: "animate-rotateRight",
    scaleUp: "animate-scaleUp",
    scaleDown: "animate-scaleDown",
    scaleUpLeft: "animate-scaleUpLeft",
    scaleUpRight: "animate-scaleUpRight",
    scaleDownLeft: "animate-scaleDownLeft",
    scaleDownRight: "animate-scaleDownRight",
    slideUp: "animate-slideUp",
    slideDown: "animate-slideDown",
    slideLeft: "animate-slideLeft",
    slideRight: "animate-slideRight",
    slideUpLeft: "animate-slideUpLeft",
    slideUpRight: "animate-slideUpRight",
    slideDownLeft: "animate-slideDownLeft",
    slideDownRight: "animate-slideDownRight",
    vibrate: "animate-vibrate",
    vibrateUp: "animate-vibrateUp",
    vibrateDown: "animate-vibrateDown",
    vibrateLeft: "animate-vibrateLeft",
    vibrateRight: "animate-vibrateRight",
    vibrateUpLeft: "animate-vibrateUpLeft",
    vibrateUpRight: "animate-vibrateUpRight",
    vibrateDownLeft: "animate-vibrateDownLeft",
    vibrateDownRight: "animate-vibrateDownRight",
  };

  const [currentAnimation, setCurrentAnimation] = useState("none");
  const handleAnimationChange = useCallback((selectedOption: string) => {
    setCurrentAnimation(selectedOption);
  }, []);

  const displayNames = Object.keys(animationsMapping);

  const actualClassName = animationsMapping[currentAnimation];

  return (
    <Transition className="w-full h-full">
      <VStackFull className="justify-evenly items-center h-full">
        <FlexFull className="h-15% items-center justify-center">
          <Flex className="bg-col-900 h-fit px-[2vh] py-[1vh] shadowBroadNormal">
            <Heading
              color="text-col-100"
              text="Tailwind Default Animations and Added Animation Classes"
              className="text-stroke-5-100"
              shadow="textShadow"
              layout="text-xxl-loose"
            />
          </Flex>
        </FlexFull>
        <Flex className="h-15% justify-center items-center w-full md:w-85% xl:w-80% px-[8vh]">
          <HorizontalScrollingSelector
            showCurrent={false}
            selectedOnTop={false}
            options={displayNames}
            setExternalSelection={handleAnimationChange}
            selectedOption={currentAnimation}
            heading="Tailwind CSS Animations"
            bg="bg-col-500"
            border="border-980-md"
            showClose={false}
          />
        </Flex>
        <FlexFull className="h-60% justify-center items-center">
          <Flex className="justify-center items-center w-full md:w-85% xl:w-80% h-[50vh] px-[8vh]">
            <FlexFull className="h-full bg-col-200 relative shadowBroadNormal border-970-md">
              <Box className="absolute top-[1vh] left-[1vh]">
                <IconButton
                  icon={StopIcon}
                  onClick={() => setCurrentAnimation("none")}
                />
              </Box>
              <TailwindAnimationExample animation={actualClassName} />
            </FlexFull>
          </Flex>
        </FlexFull>
      </VStackFull>
    </Transition>
  );
}
