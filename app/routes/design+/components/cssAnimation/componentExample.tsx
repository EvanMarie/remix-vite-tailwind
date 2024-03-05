import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Heading from "~/components/buildingBlocks/headingText";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DescriptionModal from "./descriptionModal";

export default function ComponentExample({
  children,
  title,
  descriptionContent,
}: {
  children: React.ReactNode;
  title?: string;
  descriptionContent?: React.ReactNode;
}) {
  return (
    <VStackFull className="rounded-t-[1vh] bg-300-diagonal2op25 border-970-md shadowBroadLoose">
      <HStackFull className="justify-between bg-col-700 rounded-b-none p-[0.5vh] relative">
        <Heading text={title} layout="text-xxl-normal" className="px-[1vh]" />
        <DescriptionModal>{descriptionContent}</DescriptionModal>
      </HStackFull>
      <FlexFull className="p-[2vh] justify-center">{children}</FlexFull>
    </VStackFull>
  );
}
