import Flex from "~/components/buildingBlocks/flex";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScrollOne";

function SingleSection({
  height = "h-[40vh]",
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
      <VStackFull className="h-fit p-[1.5vh]">
        <SingleSection bg="bg-blue-200">
          <AnimatedComponent>
            <h1 className="text-3xl font-bold underline">Animate me!</h1>
          </AnimatedComponent>
        </SingleSection>
        <SingleSection bg="bg-purple-200">
          <AnimatedComponent>
            <h1 className="text-3xl font-bold underline">Animate me!</h1>
          </AnimatedComponent>
        </SingleSection>
        <SingleSection bg="bg-green-200">
          <AnimatedComponent>
            <h1 className="text-3xl font-bold underline">Animate me!</h1>
          </AnimatedComponent>
        </SingleSection>
        <SingleSection bg="bg-yellow-200">
          <AnimatedComponent>
            <h1 className="text-3xl font-bold underline">Animate me!</h1>
          </AnimatedComponent>
        </SingleSection>
      </VStackFull>
    </Flex>
  );
}
