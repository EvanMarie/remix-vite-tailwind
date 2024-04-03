import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import DemoNav from "../components/demoNav";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { ParallaxImageLayer } from "../components/structureComponents";
import Center from "~/components/buildingBlocks/center";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Flex from "~/components/buildingBlocks/flex";
import MothRameHeaderImage from "./components/headerImage";

export default function RamenBarInded() {
  const parallax = useRef<IParallax>(null!);
  return (
    <LayoutContainer className="bg-[url('/images/demo_images/ramenBack.png')]">
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
        <Parallax ref={parallax} pages={10} className="inline lg:hidden">
          <MothRameHeaderImage />
          <ParallaxImageLayer
            offset={0.7}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen01.png"
            position="left-[2.5vw]"
          />
          <ParallaxImageLayer
            offset={1.1}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen02.png"
            position="left-[2.5vw]"
          />
          <ParallaxImageLayer
            offset={1.7}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen03.png"
            position="left-[2.5vw]"
          />
          <ParallaxImageLayer
            offset={1.8}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen04.png"
            position="left-[2.5vw]"
          />
          <ParallaxImageLayer
            offset={2}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen05.png"
            position="left-[2.5vw]"
          />
          <ParallaxLayer offset={2.5} speed={0}>
            <Center className="w-screen h-screen" id="menu">
              <VStackFull className="h-full p-[1vh]">
                <Flex className="px-[3vh] rounded-[3vh] bg-yellow-300 border-[0.3vh] border-red-500 shadowBroadLoose">
                  <Text className="butterflyFont text-[6vh]">
                    MothRamen Menu
                  </Text>
                </Flex>
              </VStackFull>
            </Center>
          </ParallaxLayer>
          <ParallaxLayer offset={3.25} speed={1}>
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
          <ParallaxLayer offset={5.25} speed={1} />
        </Parallax>

        {/* -----------------------------------------------------------------------------------------  */}
        {/* LARGE SCREEN VIEW  */}
        <Parallax ref={parallax} pages={6} className="hidden lg:inline">
          <MothRameHeaderImage />
          <ParallaxImageLayer
            offset={0.9}
            speed={0.1}
            imageLink="/images/demo_images/mothRamen01.png"
            position="lg:top-[20vh] left-[10vh]"
          />
          <ParallaxImageLayer
            offset={1.2}
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
            speed={0.4}
            imageLink="/images/demo_images/mothRamen04.png"
            position="right-[30vh]"
          />
          <ParallaxImageLayer
            offset={2}
            speed={0.5}
            imageLink="/images/demo_images/mothRamen05.png"
            position="left-[30vh]"
          />
          <ParallaxLayer offset={2.5} speed={0}>
            <Center className="w-screen h-screen" id="menu">
              <VStackFull className="h-full p-[1vh]">
                <Flex className="px-[3vh] rounded-[3vh] bg-yellow-300 border-[0.3vh] border-red-500 shadowBroadLoose">
                  <Text className="butterflyFont text-[6vh]">
                    MothRamen Menu
                  </Text>
                </Flex>
              </VStackFull>
            </Center>
          </ParallaxLayer>
          <ParallaxLayer offset={3.25} speed={1}>
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
          <ParallaxLayer offset={5.25} speed={1} />
        </Parallax>
      </TransitionFull>
    </LayoutContainer>
  );
}
