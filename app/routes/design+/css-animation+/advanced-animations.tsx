import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ComponentExample from "../components/cssAnimation/componentExample";
import FlashcardExplained from "../components/cssAnimation/explanations/flashcardExplained";
import FlashCard from "../components/cssAnimation/advancedExamples/flashCard";
import RainExplained from "../components/cssAnimation/explanations/rainExplained";
import Flex from "~/components/buildingBlocks/flex";
import Rain from "../components/cssAnimation/advancedExamples/rain";
import FlowerOfLifeExplained from "../components/cssAnimation/explanations/flowerOfLifeExplained";
import FlowerOfLife from "../components/cssAnimation/advancedExamples/flowerOfLife";

export default function AdvancedAnimations() {
  return (
    <FlexFull className="h-full overflow-y-auto justify-center">
      <VStackFull
        className="md:w-80% xl:w-70% items-center p-[2vh] h-fit"
        gap="gap-[3vh]"
      >
        <ComponentExample
          title="3D Flashcard"
          descriptionContent={<FlashcardExplained />}
        >
          <FlashCard />
        </ComponentExample>
        <ComponentExample
          title="Rain Window"
          descriptionContent={<RainExplained />}
        >
          <Flex className="w-full lg:w-80% h-[50vh] bg-100-linear6op75 insetShadowXl">
            <Rain />
          </Flex>
        </ComponentExample>
        <ComponentExample
          title="Flower of Life"
          descriptionContent={<FlowerOfLifeExplained />}
        >
          <FlowerOfLife />
        </ComponentExample>
      </VStackFull>
    </FlexFull>
  );
}
