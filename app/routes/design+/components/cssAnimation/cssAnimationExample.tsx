import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function CSSAnimationExample({
  notes,
  children,
  label,
}: {
  notes?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <VStackFull
      className="bg-col-700 shadowBroadNormal border-970-md xl:w-80% "
      align="items-start"
      gap="gap-[0px]"
    >
      <FlexFull className="px-[2vh] pt-[1vh]">
        <Heading
          text={label}
          layout="text-xl-normal"
          shadow="textShadow"
          color="text-col-100"
        />
      </FlexFull>
      <FlexFull className="h-fit flex-col lg:flex-row">
        <Flex className="justify-center p-[1vh] w-full lg:w-5/12">
          <FlexFull className="h-full p-[1vh] text-col-100 bg-col-900 shadowBroadNormal border-970-md ">
            {notes}
          </FlexFull>
        </Flex>
        <FlexFull className="h-full p-[1vh] w-full lg:w-7/12">
          <FlexFull className="justify-center p-[1vh]  bg-col-200 shadowBroadNormal border-970-md ">
            {children}
          </FlexFull>
        </FlexFull>
      </FlexFull>
    </VStackFull>
  );
}
