import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useState } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import Heading from "~/components/buildingBlocks/headingText";
import FloatDown from "./floatDown";
import IconButton from "~/components/buildingBlocks/iconButton";
import { CloseIcon, PlusIcon, RefreshIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";
import Slider from "~/components/buildingBlocks/slider";
import HStack from "~/components/buildingBlocks/hStack";
import Button from "~/components/buildingBlocks/button";
import { IoColorPaletteOutline } from "react-icons/io5";
import Modal from "~/components/buildingBlocks/modal";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import { VscDebugRestart } from "react-icons/vsc";

export default function FloatDownExperiements() {
  // Default settings
  const defaultSettings = {
    circleColor: "#00FFFF",
    circleMultiColors: ["#34d2eb", "#ab95fc", "#f783f0", "#fff89c"],
    numCircles: 50,
    maxDelay: 5,
    minCircleMovements: 4,
    maxCircleMovements: 8,
    radiusMax: 50,
    radiusMin: 5,
    horizontalMin: 5,
    horizontalMax: 200,
    verticalMin: 1,
    verticalMax: 5,
    minDuration: 5,
    maxDuration: 23,
    maxAnimationDuration: 5,
    minAnimationDuration: 2,
    animatedBorderColor: "#ffffff",
    animatedBorderOpacity: 1,
    minAnimatedBorderWidth: 0.8,
    maxAnimatedBorderWidth: 8,
    maxAnimatedBorderDelay: 2,
    minBouncyScale: 0.5,
    maxBouncyScale: 2,
    componentBackground: "bg-100-radial6op75",
    animationKey: 0,
    animation: "none",
  };

  const resetSettingsToDefault = () => {
    setCircleColor(defaultSettings.circleColor);
    setCircleMultiColors(defaultSettings.circleMultiColors);
    setNumCircles(defaultSettings.numCircles);
    setMaxDelay(defaultSettings.maxDelay);
    setMinCircleMovements(defaultSettings.minCircleMovements);
    setMaxCircleMovements(defaultSettings.maxCircleMovements);
    setRadiusMax(defaultSettings.radiusMax);
    setRadiusMin(defaultSettings.radiusMin);
    setHorizontalMin(defaultSettings.horizontalMin);
    setHorizontalMax(defaultSettings.horizontalMax);
    setVerticalMin(defaultSettings.verticalMin);
    setVerticalMax(defaultSettings.verticalMax);
    setMinDuration(defaultSettings.minDuration);
    setMaxDuration(defaultSettings.maxDuration);
    setMaxAnimationDuration(defaultSettings.maxAnimationDuration);
    setMinAnimationDuration(defaultSettings.minAnimationDuration);
    setAnimatedBorderColor(defaultSettings.animatedBorderColor);
    setAnimatedBorderOpacity(defaultSettings.animatedBorderOpacity);
    setMinAnimatedBorderWidth(defaultSettings.minAnimatedBorderWidth);
    setMaxAnimatedBorderWidth(defaultSettings.maxAnimatedBorderWidth);
    setMaxAnimatedBorderDelay(defaultSettings.maxAnimatedBorderDelay);
    setMinBouncyScale(defaultSettings.minBouncyScale);
    setMaxBouncyScale(defaultSettings.maxBouncyScale);
    setComponentBackground(defaultSettings.componentBackground);
    // Trigger reanimation
    setAnimationKey((prevKey) => prevKey + 1);
  };

  //   MODAL STATES
  const [colorModalOpen, setColorModalOpen] = useState(false);
  const [advancedAnimationModal, setAdvancedAnimationModal] = useState(false);
  const [circleMovementModal, setCircleMovementOpen] = useState(false);

  //   ALL SETTING STATE VARIABLES
  const [animationKey, setAnimationKey] = useState(
    defaultSettings.animationKey
  );
  const [circleColor, setCircleColor] = useState(defaultSettings.circleColor);
  const [circleMultiColors, setCircleMultiColors] = useState<string[]>([
    "#34d2eb",
    "#ab95fc",
    "#f783f0",
    "#fff89c",
  ]);
  const [maxDelay, setMaxDelay] = useState(defaultSettings.maxDelay);
  const [minCircleMovements, setMinCircleMovements] = useState(
    defaultSettings.minCircleMovements
  );
  const [maxCircleMovements, setMaxCircleMovements] = useState(
    defaultSettings.maxCircleMovements
  );
  const [radiusMax, setRadiusMax] = useState(defaultSettings.radiusMax);
  const [radiusMin, setRadiusMin] = useState(defaultSettings.radiusMin);
  const [horizontalMin, setHorizontalMin] = useState(
    defaultSettings.horizontalMin
  );
  const [horizontalMax, setHorizontalMax] = useState(
    defaultSettings.horizontalMax
  );
  const [verticalMin, setVerticalMin] = useState(defaultSettings.verticalMin);
  const [verticalMax, setVerticalMax] = useState(defaultSettings.verticalMax);
  const [minDuration, setMinDuration] = useState(defaultSettings.minDuration);
  const [maxDuration, setMaxDuration] = useState(defaultSettings.maxDuration);
  const [maxAnimationDuration, setMaxAnimationDuration] = useState(
    defaultSettings.maxAnimationDuration
  );
  const [minAnimationDuration, setMinAnimationDuration] = useState(
    defaultSettings.minAnimationDuration
  );
  const [animatedBorderColor, setAnimatedBorderColor] = useState(
    defaultSettings.animatedBorderColor
  );
  const [animatedBorderOpacity, setAnimatedBorderOpacity] = useState(
    defaultSettings.animatedBorderOpacity
  );
  const [minAnimatedBorderWidth, setMinAnimatedBorderWidth] = useState(
    defaultSettings.minAnimatedBorderWidth
  );
  const [maxAnimatedBorderWidth, setMaxAnimatedBorderWidth] = useState(
    defaultSettings.maxAnimatedBorderWidth
  );
  const [maxAnimatedBorderDelay, setMaxAnimatedBorderDelay] = useState(
    defaultSettings.maxAnimatedBorderDelay
  );
  const [minBouncyScale, setMinBouncyScale] = useState(
    defaultSettings.minBouncyScale
  );
  const [maxBouncyScale, setMaxBouncyScale] = useState(
    defaultSettings.maxBouncyScale
  );
  const [animation, setAnimation] = useState(defaultSettings.animation);
  const [numCircles, setNumCircles] = useState(defaultSettings.numCircles);

  const updateSettingAndReanimate = <T,>(
    updateFunction: React.Dispatch<React.SetStateAction<T>>,
    value: T
  ) => {
    updateFunction(value);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  function ColorPicker({
    onChange,
    label,
    value,
  }: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value: string;
  }) {
    return (
      <HStack className={`${labelStyles} items-center`} gap="gap-[2vh]">
        {label && <Text className="text-cyan-200">{label}</Text>}
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-[5vh] h-[3vh] cursor-pointer"
        />
      </HStack>
    );
  }

  //  STYLES
  const animations = ["animatedBorder", "bouncy", "none"];
  const activeStyle =
    "text-cyan-200 font-semibol px-[0.5vh] metallicEdgesSm textShadow text-sm-tight sm:text-md-tight";
  const inactiveStyle =
    "text-col-100 textShadow text-sm-tight sm:text-md-tight";
  const headingStyles =
    "text-cyan-200  text-sm-normal sm:text-md-normal md:text-lg-normal xl:text-md-normal xxl:text-lg-normal";
  const labelStyles = "text-md-tight text-col-100 justify-center";
  const buttonStyles =
    "text-sm-tight md:text-md-tight xl:text-sm-tight xxl:text-md-tight md:px-[1vh] justify-center flex-shrink-0 hover:cursor-pointer";
  const sliderLabelStyles = "text-lg-tight xl:text-sm-tight xxl:text-md-tight";

  // HANDLERS
  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const handleNumCircles = (value: number) => {
    setNumCircles(value);
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const handleMaxDelay = (value: number) => {
    setMaxDelay(value);
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const [newColor, setNewColor] = useState("#ffffff"); // Step 1: State for new color
  const handleAddNewColor = () => {
    setCircleMultiColors([...circleMultiColors, newColor]);
  };
  const handleRemoveColor = (indexToRemove: number) => {
    setCircleMultiColors(
      circleMultiColors.filter((_, index) => index !== indexToRemove)
    );
  };
  const backgroundChoices = [
    "bg-100-radial6op75",
    "bg-100-linear2op75",
    "bg-100-radial3op75",
    "bg-300-linear6op75",
    "bg-100-radial4op75",
    "bg-400-radial5op75",
    "bg-500-linear6op75",
    "bg-600-diagonal5op75",
    "bg-600-linear6op75",
    "bg-800-linear2op75",
    "bg-900-linear1op75",
    "bg-100-radial4op25",
    "bg-100-radial3op75",
    "bg-300-linear3op75",
    "bg-100-radial3op50",
    "bg-500-diagonal4op50",
  ];
  const [componentBackground, setComponentBackground] =
    useState("bg-100-radial6op75");

  function AdvancedAnimationSliders() {
    return (
      <VStack
        className="w-full h-full max-h-full overflow-y-auto bg-col-700 text-col-100 pb-[2vh] shadowBroadLoose border-970-md rounded-b-none xl:rounded-b-[0.7vh]"
        gap="gap-[2.5vh]"
      >
        <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
          <Text className="text-md-loose xxl:text-lg-loose">
            Advanced Animation:{" "}
          </Text>
        </FlexFull>
        <VStack className="p-[1vh] px-[2vh] xxl:p-[3vh]">
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={100}
            value={minAnimationDuration}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMinAnimationDuration, newValue)
            }
            label="min anim duration"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={100}
            value={maxAnimationDuration}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxAnimationDuration, newValue)
            }
            label="max anim duration"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0.1}
            max={20}
            value={minBouncyScale}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMinBouncyScale, newValue)
            }
            label="min bouncy scale"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0.1}
            max={20}
            value={maxBouncyScale}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxBouncyScale, newValue)
            }
            label="max bouncy scale"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={1}
            value={animatedBorderOpacity}
            onChange={(newValue) =>
              updateSettingAndReanimate(setAnimatedBorderOpacity, newValue)
            }
            label="border opacity"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={20}
            value={minAnimatedBorderWidth}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMinAnimatedBorderWidth, newValue)
            }
            label="min border width"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={10}
            value={maxAnimatedBorderWidth}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxAnimatedBorderWidth, newValue)
            }
            label="max border width"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={10}
            value={maxAnimatedBorderDelay}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxAnimatedBorderDelay, newValue)
            }
            label="max border delay"
          />
          <ColorPicker
            label="border color"
            value={animatedBorderColor}
            onChange={(e) => setAnimatedBorderColor(e.target.value)}
          />
        </VStack>
      </VStack>
    );
  }

  function CircleSpecSliders() {
    return (
      <VStack
        className="w-full xl:w-fit h-full max-h-full overflow-y-auto bg-col-700 text-col-100  pb-[2vh] shadowBroadLoose border-970-md rounded-b-none xl:rounded-b-[0.7vh]"
        gap="gap-[0.5vh]"
      >
        <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
          <Text className="text-md-loose xxl:text-lg-loose">
            Circle Movement:{" "}
          </Text>
        </FlexFull>
        <VStack className="p-[1vh] px-[2vh] xxl:p-[2vh]">
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={100}
            value={numCircles}
            onChange={handleNumCircles}
            label="circle count"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={100}
            value={minDuration}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMinDuration, newValue)
            }
            label="min duration"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={100}
            value={maxDuration}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxDuration, newValue)
            }
            label="max duration"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={20}
            value={maxDelay}
            onChange={handleMaxDelay}
            label="max delay"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={40}
            value={minCircleMovements}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMinCircleMovements, newValue)
            }
            label="min movements"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={40}
            value={maxCircleMovements}
            onChange={(newValue) =>
              updateSettingAndReanimate(setMaxCircleMovements, newValue)
            }
            label="max movements"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={500}
            value={radiusMin}
            onChange={(newValue) =>
              updateSettingAndReanimate(setRadiusMin, newValue)
            }
            label="min radius"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={0}
            max={500}
            value={radiusMax}
            onChange={(newValue) =>
              updateSettingAndReanimate(setRadiusMax, newValue)
            }
            label="max radius"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={-500}
            max={500}
            value={horizontalMin}
            onChange={(newValue) =>
              updateSettingAndReanimate(setHorizontalMin, newValue)
            }
            label="horizontal min"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={-500}
            max={500}
            value={horizontalMax}
            onChange={(newValue) =>
              updateSettingAndReanimate(setHorizontalMax, newValue)
            }
            label="horizontal max"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={-500}
            max={500}
            value={verticalMin}
            onChange={(newValue) =>
              updateSettingAndReanimate(setVerticalMin, newValue)
            }
            label="vertical min"
          />
          <Slider
            labelTextSizes={sliderLabelStyles}
            min={-500}
            max={500}
            value={verticalMax}
            onChange={(newValue) =>
              updateSettingAndReanimate(setVerticalMax, newValue)
            }
            label="vertical max"
          />
        </VStack>
      </VStack>
    );
  }
  return (
    <>
      <FlexFull className="justify-center">
        <HStack className="w-95% xxl:w-85% h-fit justify-center overflow-y-auto bg-800-radial6op25 p-[1vh] shadowBroadLoose border-970-md overflow-x-hidden">
          {/* circle movement sliders  */}
          <Flex className="xl:px-[1vh] xxl:pl-[2vh] hidden xl:flex">
            <CircleSpecSliders />
          </Flex>
          <VStackFull className="h-fit pb-[2vh] px-[1vh] py-[3vh]">
            <HStackFull className="justify-around">
              <VStack>
                <VStack gap="gap-[1vh]">
                  <HStackFull className="h-full items-center justify-between">
                    <Box className="text-transparent">this</Box>
                    <Heading
                      text="Fun with Floating Circles"
                      className="py-[1vh]"
                      layout="text-lg-loose sm:text-xl-loose xl:text-too-big-loose"
                      color="text-col-100"
                    />
                    <Button
                      onClick={resetSettingsToDefault}
                      buttonText="Reset All"
                      iconLeft={RefreshIcon}
                      type="smallNormal"
                    />
                  </HStackFull>
                  <Wrap className="gap-[2vh]">
                    <Wrap className="w-fit p-[1vh] shadowBroadNormal justify-evenly gap-x-[2vh] sm:gap-x-[3vh] gap-y-[1vh] bg-col-970 items-center">
                      <Text className={headingStyles}>Advanced Animation:</Text>
                      {animations.map((e, i) => (
                        <Flex
                          key={i}
                          onClick={() => {
                            setAnimation(e);
                            setAnimationKey((prevKey) => prevKey + 1);
                          }}
                          className={buttonStyles}
                        >
                          <Text
                            className={
                              e === animation ? activeStyle : inactiveStyle
                            }
                          >
                            {e}
                          </Text>
                        </Flex>
                      ))}
                    </Wrap>
                    <Flex className="h-full items-center hidden xl:flex">
                      <IconButton
                        icon={IoColorPaletteOutline}
                        onClick={() => setColorModalOpen(true)}
                      />
                    </Flex>
                  </Wrap>
                  {/* small screen buttons for modals  */}
                  <Wrap className="w-full gap-x-[3vh] gap-y-[1vh] items-center justify-evenly xl:hidden">
                    {" "}
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setColorModalOpen(true)}
                      buttonText="colors"
                    />
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setCircleMovementOpen(true)}
                      buttonText="circle movement"
                    />
                    <Button
                      iconLeft={IoColorPaletteOutline}
                      onClick={() => setAdvancedAnimationModal(true)}
                      buttonText="advanced animation"
                    />
                  </Wrap>
                </VStack>
                {/* Animation window  */}
                <Center className="h-fit insetShadowXl relative">
                  <Box className="absolute top-[1vh] right-[1vh] z-10">
                    <IconButton
                      onClick={handleReanimate}
                      icon={VscDebugRestart}
                      type="smallNormal"
                    />
                  </Box>
                  <FloatDown
                    startFrom={-50}
                    endAt={85}
                    key={animationKey}
                    containerBg={componentBackground}
                    containerHeight="h-[90vw] sm:h-[70vw] md:h-[60vh] lg:h-[65vh] xxl:h-[70vh]"
                    containerWidth="w-[90vw] sm:w-[70vw] md:w-[60vh] lg:w-[80vh] xl:w-[65vh] xxl:w-[85vh]"
                    viewBoxHeight={2000}
                    viewBoxWidth={2000}
                    circleAnimation={
                      animation as "animatedBorder" | "bouncy" | "none"
                    }
                    numCircles={numCircles}
                    maxDelay={maxDelay}
                    circleColor={circleColor}
                    circleColors={
                      circleMultiColors.length > 0
                        ? circleMultiColors
                        : undefined
                    }
                    maxMovements={maxCircleMovements}
                    minMovements={minCircleMovements}
                    radiusMax={radiusMax}
                    radiusMin={radiusMin}
                    horizontalMin={horizontalMin}
                    horizontalMax={horizontalMax}
                    verticalMin={verticalMin}
                    verticalMax={verticalMax}
                    minDuration={minDuration}
                    maxDuration={maxDuration}
                    maxCircleAnimationDuration={maxAnimationDuration}
                    minCircleAnimationDuration={minAnimationDuration}
                    animatedBorderColor={animatedBorderColor}
                    animatedBorderOpacity={animatedBorderOpacity}
                    minAnimatedBorderWidth={minAnimatedBorderWidth}
                    maxAnimatedBorderWidth={maxAnimatedBorderWidth}
                    maxAnimatedBorderDelay={maxAnimatedBorderDelay}
                    minBouncyScale={minBouncyScale}
                    maxBouncyScale={maxBouncyScale}
                  />
                </Center>
              </VStack>
              {/* advanced animation sliders  */}

              <Flex className=" hidden xl:flex">
                <AdvancedAnimationSliders />
              </Flex>
            </HStackFull>
          </VStackFull>
        </HStack>
      </FlexFull>

      {/* color modal */}
      <Modal
        isOpen={colorModalOpen}
        setModalOpen={setColorModalOpen}
        onClose={() => setColorModalOpen(false)}
        modalSize="w-[35vh] h-[80vh] "
      >
        <VStackFull
          className="h-full max-h-full overflow-y-auto bg-col-700 text-col-100"
          gap="gap-[0px]"
        >
          <FlexFull className="bg-col-900 rounded-b-none py-[0.5vh] px-[1vh]">
            <Text className="text-lg-loose">Circle Colors: </Text>
          </FlexFull>
          <VStackFull className="py-[1vh]">
            {circleMultiColors.map((color, index) => (
              <HStackFull key={index} className="px-[1vh] justify-between ">
                <Text className="w-25%">{`color ${index + 1}`}</Text>
                <Flex className="w-25%">
                  <Box
                    className="w-70% h-[3vh] rounded-md border-970-sm shadowBroadTight"
                    style={{ backgroundColor: color }}
                  />
                </Flex>
                <Flex className="w-25%">
                  <Text>{color}</Text>
                </Flex>
                <Flex className="w-25% justify-center">
                  <IconButton
                    onClick={() => handleRemoveColor(index)}
                    icon={CloseIcon}
                    type="unstyled"
                    iconClassName="text-[2.5vh] cursor-pointer hover:text-cyan-200"
                  />
                </Flex>
              </HStackFull>
            ))}
          </VStackFull>
          <FlexFull className="py-[0.5vh] px-[1.5vh] bg-col-950 rounded-none">
            <HStackFull className="justify-evenly  py-[1vh]  ">
              <Box className="shadowBroadNormal">
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="cursor-pointer"
                />
              </Box>
              <Button
                onClick={handleAddNewColor}
                iconLeft={PlusIcon}
                buttonText="add color"
              />
            </HStackFull>
          </FlexFull>
          <FlexFull className="bg-col-900 rounded-none py-[0.5vh] px-[1vh]">
            <Text className="text-lg-loose">Background: </Text>
          </FlexFull>
          <Wrap className="w-full p-[1vh] gap-[1.5vh] justify-evenly">
            {backgroundChoices.map((bg, index) => (
              <Flex className={`p-[0.5vh] `} key={index}>
                <Box className="shadowBroadNormal">
                  <Box
                    key={index}
                    className={`${bg} h-[5vh] w-[5vh] text-transparent hover:cursor-pointer hover:metallicEdgesSm transition-300 ${
                      bg === componentBackground &&
                      "metallicEdgesLg hover:metallicEdgesLg"
                    }`}
                    onClick={() => setComponentBackground(bg)}
                  >
                    .
                  </Box>
                </Box>
              </Flex>
            ))}
          </Wrap>
        </VStackFull>
      </Modal>

      {/* advanced animation modal */}
      <Modal
        isOpen={advancedAnimationModal}
        setModalOpen={setAdvancedAnimationModal}
        onClose={() => setAdvancedAnimationModal(false)}
        modalSize="w-[35vh] h-[85vh] "
      >
        <AdvancedAnimationSliders />
      </Modal>

      {/* circle movement modal */}
      <Modal
        isOpen={circleMovementModal}
        setModalOpen={setCircleMovementOpen}
        onClose={() => setCircleMovementOpen(false)}
        modalSize="w-[35vh] h-[95vh] "
      >
        {" "}
        <CircleSpecSliders />
      </Modal>
    </>
  );
}
