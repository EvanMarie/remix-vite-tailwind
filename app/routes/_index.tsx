import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import HStack from "~/components/buildingBlocks/hStack";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <LayoutContainer>
      <Transition className="w-full h-full justify-center items-center">
        <VStackFull className="text-center xxl:w-[60vw]" gap="gap-[6vh]">
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-900 text-[5vh] md:text-[8vh] lg:text-[10vh] text-center animate-slideInRight">
            Remix, Vite, & Tailwind
          </Text>
          <VStackFull>
            <Text className="text-col-100 text-2xl textShadow text-center animate-slideInLeft delay-1500">
              A Project Launchpad with Vite, Tailwind CSS, and Remix Flat Routes
            </Text>
            <Text className="text-col-100 text-2xl textShadow text-center animate-zoomIn">
              including extensive preset options and components with quick
              customization.
            </Text>
          </VStackFull>
          <HStack
            gap="gap-[3vh]"
            className="animate-slideInUp50vh duration-2200"
          >
            <NavLink to="/design">
              <Text className="p-[1.5vh] bg-100-linear3op25 text-col-900 shadowBroadNormal hover:bg-400-diagonal3op75 transition-400 text-center">
                Preset Design Options
              </Text>
            </NavLink>
            <NavLink to="/design/css-animation">
              <Text className="p-[1.5vh] bg-100-linear3op25 text-col-900 shadowBroadNormal hover:bg-400-diagonal3op75 transition-400 text-center">
                Animation Examples
              </Text>
            </NavLink>
          </HStack>
        </VStackFull>
      </Transition>
    </LayoutContainer>
  );
}
