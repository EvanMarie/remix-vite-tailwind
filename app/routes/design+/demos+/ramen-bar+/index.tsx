import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";

export default function RamenBarInded() {
  return (
    <LayoutContainer className="bg-[url('/images/ramenBack.png')]">
      <TransitionFull className="relative">
        <DemoNav />

        <FlexFull className="pt-[13vh] lg:h-screen lg:justify-center lg:items-center lg:pt-[0px] relative">
          <Box className="absolute z-10">
            <Image alt="moth ramen" src="/images/moth-ramen.png" />
          </Box>
          <Box>
            <ParallaxShiftingImage
              bgImageLink="/images/moth.png"
              imageHeight="h-[50vh] md:h-[70vh] xl:h-[75vh]"
              animationCycleDuration={180}
              minNumYmovements={8}
              maxNumYmovements={16}
              sectionsClassName="shadowNarrowTight border-[0.2vh] border-red-600 opacity-60"
            />
          </Box>
        </FlexFull>
      </TransitionFull>
    </LayoutContainer>
  );
}
