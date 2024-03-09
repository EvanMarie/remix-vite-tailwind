import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  function NavButton({
    to,
    text,
    className = "bg-100-linear3op25 text-col-900 hover:bg-400-diagonal3op75 shadowBroadNormal hover:metallicEdgesMd",
  }: {
    to: string;
    text: string;
    className?: string;
  }) {
    return (
      <NavLink to={to}>
        <Text className={`p-[1.5vh] transition-400 text-center ${className}`}>
          {text}
        </Text>
      </NavLink>
    );
  }
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
          <Wrap className="animate-slideInUp50vh gap-[3vh] duration-2200 justify-center">
            <NavButton text="Preset Design Options" to="/design" />
            <NavButton text="Animation Examples" to="/design/css-animation" />
            <NavButton text="SVG World" to="/design/svg" />
            <NavButton
              text="DarkViolet.ai"
              to="https://darkviolet.ai"
              className="shadowBroadLoose border-970-md bg-gradient-to-r from-[#cd36f4] via-[#ab00ff] to-[#9b82ee] text-col-100 textShadow hover:metallicEdgesXl hover:scale-105"
            />
          </Wrap>
        </VStackFull>
      </Transition>
    </LayoutContainer>
  );
}
