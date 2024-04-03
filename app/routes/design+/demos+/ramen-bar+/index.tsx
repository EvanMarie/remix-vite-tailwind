import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { ParallaxLayerContainer } from "../components/structureComponents";

export default function RamenBarInded() {
  const parallax = useRef<IParallax>(null!);
  return (
    <LayoutContainer className="bg-[url('/images/ramenBack.png')]">
      <TransitionFull className="relative h-screen overflow-y-auto">
        <DemoNav />
        <Parallax ref={parallax} pages={6}>
          <ParallaxLayer>
            <FlexFull className="pt-[13vh] lg:h-screen justify-center items-center lg:pt-[0px] relative">
              <Box className="absolute z-10">
                <Image alt="moth ramen" src="/images/moth-ramen.png" />
              </Box>
              <Box>
                <ParallaxShiftingImage
                  bgImageLink="/images/moth.png"
                  imageHeight="h-[50vh] md:h-[70vh] xl:h-[75vh]"
                  animationCycleDuration={140}
                  minNumYmovements={8}
                  maxNumYmovements={16}
                  sectionsClassName="shadowNarrowTight border-[0.2vh] border-red-600 opacity-60"
                />
              </Box>
            </FlexFull>
          </ParallaxLayer>

          <ParallaxLayerContainer offset={1} speed={0.6} />
          <ParallaxLayerContainer
            offset={1.2}
            position="left-[40vh]"
            speed={0.8}
          />
          <ParallaxLayerContainer
            offset={1.4}
            position="left-[60vh]"
            speed={0.4}
          />
        </Parallax>
      </TransitionFull>
    </LayoutContainer>
  );
}
