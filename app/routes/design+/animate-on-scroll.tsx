import Flex from "~/components/buildingBlocks/flex";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { Animations } from "./components/data";

function SingleSection({
  height = "h-[100vh]",
  bg = "bg-col-500",
  textColor = "text-black",
  children,
}: {
  height?: string;
  bg?: string;
  textColor?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`w-screen ${height} ${bg} ${textColor} flex justify-center items-center snap-center`}
    >
      {children}
    </div>
  );
}

export default function AnimateOnScroll() {
  return (
    <Flex className="w-screen h-screen overflow-y-auto snap-y scroll-smooth">
      <VStackFull className="h-fit">
        {Animations.map((animation, index) => (
          <SingleSection key={index}>
            <AnimatedComponent
              animation={animation}
              className="bg-col-970 p-[1.5vh] text-col-100"
            >
              <h1 className="text-3xl font-bold textShadow">
                animationName=&quot;{animation}&quot;
              </h1>
            </AnimatedComponent>
          </SingleSection>
        ))}
      </VStackFull>
    </Flex>
  );
}
