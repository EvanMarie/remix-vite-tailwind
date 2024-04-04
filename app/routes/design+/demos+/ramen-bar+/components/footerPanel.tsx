import { ParallaxLayer } from "@react-spring/parallax";
import { NavLink } from "@remix-run/react";
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function FooterPanel({
  sticky,
}: {
  sticky: { start: number; end: number };
}) {
  return (
    <ParallaxLayer sticky={sticky}>
      <CenterFull>
        <VStackFull className="h-full justify-evenly relative">
          <FlexFull className="h-[75vh] justify-center">
            <NavLink to="/design/demos/ramen-bar/merch">
              <Box className="w-[40vh] sm:w-[60vh] h-[30vh] sm:h-[45vh] border-970-md shadowBroadLooser">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url('/images/demo_images/MothRamenMerch.png')",
                  }}
                  aria-label="moth ramen merch"
                >
                  <VStackFull className="h-full justify-between">
                    <HStackFull className="justify-evenly py-[1vh]">
                      <Image
                        src=" /images/demo_images/merch_noodle_bowl.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_sake_set.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_tea_set.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_coffee_mug.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                    </HStackFull>
                    <HStackFull className="justify-evenly py-[1vh]">
                      <Image
                        src=" /images/demo_images/merch_womens_hat.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_mens_hoodie.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_womens_tank.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                      <Image
                        src=" /images/demo_images/merch_womens_hoodie.png"
                        alt="test"
                        className="h-[10vh] w-[10vh]"
                      />
                    </HStackFull>
                  </VStackFull>
                </div>
              </Box>
            </NavLink>
          </FlexFull>

          <FlexFull className="absolute bottom-0 right-0 left-0 h-[25vh]">
            <Box className="absolute top-0 right-0 left-0">
              <Image src="/images/demo_images/japanese.png" alt="test" />
            </Box>
            <FlexFull className="h-full bg-gradient-to-t from-orange-600/90 via-red-800/90 to-zinc-600/90 p-[1.5vh] rounded-t-none absolute top-0 right-0 left-0 shadowBroadLooser">
              THIS
            </FlexFull>
          </FlexFull>
        </VStackFull>
      </CenterFull>
    </ParallaxLayer>
  );
}
