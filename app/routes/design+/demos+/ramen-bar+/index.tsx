import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import ParallaxShiftingImage from "~/components/specialty/parallaxShiftingImage";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { ParallaxImageLayer } from "../components/structureComponents";
import StaggerMenu from "~/components/specialty/staggerMenu";
import { HiDotsVertical } from "react-icons/hi";
import IconButton from "~/components/buildingBlocks/iconButton";

export default function RamenBarInded() {
  const parallax = useRef<IParallax>(null!);
  return (
    <LayoutContainer className="bg-[url('/images/demo_images/ramenBack.png')]">
      <TransitionFull className="relative h-screen overflow-y-auto">
        <DemoNav />
        <Box className="z-10 hover:cursor-pointer absolute top-[0.5vh] right-[1vh]">
          <StaggerMenu
            menuItems={[
              {
                title: "Home",
                to: "/design/demos/ramen-bar#top",
              },
              {
                title: "Menu",
                to: "#menu",
              },
              {
                title: "Contact",
                to: "#contact",
              },
            ]}
            menuPosition="right-[8vh] top-[0.5vh]"
            enterFrom="right"
            overlayStyle=""
            containerClassName="w-[80vw] md:w-[55vw] justify-evenly p-[1vh] bg-yellow-400 shadowBroadLoose"
            buttonComponent={
              <IconButton
                icon={HiDotsVertical}
                type="largeUnstyled"
                containerClassName="bg-yellow-400 shadowBroadLoose"
              />
            }
          />
        </Box>
        <Parallax ref={parallax} pages={6}>
          <ParallaxLayer id="top">
            <FlexFull className="pt-[13vh] lg:h-screen justify-center items-center lg:pt-[0px] relative">
              <Box className="absolute z-10">
                <Image
                  alt="moth ramen"
                  src="/images/demo_images/moth-ramen.png"
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

          <ParallaxImageLayer
            offset={0.9}
            speed={0.1}
            imageLink="/images/demo_images/mothRamen01.png"
            position="lg:top-[10vh] left-[10vh]"
          />
          <ParallaxImageLayer
            offset={1.25}
            speed={0.3}
            imageLink="/images/demo_images/mothRamen02.png"
            position="right-[20vh]"
          />
          <ParallaxImageLayer
            offset={1.5}
            speed={0.2}
            imageLink="/images/demo_images/mothRamen03.png"
            position="left-[30vh]"
          />
          <ParallaxImageLayer
            offset={1.8}
            speed={0.2}
            imageLink="/images/demo_images/mothRamen04.png"
            position="right-[30vh]"
          />
          <ParallaxImageLayer
            offset={2}
            speed={0.6}
            imageLink="/images/demo_images/mothRamen05.png"
            position="left-[30vh]"
          />
          <ParallaxLayer offset={2.5} speed={0.1} id="menu"></ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={0.1} id="contact"></ParallaxLayer>
        </Parallax>
      </TransitionFull>
    </LayoutContainer>
  );
}
