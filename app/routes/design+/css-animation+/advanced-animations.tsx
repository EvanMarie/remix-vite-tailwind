/* eslint-disable @typescript-eslint/no-unused-vars */
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ComponentExample from "./components/componentExample";
import FlashcardExplained from "./components/explanations/flashcardExplained";
import FlashCard from "./components/advancedExamples/flashCard";
import RainExplained from "./components/explanations/rainExplained";
import Flex from "~/components/buildingBlocks/flex";
import Rain from "./components/advancedExamples/rain";
import FlowerOfLifeExplained from "./components/explanations/flowerOfLifeExplained";
import FlowerOfLife from "./components/advancedExamples/flowerOfLife";
import Transition from "~/components/buildingBlocks/transition";
import FallingImages from "~/components/specialty/fallingImages";
import Button from "~/components/buildingBlocks/button";
import { useState } from "react";
import FallingImagesCode from "./components/explanations/fallingImagesCode";
import useReanimate from "~/utils/useReanimate";
import { RefreshIcon } from "styles";
import Fireworks from "~/components/specialty/fireworks";
import FireworksCode from "./components/explanations/fireworksExplanation";
import FloatingUpImages from "~/components/specialty/floatingUpImages";
import FloatingImages from "~/components/specialty/floatingUpImages";

export default function AdvancedAnimations() {
  const [isAnimatingSmileys, setIsAnimatingSmileys] = useState(true); // Keep animation on
  const [animationKey, reanimate] = useReanimate();

  return (
    <Transition className="w-full h-full">
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
          <ComponentExample
            title="Falling Images"
            descriptionContent={<FallingImagesCode />}
          >
            <VStackFull>
              <Button
                buttonText="Reanimate"
                iconLeft={RefreshIcon}
                onClick={() => reanimate()}
              />

              <Flex
                className="relative w-[85vw] h-[50vh] sm:w-[50vh] 
              lg:w-[65vh] lg:h-[65vh] bg-100-linear6op75"
              >
                {isAnimatingSmileys && <FallingImages key={animationKey} />}
              </Flex>
            </VStackFull>
          </ComponentExample>
          <ComponentExample
            title="Floating Images"
            descriptionContent={undefined}
          >
            <VStackFull>
              <Button
                buttonText="Reanimate"
                iconLeft={RefreshIcon}
                onClick={() => reanimate()}
              />

              <Flex
                className="relative w-[85vw] h-[50vh] sm:w-[50vh] 
              lg:w-[65vh] lg:h-[65vh] bg-100-linear6op75"
              >
                {isAnimatingSmileys && <FloatingImages key={animationKey} />}
              </Flex>
            </VStackFull>
          </ComponentExample>
          <ComponentExample
            title="Fireworks"
            descriptionContent={<FireworksCode />}
          >
            <VStackFull>
              <Button
                buttonText="Reanimate"
                iconLeft={RefreshIcon}
                onClick={() => reanimate()}
              />

              <Flex
                className="relative w-[85vw] h-[50vh] sm:w-[50vh] 
              lg:w-[65vh] lg:h-[65vh] bg-100-linear6op75"
              >
                <Fireworks
                  key={animationKey}
                  delay={0.5}
                  placementClassName="top-[12vh] left-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={1}
                  placementClassName="left-[12vh] bottom-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={1.5}
                  placementClassName="bottom-[12vh] right-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={2}
                  placementClassName="right-[20vh] top-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={2.5}
                  placementClassName="left-[12vh] bottom-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={3}
                  placementClassName="right-[16vh] top-[16vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={3.5}
                  placementClassName="bottom-[17vh] left-[17vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={4}
                  placementClassName="left-[12vh] bottom-[12vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={4.5}
                  placementClassName="bottom-[23vh] left-[23vh]"
                />
                <Fireworks
                  key={animationKey}
                  delay={5}
                  placementClassName="left-[12vh] bottom-[12vh]"
                />
              </Flex>
            </VStackFull>
          </ComponentExample>
        </VStackFull>
      </FlexFull>
    </Transition>
  );
}
