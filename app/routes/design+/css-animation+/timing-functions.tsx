import FlexFull from "~/components/buildingBlocks/flexFull";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import Heading from "~/components/buildingBlocks/headingText";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import HStack from "~/components/buildingBlocks/hStack";
import { useCallback, useState } from "react";
import Button from "~/components/buildingBlocks/button";
import Modal from "~/components/buildingBlocks/modal";
import Box from "~/components/buildingBlocks/box";
import HorizontalScrollingSelector from "~/components/buildingBlocks/horizontalScrollSelect";
import CSSAnimationExample from "../components/cssAnimation/cssAnimationExample";
import CubicBezierExplained from "../components/cssAnimation/cubicBezierExplaned";

type TimingFunctionKey = keyof typeof functionDetails;

const timingFunctions: TimingFunctionKey[] = [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
  "ease-linear",
  "ease-elastic",
  "ease-snail-pace",
  "ease-bounce-out",
  "ease-elastic-start",
  "ease-sharp-snap",
  "ease-slow-mo",
  "ease-in-quad",
  "ease-in-cubic",
  "ease-in-quart",
  "ease-in-quint",
  "ease-in-sine",
  "ease-in-expo",
  "ease-in-circ",
  "ease-in-back",
  "ease-out-quad",
  "ease-out-cubic",
  "ease-out-quart",
  "ease-out-quint",
  "ease-out-sine",
  "ease-out-expo",
  "ease-out-circ",
  "ease-out-back",
  "ease-in-out-quad",
  "ease-in-out-cubic",
  "ease-in-out-quart",
  "ease-in-out-quint",
  "ease-in-out-sine",
  "ease-in-out-expo",
  "ease-in-out-circ",
  "ease-in-out-back",
];

const functionDetails = {
  "ease-snail-pace": "cubic-bezier(0.2, 0.1, 0.3, 0.2)",
  "ease-bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  "ease-elastic-start": "cubic-bezier(0.75, -0.5, 0.25, 1.75)",
  "ease-sharp-snap": "cubic-bezier(0.9, 0.1, 0.1, 0.1)",
  "ease-slow-mo": "cubic-bezier(0.05, 0.85, 0.15, 1)",
  ease: "cubic-bezier(0.42, 0, 0.58, 1)",
  "ease-linear": "cubic-bezier(0, 0, 1, 1)",
  "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
  "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
  "ease-elastic": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
  "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
  "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
  "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
  "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
  "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
  "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
  "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
  "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
  "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
  "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  "snail-pace": "cubic-bezier(0.2, 0.1, 0.3, 0.2)",
  "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  "elastic-start": "cubic-bezier(0.75, -0.5, 0.25, 1.75)",
  "sharp-snap": "cubic-bezier(0.9, 0.1, 0.1, 0.1)",
  "slow-mo": "cubic-bezier(0.05, 0.85, 0.15, 1)",
};

export function ExampleParent({
  w = "w-full",
  h = "h-[25vh]",
  bg = "bg-col-500",
  children,

  className,
  style,
}: {
  w?: string;
  h?: string;
  bg?: string;
  children?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Flex
      className={`${w} ${h} ${bg} px-[1vh] items-center insetShadowXl border-970-md ${className} font-semibold`}
      style={style}
    >
      <VStackFull
        gap="gap-[0px]"
        className="h-full justify-evenly items-center"
      >
        <Text className="text-xl-loose">Parent Component</Text>
        <FlexFull className="h-full items-center">{children}</FlexFull>
      </VStackFull>
    </Flex>
  );
}

export function ExampleChild({
  w = "w-50%",
  h = "h-70%",
  bg = "bg-col-300",
  children,
  className,
  style,
}: {
  w?: string;
  h?: string;
  bg?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Flex
      className={`${w} ${h} ${bg} justify-center items-center shadowBroadNormal border-970-md ${className}`}
      style={style}
    >
      {" "}
      <VStack gap="gap-[0px]">
        <Text className="text-lg-loose font-semibold">Child Component</Text>
        {children}
      </VStack>
    </Flex>
  );
}

