import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { ParallaxImageLayer } from "../components/structureComponents";
import Center from "~/components/buildingBlocks/center";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import MothRameHeaderImage from "./components/headerImage";
import SectionLabel from "./components/sectionLabel";
import {
  MenuItemsFour,
  MenuItemsOne,
  MenuItemsThree,
  MenuItemsTwo,
} from "./components/menuItemsList";

export default function RamenBarInded() {
  const parallax = useRef<IParallax>(null!);
  return (
    <LayoutContainer className="bg-[url('/images/demo_images/moth_ramen_tokyo.png')] bg-center bg-cover">
      <TransitionFull className="relative h-screen overflow-y-auto">
        <DemoNav />
        {/* <Box className="z-10 hover:cursor-pointer absolute top-[0.5vh] right-[1vh]">
          <StaggerMenu
            menuItems={[
              {
                title: "Home",
                to: "/design/demos/ramen-bar#top",
              },
              {
                title: "Menu",
                to: "/design/demos/ramen-bar#menu",
              },
              {
                title: "Merch",
                to: "/design/demos/ramen-bar#merch",
              },
              {
                title: "Contact",
                to: "/design/demos/ramen-bar#contact",
              },
            ]}
            menuPosition="right-[8vh] top-[0.5vh]"
            enterFrom="right"
            overlayStyle=""
            itemPadding="px-[1.5vh] py-[0.5vh]"
            itemStyle="bg-orange-400 text-col-900 rounded-[3vh]  border-[0.2vh] border-red-400 shadowBroadTight "
            itemHoverStyle="hover:bg-red-500 hover:text-col-100 hover:textShadow transition-300"
            itemHoverAnimation="hover:-translate-x-[1vh] hover:-rotate-[15deg] transition-400"
            containerClassName="w-[80vw] md:w-[55vw] justify-evenly p-[1vh] bg-yellow-300 shadowBroadLoose"
            buttonComponent={
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  rotate: 5,
                  scale: 0.85,
                  transition: { duration: 0.3 },
                }}
              >
                <IconButton
                  icon={HiDotsVertical}
                  type="largeUnstyled"
                  containerClassName="bg-yellow-300 shadowBroadLoose"
                />
              </motion.div>
            }
          />
        </Box> */}

        {/* -----------------------------------------------------------------------------------------  */}
        {/* MOBILE THROUGH MEDIUM SCREENS  */}
        <Parallax ref={parallax} pages={10} className="inline md:hidden">
          <MothRameHeaderImage />
          <ParallaxImageLayer // girl eating ramen
            offset={0.7}
            speed={0.2}
            imageLink="/images/demo_images/mothRamen01.png"
            position="left-[10vw] sm:left-[17vw]"
          />
          <ParallaxImageLayer // ramen bar 1
            offset={1.1}
            speed={0.1}
            imageLink="/images/demo_images/mothRamen02.png"
            position="left-[10vw] sm:left-[17vw]"
          />
          <ParallaxImageLayer // bowl of ramen
            offset={1.7}
            speed={0.3}
            imageLink="/images/demo_images/mothRamen03.png"
            position="left-[10vw] sm:left-[17vw]"
          />
          <ParallaxImageLayer // little moth
            offset={2}
            speed={1.1}
            imageLink="/images/demo_images/mothRamen04.png"
            position="left-[10vw] sm:left-[17vw]"
          />
          <ParallaxImageLayer // ramen bar 2
            offset={2.6}
            speed={0.4}
            imageLink="/images/demo_images/mothRamen05.png"
            position="left-[10vw] sm:left-[17vw]"
          />
          <ParallaxLayer sticky={{ start: 3, end: 6 }}>
            <Center className="w-screen h-screen" id="menu">
              <VStackFull className="h-full p-[1vh]">
                <SectionLabel text="Menu Highlights" />
              </VStackFull>
            </Center>
          </ParallaxLayer>
          <MenuItemsOne offset={3.2} speed={0.9} />
          <MenuItemsTwo offset={3.9} speed={0.8} position="top-[28vh]" />
          <MenuItemsThree offset={4.7} speed={0.9} />
          <MenuItemsFour offset={5.6} speed={0.6} position="top-[20vh]" />

          {/* <ParallaxLayer offset={3.25} speed={1}>
            {" "}
            <Center className="w-screen h-screen bg-col-950" id="merch">
              MERCH
            </Center>
          </ParallaxLayer>
          <ParallaxLayer offset={4.25} speed={1}>
            {" "}
            <Center className="w-screen h-screen bg-col-950" id="contact">
              CONTACT
            </Center>
          </ParallaxLayer> */}
          <ParallaxLayer offset={5.25} speed={1} />
        </Parallax>

        {/* -----------------------------------------------------------------------------------------  */}
        {/* LARGE SCREEN VIEW  */}
        <Parallax ref={parallax} pages={8} className="hidden md:inline">
          <MothRameHeaderImage />
          <ParallaxImageLayer
            offset={0.9}
            speed={0.3}
            imageLink="/images/demo_images/mothRamen01.png"
            position="md:top-[15vh] lg:top-[20vh] md:left-[5vh] xxl:left-[10vh]"
          />
          <ParallaxImageLayer
            offset={1.2}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen02.png"
            position="md:right-[5vh] lg:right-[5vh] xxl:right-[15vh]"
          />
          <ParallaxImageLayer
            offset={1.5}
            speed={0.4}
            imageLink="/images/demo_images/mothRamen03.png"
            position="md:left-[10vh] lg:left-[3vh] xl:left-[8vh] xxl:left-[20vh]"
          />
          <ParallaxImageLayer
            offset={1.8}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen04.png"
            position="md:right-[5vh] md:top-[10vh] lg:right-[7vh] xl:right-[9vh] xxl:right-[20vh] "
          />
          <ParallaxImageLayer
            offset={2}
            speed={0.6}
            imageLink="/images/demo_images/mothRamen05.png"
            position="md:left-[10vh] lg:left-[30vh]"
          />
          <ParallaxLayer sticky={{ start: 2.7, end: 6 }}>
            <Center className="w-screen h-screen" id="menu">
              <VStackFull className="h-full p-[1vh]">
                <SectionLabel text="Menu Highlights" />
              </VStackFull>
            </Center>
          </ParallaxLayer>
          <MenuItemsOne offset={3} speed={0.4} />
          <MenuItemsTwo offset={3.6} speed={0.8} position="top-[30vh]" />
          <MenuItemsThree offset={4.3} speed={0.6} />
          <MenuItemsFour offset={5} speed={0.9} position="top-[20vh]" />
          {/* <ParallaxLayer offset={3.25} speed={1}>
            {" "}
            <Center className="w-screen h-screen bg-col-950" id="merch">
              MERCH
            </Center>
          </ParallaxLayer>
          <ParallaxLayer offset={4.25} speed={1}>
            {" "}
            <Center className="w-screen h-screen bg-col-950" id="contact">
              CONTACT
            </Center>
          </ParallaxLayer>
          <ParallaxLayer offset={5.25} speed={1} /> */}
        </Parallax>
      </TransitionFull>
    </LayoutContainer>
  );
}
