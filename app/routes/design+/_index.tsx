/* eslint-disable react/no-unescaped-entities */
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import {
  textShadows,
  allColors,
  allColorsRGB,
  colors100,
  colors200,
  colors300,
  colors400,
  colors500,
  colors600,
  colors700,
  colors800,
  colors900,
  gradients,
  col100Bgs,
  col200Bgs,
  col300Bgs,
  col400Bgs,
  col500Bgs,
  col600Bgs,
  col700Bgs,
  col800Bgs,
  col900Bgs,
  shadowsDarkBack,
  shadowsLightBack,
  textStrokeDarkBg,
  textStrokeLightBg,
  textExamples,
  transitions,
} from "./components/data";
import IconButton from "~/components/buildingBlocks/iconButton";
import Box from "~/components/buildingBlocks/box";
import BorderExamples from "./components/borderExamples";
import TransformBg from "./components/transformBgObject";
import { GoSmiley } from "react-icons/go";
import ComponentExamples from "./components/componentExamples";
import Heading from "~/components/buildingBlocks/headingText";
import Text from "~/components/buildingBlocks/text";
import CustomNavLink from "~/components/buildingBlocks/custonNavLink";
import { HomeIcon } from "styles";
import Transition from "~/components/buildingBlocks/transition";

export function StyleExampleBox({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return <Flex className={`px-[1vh] py-[0.5vh] ${className}`}>{text}</Flex>;
}

export function StyledExampleWrap({
  bg = "bg-col-700",
  children,
}: {
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <Wrap
      className={`${bg} px-[1vh] py-[2vh] shadowNarrowNormal gap-y-[2vh] gap-x-[3vh] w-full justify-around`}
    >
      {children}
    </Wrap>
  );
}

export default function Design() {
  function TestBox({
    bg,
    children,
    w = "w-[16vh]",
  }: {
    bg: string;
    children: React.ReactNode;
    w?: string;
  }) {
    const isLightFont =
      bg.startsWith("bg-col-9") ||
      bg.startsWith("bg-col-800") ||
      bg.startsWith("bg-col-700") ||
      bg.startsWith("bg-col-600") ||
      bg.startsWith("bg-col-5");

    const isDarkFont =
      bg.startsWith("bg-col-1") ||
      bg.startsWith("bg-col-2") ||
      bg.startsWith("bg-col-3") ||
      bg.startsWith("bg-col-4");

    const fontColor = isLightFont
      ? `text-col-100  text-stroke-4-col900 textShadow`
      : isDarkFont
      ? `text-col-900  text-stroke-4-col900 lightTextShadow`
      : `text-col-100 textShadow`;

    return (
      <Flex
        className={`h-[5vh] ${w} font-bold ${bg} shadowNarrowNormal ${fontColor} justify-center items-center`}
      >
        <Text>{children}</Text>
      </Flex>
    );
  }

  function SectionHeading({ id, heading }: { id: string; heading: string }) {
    return (
      <>
        <div id={id} className="h-[5.5vh] xl:h-[3.5vh] text-transparent">
          This
        </div>
        <Flex className="w-full justify-center pt-[2vh] pb-[1vh]">
          <Heading
            color="text-col-800 text-stroke-4-col900"
            shadow="textGlow"
            text={heading}
            layout="text-too-big-normal"
            className="px-[2vh]"
          />
        </Flex>
      </>
    );
  }

  const activeStyles = "textGlow";
  const inactiveStyles = "text-shadow";

  return (
    <Transition className="w-full h-full justify-center overflow-y-auto">
      <FlexFull className="h-full overflow-y-auto justify-center">
        <FlexFull className="fixed top-0 left-0 p-[1vh] bg-col-200 z-10 shadowWideLooser">
          <Wrap className="w-full gap-x-[5vh] gap-y-[1vh] justify-around">
            <IconButton icon={HomeIcon} type="smallNormal" to="/" />
            <CustomNavLink
              to="#colorscheme"
              linkText="Colors"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#rgb"
              linkText="RBG"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#gradients"
              linkText="Gradients"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#complexbackgrounds"
              linkText="Complex Backgrounds"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#buttons"
              linkText="Buttons"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#transitions"
              linkText="Transitions"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#shadow"
              linkText="Shadows"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#borders"
              linkText="Borders"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#text"
              linkText="Text"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
            <CustomNavLink
              to="#components"
              linkText="Components"
              activeStyles={activeStyles}
              inactiveStyles={inactiveStyles}
              useHash
            />
          </Wrap>
        </FlexFull>
        <VStackFull
          className="h-fit px-[2vh] pt-[5.5vh] xl:pt-[3.5vh] pb-[2vh]"
          gap="gap-[2vh]"
        >
          <VStackFull gap="gap-[1vh]">
            <SectionHeading id="colorscheme" heading="Color Scheme" />
            <StyledExampleWrap bg="bg-white">
              {allColors.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors100.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors200.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors300.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors400.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors500.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap>
              {colors600.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap bg="bg-col-500">
              {colors700.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap bg="bg-col-500">
              {colors800.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <StyledExampleWrap bg="bg-col-500">
              {colors900.map((color: string, index: number) => (
                <TestBox key={index} bg={color}>
                  {" "}
                  {color}
                </TestBox>
              ))}
            </StyledExampleWrap>
            <SectionHeading id="rgb" heading="RBG Equivalents" />
            <StyledExampleWrap bg="bg-white">
              {allColorsRGB.map(
                (color: { code: string; rgb: string }, index: number) => (
                  <TestBox key={index} bg={color.code} w="w-[30vh]">
                    {" "}
                    {color.rgb}
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="h-fit" gap="gap-[2vh]">
            <SectionHeading id="gradients" heading="Gradients & Opacities" />
            <StyledExampleWrap bg="bg-white">
              {gradients.map((gradient: string, index: number) => (
                <TestBox key={index} bg={gradient} w="w-[24vh]">
                  {" "}
                  {gradient}
                </TestBox>
              ))}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="h-fit" gap="gap-[2vh]">
            <SectionHeading
              id="complexbackgrounds"
              heading="Complex Backgrounds"
            />
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col100Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col100Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    {" "}
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col200Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col200Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    {" "}
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col300Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col300Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    {" "}
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col400Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col100Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col400Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col400Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col500Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col500Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col600Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col600Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col700Bgs"
            />

            <StyledExampleWrap bg="bg-col-500">
              {Object.values(col700Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col800Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col800Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
            <Heading
              isCursive={false}
              color="text-col-900"
              shadow="lightTextShadow"
              layout="text-lg-normal"
              text="col900Bgs"
            />

            <StyledExampleWrap>
              {Object.values(col900Bgs).map(
                (background: string, index: number) => (
                  <TestBox key={index} bg={background} w="w-[24vh]">
                    <TransformBg value={background} />
                  </TestBox>
                )
              )}
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull className="w-90% pb-[3vh]">
            <SectionHeading id="buttons" heading="Buttons" />
            <StyledExampleWrap bg="bg-col-200">
              <Button buttonText="Normal" />{" "}
              <Button type="smallNormal" buttonText="NormalButton" />
              <Button type="negative" buttonText="Negative" />
              <Button type="smallNegative" buttonText="Negative Small" />
              <Button type="unstyled" buttonText="Unstyled" />
              <Button type="smallUnstyled" buttonText="Unstyled Small" />
              <Button buttonText="Normal Icon Left" iconLeft={GoSmiley} />
              <Button
                buttonText="Small Icon Right"
                iconRight={GoSmiley}
                type="smallNormal"
              />
              <Button
                buttonText="Negative Icon Left"
                type="negative"
                iconLeft={GoSmiley}
              />
              <Button
                buttonText="Small Negative Icon Right"
                type="smallNegative"
                iconRight={GoSmiley}
              />
              <IconButton icon={GoSmiley} />{" "}
              <IconButton type="smallNormal" icon={GoSmiley} />
              <IconButton type="negative" icon={GoSmiley} />
              <IconButton type="smallNegative" icon={GoSmiley} />
              <IconButton type="unstyled" icon={GoSmiley} />
              <IconButton type="smallUnstyled" icon={GoSmiley} />
            </StyledExampleWrap>
          </VStackFull>
          <VStackFull>
            <SectionHeading id="transitions" heading="Transitions" />

            <StyledExampleWrap>
              {transitions.map((transition) => (
                <StyleExampleBox
                  key={transition}
                  className="transition-300 bg-col-200 hover:bg-col-900
              hover:text-col-100 shadowNarrowNormal"
                  text={`className='${transition}'`}
                />
              ))}
            </StyledExampleWrap>
            <SectionHeading id="shadow" heading="Shadows" />
            <VStackFull>
              {" "}
              <StyledExampleWrap bg="bg-col-100">
                {shadowsLightBack.map((shadow) => (
                  <Box className={shadow} key={shadow}>
                    <Text className="p-[1vh]">{shadow}</Text>
                  </Box>
                ))}
              </StyledExampleWrap>
              <StyledExampleWrap bg="bg-col-800">
                {shadowsDarkBack.map((shadow) => (
                  <Box className={shadow} key={shadow}>
                    <Text className="text-col-100 p-[1vh]">{shadow}</Text>
                  </Box>
                ))}
              </StyledExampleWrap>
            </VStackFull>
            <SectionHeading id="borders" heading="Borders" />
            <StyledExampleWrap>
              <BorderExamples startIndex={0} endIndex={95} />
            </StyledExampleWrap>
            <StyledExampleWrap bg="bg-col-200">
              <BorderExamples startIndex={96} endIndex={215} />
            </StyledExampleWrap>

            <SectionHeading id="text" heading="Text" />
            <StyledExampleWrap>
              {textExamples.map((textExample, index) => (
                <Box
                  key={index}
                  className="bg-col-500 h-fit text-col-100 shadowNarrowNormal px-[1vh]"
                >
                  <Text className={`${textExample} `}>{textExample}</Text>
                </Box>
              ))}
            </StyledExampleWrap>

            <SectionHeading id="" heading="Text Shadow" />
            <StyledExampleWrap>
              {textShadows.map((shadow, index) => (
                <Box
                  key={index}
                  className={
                    shadow === "textFog"
                      ? "text-col-100 bg-col-200 shadowNarrowNormal p-[1vh]"
                      : "text-col-900 bg-col-200 shadowNarrowNormal p-[1vh]"
                  }
                >
                  <Text className={`${shadow} `}>{shadow}</Text>
                </Box>
              ))}
            </StyledExampleWrap>
            <SectionHeading id="" heading="Text Stroke" />
            <StyledExampleWrap>
              {textStrokeDarkBg.map((combo, index) => (
                <Box key={index} className="font-bold">
                  <Text className={`${combo} text-xxl-normal text-col-700`}>
                    {combo}
                  </Text>
                </Box>
              ))}
            </StyledExampleWrap>

            <StyledExampleWrap bg="bg-col-300">
              {textStrokeLightBg.map((combo, index) => (
                <Box key={index} className="font-bold">
                  <Text className={`${combo} text-xxl-normal text-col-300`}>
                    {combo}
                  </Text>
                </Box>
              ))}
            </StyledExampleWrap>

            <SectionHeading id="components" heading="Components" />
            <StyledExampleWrap bg="bg-col-600">
              <ComponentExamples />
            </StyledExampleWrap>
          </VStackFull>
        </VStackFull>
      </FlexFull>
    </Transition>
  );
}
