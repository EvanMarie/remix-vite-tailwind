import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Heading from "~/components/buildingBlocks/headingText";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import "~/animate-on-scroll/animate-on-scroll.css";

function FullPage({
  children,
  className,
  aos,
}: {
  children: React.ReactNode;
  className?: string;
  aos?: string;
}) {
  {
    return (
      <div
        data-aos={aos}
        className={`flex w-[100vw] h-[100vh] min-h-[100vh] justify-center items-center ${className}`}
      >
        {children}
      </div>
    );
  }
}

function SingleSection({
  height = "h-[40vh]",
  bg = "bg-col-800",
  aos = "fade-right",
  text,
}: {
  height?: string;
  bg?: string;
  aos?: string;
  text?: string;
}) {
  return (
    <div
      className={`w-screen ${height} ${bg} flex justify-center items-center`}
    >
      <div data-aos={aos}>
        <Heading text={text} layout="text-insane-looser" className="p-[4vh]" />
      </div>
    </div>
  );
}

export default function AnimateOnScroll() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Flex className="w-screen h-screen overflow-y-auto">
      <VStack className="h-fit">
        <div data-aos="fade-right" className="text-[20vh]">
          One
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Two
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Three
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Four
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Five
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Six
        </div>
        <div data-aos="fade-right" className="text-[20vh]">
          Seven
        </div>
      </VStack>

      {/* <SingleSection text="One" aos="fade-right" />
        <SingleSection text="Two" aos="fade-right" />
        <SingleSection text="Three" aos="fade-right" />
        <SingleSection text="Four" aos="fade-right" />
        <SingleSection text="Five" aos="fade-right" />
        <SingleSection text="Six" aos="fade-right" />
        <SingleSection text="Seven" aos="fade-right" /> */}
    </Flex>
  );
}
