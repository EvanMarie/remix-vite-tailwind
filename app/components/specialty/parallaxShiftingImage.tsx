/* eslint-disable react/no-unescaped-entities */
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ParallaxImage from "~/components/specialty/parallaxImage";

export default function ParallaxShiftingImage() {
  const minDuration = 10;
  const maxDuration = 20;
  const minDelay = 0;
  const maxDelay = 10;
  const gap = 0;
  const divisions = 10;
  const bgImage = "https://picsum.photos/600/400";
  // const bgImage = "/images/rain.jpg";
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
  const bgSize = String(100 * divisions) + "% 100%";

  const generateRandomValue = (min: number, max: number) => {
    return Math.random() * (max - min) + (min * 10) / 10;
  };

  return (
    <CenterFull>
      <HStackFull className="justify-center mx-1" gap="gap-[0px]">
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="0% 0"
            bgPosition={`${bgPositions[0]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="25% 0"
            bgPosition={`${bgPositions[1]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="50% 0"
            bgPosition={`${bgPositions[2]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="75% 0"
            bgPosition={`${bgPositions[3]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="100% 0"
            bgPosition={`${bgPositions[4]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="0% 0"
            bgPosition={`${bgPositions[5]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="25% 0"
            bgPosition={`${bgPositions[6]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="50% 0"
            bgPosition={`${bgPositions[7]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="75% 0"
            bgPosition={`${bgPositions[8]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
        <Flex className="p-[0.5vh]">
          <ParallaxImage
            bgImage={bgImage}
            isAnimated={true}
            dimensions="w-[10vw] h-[75vh]"
            // bgPosition="100% 0"
            bgPosition={`${bgPositions[9]}`}
            // bgSize="500% 100%"
            bgSize={bgSize}
          />
        </Flex>
      </HStackFull>
    </CenterFull>
  );
}
