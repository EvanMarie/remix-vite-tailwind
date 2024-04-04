import { ParallaxLayer } from "@react-spring/parallax";
import { NavLink } from "@remix-run/react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import Image from "~/components/buildingBlocks/image";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";

const imagesStyle =
  "w-[7vh] h-[7vh] sm:w-[9vh] sm:h-[9vh] md:h-[10vh] md:w-[10vh] lg:h-[12vh] lg:w-[12vh] border-970-md shadowBroadLooser ";

const iconContainerStyle =
  "p-[1vh] md:p-[1.5vh] bg-gradient-to-br from-yellow-400 via-red-600 to-yellow-800 border-970-md hover:bg-yellow-400 transition-400 text-gray-900 shadowBroadLooser hover:cursor-pointer rounded-full";

const iconStyle = "text-[4vh] md:text-[5vh] text-zinc-100 hover:cursor-pointer";

export default function FooterPanel({
  sticky,
}: {
  sticky: { start: number; end: number };
}) {
  return (
    <ParallaxLayer sticky={sticky}>
      <CenterFull>
        <VStackFull className="h-full justify-evenly relative">
          <FlexFull className="h-[80vh] justify-center pt-[4vh] lg:pt-[2vh] items-start">
            <NavLink to="/design/demos/ramen-bar/merch">
              <Box className="w-[40vh] sm:w-[60vh] h-[30vh] sm:h-[45vh] md:w-[70vh] md:h-[55vh] lg:w-[80vh] lg:h-[60vh] border-970-md shadowBroadLooser hover:metallicEdgesXl transition-400 hover:cursor-pointer">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url('/images/demo_images/mothramenmerch.png')",
                  }}
                  aria-label="moth ramen merch"
                >
                  <VStackFull className="h-full justify-between">
                    <HStackFull className="justify-evenly py-[1vh]">
                      <Image
                        src=" /images/demo_images/merch_noodle_bowl.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_sake_set.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_tea_set.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_coffee_mug.png"
                        alt="test"
                        className={imagesStyle}
                      />
                    </HStackFull>
                    <HStackFull className="justify-evenly py-[1vh]">
                      <Image
                        src=" /images/demo_images/merch_womens_hat.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_mens_hoodie.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_womens_tank.png"
                        alt="test"
                        className={imagesStyle}
                      />
                      <Image
                        src=" /images/demo_images/merch_womens_hoodie.png"
                        alt="test"
                        className={imagesStyle}
                      />
                    </HStackFull>
                  </VStackFull>
                </div>
              </Box>
            </NavLink>
          </FlexFull>

          <CenterHorizontalFull className="absolute bottom-0 right-0 left-0 h-[20vh]">
            <Box className="absolute top-0 right-0 left-0">
              <Image
                src="/images/demo_images/japanese.png"
                alt="test"
                className="w-full h-[25vh]"
              />
            </Box>
            <FlexFull className="h-full bg-gradient-to-t from-orange-600/90 via-red-800/90 to-zinc-600/90 p-[1.5vh] rounded-t-none absolute top-0 right-0 left-0 shadowBroadLooser justify-center items-center">
              <VStackFull className="justify-between h-full">
                <HStack gap="gap-[2vh] md:gap-[3vh] h-full items-center">
                  <Box className={iconContainerStyle}>
                    <Icon icon={FaFacebook} iconClassName={iconStyle} />
                  </Box>
                  <Box className={iconContainerStyle}>
                    <Icon icon={FaTwitter} iconClassName={iconStyle} />
                  </Box>
                  <Box className={iconContainerStyle}>
                    <Icon icon={FaPinterest} iconClassName={iconStyle} />
                  </Box>
                  <Box className={iconContainerStyle}>
                    <Icon icon={FaYoutube} iconClassName={iconStyle} />
                  </Box>
                  <Box className={iconContainerStyle}>
                    <Icon icon={FaInstagram} iconClassName={iconStyle} />
                  </Box>
                </HStack>
                <CenterHorizontalFull>
                  <Text className="font-semibold text-zinc-100 textShadow">
                    © DarkViolet.ai All rights reserved.{" "}
                  </Text>
                </CenterHorizontalFull>
              </VStackFull>
            </FlexFull>
          </CenterHorizontalFull>
        </VStackFull>
      </CenterFull>
    </ParallaxLayer>
  );
}
