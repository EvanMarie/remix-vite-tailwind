import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStack from "~/components/buildingBlocks/vStack";
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
        <VStack>
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-170 text-[10vh] ">
            Remix, Vite, & Tailwind
          </Text>
          <Text className="text-col-100 text-2xl textShadow">
            A Project Launchpad with Vite, Tailwind CSS, and Remix Flat Routes
          </Text>
          <Text className="text-col-100 text-2xl textShadow">
            including extensive preset options and components with quick
            customization.
          </Text>
          <NavLink to="/design">
            <Text className="p-[1.5vh] bg-100-linear3op25 text-col-900 shadowBroadNormal hover:bg-400-diagonal3op75 transition-400">
              Preset Design Options
            </Text>
          </NavLink>
        </VStack>
      </Transition>
    </LayoutContainer>
  );
}
