import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import Image from "~/components/buildingBlocks/image";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Flex className={`w-screen h-[95vh] relative`}>
      <Center
        className={`w-[35vh] h-[20vh] bg-col-850 shadowBroadLoose border-900-md text-col-100 text-[10vh] ${className}`}
      >
        {children}
      </Center>
    </Flex>
  );
}

export function ParallaxLayerContainer({
  offset,
  speed,
  sticky,
  position,
  label,
}: {
  offset?: number;
  speed?: number;
  sticky?: { start: number; end: number };
  position?: string;
  label?: string;
}) {
  return (
    <ParallaxLayer offset={offset} speed={speed} sticky={sticky}>
      <Container className={`absolute ${position}`}>
        <VStack gap="gap-[0px]" className="text-md-normal" align="items-start">
          <Center className="w-full">
            <Heading className="text-[1.5rem]" text={label} />
          </Center>
          {offset && (
            <HStackFull className="justify-between">
              <Text>offset:</Text>
              <span className="text-cyan-300">{offset}</span>
            </HStackFull>
          )}
          {speed && (
            <HStackFull className="justify-between">
              <Text>speed:</Text>
              <span className="text-cyan-300">{speed}</span>
            </HStackFull>
          )}
          {position && (
            <HStackFull className="justify-between">
              <Text>position:</Text>
              <span className="text-cyan-300">{position}</span>
            </HStackFull>
          )}
          {sticky && (
            <HStackFull>
              <Text>sticky: </Text>
              <span className="text-cyan-300">start: {sticky.start} </span>
              <span className="text-cyan-300">end: {sticky.end}</span>
            </HStackFull>
          )}
        </VStack>
      </Container>
    </ParallaxLayer>
  );
}

export function ParallaxImageLayer({
  offset,
  speed,
  sticky,
  position,

  imageLink,
  imageDimensions = "w-[95vw] h-[95vw] md:w-[40vh] nd:h-[40vh] lg:w-[50vh] lg:h-[50vh]",
  imageShadow = "shadowBroadLoose border-900-md",
  className,
}: {
  offset?: number;
  speed?: number;
  sticky?: { start: number; end: number };
  position?: string;
  label?: string;
  imageLink: string;
  imageDimensions?: string;
  imageShadow?: string;
  className?: string;
}) {
  return (
    <ParallaxLayer offset={offset} speed={speed} sticky={sticky}>
      <Box className={`absolute ${position}`}>
        <Box
          className={` bg-col-850 ${imageDimensions} ${imageShadow} ${className} relative`}
        >
          <Image src={imageLink} alt="parallax image" />
        </Box>
      </Box>
    </ParallaxLayer>
  );
}
