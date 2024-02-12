import { navHeight, subtleShadow } from "styles";
import Flex from "./flex";
import HStack from "./hStack";
import { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
  bg?: string;
  h?: string;
  isTop?: boolean;
  isBottom?: boolean;
  alignment?: string;
}

export default function NavContainer({
  children,
  bg = "bg-col-300",
  h = navHeight,
  isTop = false,
  isBottom = false,
  alignment = "items-center justify-evenly",
}: NavContainerProps) {
  const locationStyle = isTop
    ? `top-0 rounded-none  `
    : isBottom
    ? `bottom-0 rounded-b-none`
    : ``;

  return (
    <Flex
      className={`fixed ${locationStyle} left-0 ${h} w-full z-50 items-center justify-center ${subtleShadow} rounded-b-[0.7vh] `}
    >
      <HStack
        className={`w-full h-full px-[1vh] ${alignment} ${bg} rounded-none `}
      >
        {children}
      </HStack>
    </Flex>
  );
}
