import { ParallaxLayer } from "@react-spring/parallax";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";

export default function MothRameHeaderImage() {
  return (
    <ParallaxLayer id="top">
      <FlexFull className="pt-[13vh] lg:h-screen justify-center items-center lg:pt-[0px] relative">
        <Box className="absolute z-10 w-full">
          <Image
            alt="moth ramen"
            src="/images/demo_images/moth-ramen.png"
            className="w-full h-full"
          />
        </Box>
        <Box>
          <ParallaxShiftingImage
            bgImageLink="/images/demo_images/moth.png"
            imageHeight="h-[50vh] md:h-[70vh] xl:h-[75vh]"
            animationCycleDuration={90}
            minNumYmovements={8}
            maxNumYmovements={16}
            sectionsClassName="shadowNarrowTight border-[0.2vh] border-red-600 opacity-60"
          />
        </Box>
      </FlexFull>
    </ParallaxLayer>
  );
}
