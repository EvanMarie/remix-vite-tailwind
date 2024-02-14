import { NavLink } from "@remix-run/react";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import NavContainer from "~/components/buildingBlocks/navContainer";
import Text, {
  HeadingMD,
  HeadingXL,
} from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import {
  StarFilledIcon,
  StarHollowIcon,
  col100Bgs,
  col200Bgs,
  col300Bgs,
  col400Bgs,
  col500Bgs,
  col600Bgs,
  col700Bgs,
  col800Bgs,
  col900Bgs,
} from "styles";
import IconButton from "~/components/buildingBlocks/iconButton";
import Box from "~/components/buildingBlocks/box";
import {
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
} from "./components/colorsBackgrounds";
import BorderExamples from "./components/borderExamples";

export function StyleExampleBox({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return <Flex className={`px-[1vh] py-[0.5vh] ${className}`}>{text}</Flex>;
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
        className={`h-[5vh] ${w} font-bold ${bg} subtleShadow ${fontColor} justify-center items-center`}
      >
        <Text>{children}</Text>
      </Flex>
    );
  }

  function SectionHeading({ id, heading }: { id: string; heading: string }) {
    return (
      <>
        <div id={id} className="h-[2.5vh] text-transparent">
          This
        </div>
        <Flex className="w-full justify-center pt-[2vh] pb-[1vh]">
          <HeadingXL>{heading}</HeadingXL>
        </Flex>
      </>
    );
  }

  return (
    <FlexFull className="h-full overflow-y-auto justify-center">
      <NavContainer className="text-[2.5vh]">
        <NavLink to="#buttons">Buttons</NavLink>
        <NavLink to="#colorscheme">Colors</NavLink>
        <NavLink to="#rgb">RBG</NavLink>
        <NavLink to="#gradients">Grads</NavLink>
        <NavLink to="#complexbackgrounds">BGs</NavLink>
        <NavLink to="#examples">Styles</NavLink>
      </NavContainer>
      <VStackFull
        className="h-fit px-[2vh] pt-[5.5vh] pb-[2vh]"
        gap="gap-[2vh]"
      >
        <VStack className="w-90% pb-[3vh]">
          <SectionHeading id="buttons" heading="Buttons" />
          <Wrap className="w-full gap-[2vh] items-center">
            <Button buttonText="Normal" />{" "}
            <Button type="smallNormal" buttonText="NormalButton" />
            <Button type="negative" buttonText="Negative" />
            <Button type="smallNegative" buttonText="Negative Small" />
            <Button type="unstyled" buttonText="Unstyled" />
            <Button type="smallUnstyled" buttonText="Unstyled Small" />
            <Button buttonText="Normal Icon Left" iconLeft={StarHollowIcon} />
            <Button
              buttonText="Small Icon Right"
              iconRight={StarHollowIcon}
              type="smallNormal"
            />
            <Button
              buttonText="Negative Icon Left"
              type="negative"
              iconLeft={StarHollowIcon}
            />
            <Button
              buttonText="Small Negative Icon Right"
              type="smallNegative"
              iconRight={StarHollowIcon}
            />
            <IconButton icon={StarFilledIcon} />{" "}
            <IconButton type="smallNormal" icon={StarFilledIcon} />
            <IconButton type="negative" icon={StarFilledIcon} />
            <IconButton type="smallNegative" icon={StarFilledIcon} />
            <IconButton type="unstyled" icon={StarFilledIcon} />
            <IconButton type="smallUnstyled" icon={StarFilledIcon} />
          </Wrap>
        </VStack>
        <VStackFull gap="gap-[1vh]">
          <SectionHeading id="colorscheme" heading="Color Scheme" />
          <Wrap className="w-full justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {allColors.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>

          <Wrap className="w-full justify-around gap-[2vh] bg-col-900 p-[1vh]">
            {colors100.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-900 p-[1vh]">
            {colors200.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-900 p-[1vh]">
            {colors300.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-900 p-[1vh]">
            {colors400.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-900 p-[1vh]">
            {colors500.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {colors600.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {colors700.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {colors800.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <Wrap className="w-full justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {colors900.map((color: string, index: number) => (
              <TestBox key={index} bg={color}>
                {" "}
                {color}
              </TestBox>
            ))}
          </Wrap>
          <SectionHeading id="rgb" heading="RBG Equivalents" />
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh]">
            {allColorsRGB.map(
              (color: { code: string; rgb: string }, index: number) => (
                <TestBox key={index} bg={color.code} w="w-[30vh]">
                  {" "}
                  {color.rgb}
                </TestBox>
              )
            )}
          </Wrap>
        </VStackFull>
        <VStackFull className="h-fit" gap="gap-[2vh]">
          <SectionHeading id="gradients" heading="Gradients & Opacities" />
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {gradients.map((gradient: string, index: number) => (
              <TestBox key={index} bg={gradient} w="w-[24vh]">
                {" "}
                {gradient}
              </TestBox>
            ))}
          </Wrap>
        </VStackFull>
        <VStackFull className="h-fit" gap="gap-[2vh]">
          <SectionHeading
            id="complexbackgrounds"
            heading="Complex Backgrounds"
          />
          <HeadingMD cursive={false} color="text-col-100">
            col100Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col100Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col100Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col200Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col200Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col200Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col300Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col300Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col300Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col100Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col100Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col400Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col400Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col400Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col400Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col500Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col500Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col500Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col600Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col600Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col600Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col700Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col700Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col700Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col800Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col800Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col800Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
          <HeadingMD cursive={false} color="text-col-100">
            col900Bgs
          </HeadingMD>
          <Wrap className="w-[90vw] justify-around gap-[2vh] bg-col-100 p-[1vh] mb-[2vh]">
            {Object.values(col900Bgs).map(
              (background: string, index: number) => (
                <TestBox key={index} bg={background} w="w-[24vh]">
                  {" "}
                  col900Bgs.bg{index + 1}
                </TestBox>
              )
            )}
          </Wrap>
        </VStackFull>

        <VStackFull>
          <SectionHeading id="examples" heading="Borders" />
          <Wrap className="bg-col-800 p-[1vh] shadow3D gap-[1vh] w-full justify-around">
            <BorderExamples startIndex={0} endIndex={95} />
          </Wrap>
          <Wrap className="bg-col-300 p-[1vh] shadow3D gap-[1vh] w-full justify-around">
            <BorderExamples startIndex={96} endIndex={215} />
          </Wrap>
          <SectionHeading id="" heading="Transitions" />
          <Wrap className="bg-col-600 p-[1vh] shadow3D gap-[3vh] justify-evenly">
            <StyleExampleBox
              className="transition-300 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-300'"
            />
            <StyleExampleBox
              className="transition-400 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-400'"
            />
            <StyleExampleBox
              className="transition-500 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-500'"
            />
            <StyleExampleBox
              className="transition-600 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-600'"
            />
            <StyleExampleBox
              className="transition-700 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-700'"
            />
            <StyleExampleBox
              className="transition-800 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-800'"
            />
            <StyleExampleBox
              className="transition-900 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-900'"
            />
            <StyleExampleBox
              className="transition-1000 bg-col-200 hover:bg-col-900 hover:text-col-100 subtleShadow"
              text="className='transition-1000'"
            />
          </Wrap>
          <SectionHeading id="" heading="Mixed Styles" />
          <VStackFull className="bg-col-500 p-[1vh] shadow3D">
            <Flex className="bg-col-700-bg-linear1op75 p-[4vh]">THIS</Flex>
            <div className="p-[1vh] bg-gray-400 textGlow">
              This text will have a light text shadow or an HD version on fullHD
              screens.
            </div>
            <div className="lightShadow hover:metallicEdges transition-800 bg-black text-white p-[1vh]">
              This has className="lightShadow hover:metallicEdges
              transition-800"
            </div>
            <Box className="p-[1vh] border-900 bg-col-200">
              This has className="border-900"
            </Box>
            <Flex className="justify-center p-[1vh] shadow3D border-200 text-col-100">
              {" "}
              This has className="shadow3D border-200"
            </Flex>
          </VStackFull>
          <Flex className="bg-300-linear5op25 p-[4vh]">THIS</Flex>
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
