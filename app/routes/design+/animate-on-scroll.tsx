import Flex from "~/components/buildingBlocks/flex";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { Animations } from "./components/data";

function SingleSection({
  height = "h-[100vh]",
  bg = "bg-red-200",
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
      className={`w-screen ${height} ${bg} ${textColor} flex justify-center items-center`}
    >
      {children}
    </div>
  );
}

export default function AnimateOnScroll() {
  return (
    <Flex className="w-screen h-screen overflow-y-auto">
      <VStackFull className="h-fit">
        {Animations.map((animation, index) => (
          <SingleSection key={index}>
            <AnimatedComponent animationName={animation}>
              <h1 className="text-3xl font-bold underline">
                animationName=&quot;{animation}&quot;
              </h1>
            </AnimatedComponent>
          </SingleSection>
        ))}
      </VStackFull>
    </Flex>
  );
}
