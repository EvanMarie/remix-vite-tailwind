import Flex from "./flex";
import HStack from "./hStack";
import { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
  className?: string;
  bg?: string;
  h?: string;
  isTop?: boolean;
  isBottom?: boolean;
  alignment?: string;
}

export default function NavContainer({
  className,
  children,
  bg = "bg-col-300",
  h = "h-nav",
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
      className={`fixed ${locationStyle} left-0 ${h} w-full z-50 items-center justify-center subtleShadow rounded-b-[0.7vh] ${className}`}
    >
      <HStack
        className={`w-full h-full px-[1vh] ${alignment} ${bg} rounded-none `}
      >
        {children}
      </HStack>
    </Flex>
  );
}
