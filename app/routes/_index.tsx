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
          <Text className="font-cursive text-stroke-10-800 textGlow text-5xl ">
            Remix, Vite, & Tailwind
          </Text>
          <NavLink to="/design">
            <Text className="p-[1.5vh] bg-100-linear3op25 shadowBroadNormal hover:bg-400-diagonal3op75 transition-400">
              Preset Design Options
            </Text>
          </NavLink>
        </VStack>
      </Transition>
    </LayoutContainer>
  );
}