export function DescriptionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VStack gap="gap-[1vh]" align="items-start">
      {children}
    </VStack>
  );
}

export function ExampleDescription({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) {
  function Label({ children }: { children: React.ReactNode }) {
    return <Text className="font-semibold text-lg-loose">{children}</Text>;
  }

  function TailwindCSS({ children }: { children: React.ReactNode }) {
    return <Text className="font-monospace text-lg-loose">{children}</Text>;
  }

  return (
    <HStack gap="gap-[0.5vh] items-start">
      {label && <Label>{label}</Label>}
      <TailwindCSS>{description}</TailwindCSS>
    </HStack>
  );
}

export default function CSSAnimation() {
  const [currentTimingFunction, setCurrentTimingFunction] =
    useState<TimingFunctionKey>("ease");
  const [modalOpen, setModalOpen] = useState(false);
  const handleAnimationChange = useCallback((selectedOption: string) => {
    setCurrentTimingFunction(selectedOption as TimingFunctionKey);
  }, []);
  return (
    <>
      <Transition className="w-full h-full">
        <VStackFull className="h-full overflow-y-auto p-[2vh]" gap="gap-[3vh]">
          <FlexFull className="px-[2vh] pt-[1vh] justify-center">
            <Heading
              text="Default & Custom Timing Functions"
              layout="text-too-big-normal"
              shadow="textShadow"
              color="text-col-100"
              className="py-[0.7vh]"
            />
          </FlexFull>
          <VStack className="bg-col-900 p-[2vh] shadowBroadLoose border-970-md w-full lg:w-50% relative">
            <Box className="absolute bottom-[1vh] right-[1vh]">
              <Button
                buttonText="read more"
                type="smallNormal"
                onClick={() => setModalOpen(true)}
              />
            </Box>
            <Heading
              text="Cubic Bezier Timing Functions"
              layout="text-xl-normal"
              shadow="textShadow"
              color="text-col-100"
              className="py-[0.7vh]"
            />
            <Text className="text-col-100">
              Cubic Bezier curves are defined by four points: P0, P1, P2, and
              P3. In the context of CSS animations and transitions, these points
              are used to define the speed curve of the animation. The
              cubic-bezier function in CSS is specifically defined by the
              coordinates of two of these points: P1 and P2. P0 and P3 are
              implicitly defined (P0 is always (0,0) and P3 is always (1,1) for
              CSS transitions and animations), as they represent the start and
              end of the transition, respectively.
            </Text>
          </VStack>

          <FlexFull className="h-20% justify-center items-center xl:w-80%">
            <HorizontalScrollingSelector
              showCurrent={false}
              selectedOnTop={false}
              options={timingFunctions}
              setExternalSelection={handleAnimationChange}
              selectedOption={currentTimingFunction}
              heading="CSS Timing Functions in Tailwind"
              bg="bg-col-500"
              border="border-980-md"
              showClose={false}
              buttonClassName="text-nowrap"
            />
          </FlexFull>
          <CSSAnimationExample
            notes={
              <DescriptionContainer>
                <ExampleDescription label="Tailwind classNames: " />
                <ExampleDescription
                  label="Parent:"
                  description="className = group cursor-pointer"
                />
                <ExampleDescription
                  label="Child:"
                  description={`className = transition-transform duration-[1500ms] transform group-hover:translate-x-[100%] ${currentTimingFunction}`}
                />
              </DescriptionContainer>
            }
          >
            <ExampleParent className="group cursor-pointer">
              <ExampleChild
                className={`transition-transform duration-[1500ms] transform group-hover:translate-x-[100%] ${currentTimingFunction}`}
              >
                <Text className="text-lg-loose font-semibold">
                  {currentTimingFunction}
                </Text>
                <Text>{functionDetails[currentTimingFunction]}</Text>
              </ExampleChild>
            </ExampleParent>
          </CSSAnimationExample>
        </VStackFull>
      </Transition>
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-full lg:w-80% h-90% xl:w-60%"
      >
        <CubicBezierExplained />
      </Modal>
    </>
  );
}
