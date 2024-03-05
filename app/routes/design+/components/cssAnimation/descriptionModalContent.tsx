import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function DescriptionModalContent({
  children,
  heading,
  bg = "bg-col-200",
  headingColor = "bg-col-990",
}: {
  children: React.ReactNode;
  heading?: string;
  bg?: string;
  headingColor?: string;
}) {
  return (
    <FlexFull
      className={`px-[1vh] sm:px-[2vh] md:px-[5vh] py-[2vh] ${bg} h-full overflow-y-auto insetShadowLg`}
    >
      <VStackFull className="h-fit py-[1.5vh]" align="items-start">
        {heading && (
          <FlexFull className="justify-center">
            <Flex
              className={`px-[2vh] py-[1vh] shadowBroadNormal border-970-md ${headingColor}`}
            >
              <Heading
                text={heading}
                layout="text-xxl-normal"
                className="py-[0.5vh]"
                color="text-col-100"
              />
            </Flex>
          </FlexFull>
        )}
        {children}
      </VStackFull>
    </FlexFull>
  );
}
