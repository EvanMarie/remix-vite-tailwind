import { NavLink } from "@remix-run/react";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavContainer from "~/components/buildingBlocks/navContainer";
import Text, {
  HeadingMD,
  HeadingXL,
} from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
import {
  StarHollowIcon,
  border900,
  col100Bgs,
  col200Bgs,
  col300Bgs,
  col400Bgs,
  col500Bgs,
  col600Bgs,
  col700Bgs,
  col800Bgs,
  col900Bgs,
  hoverBorder100,
  lightTextShadow,
  subtleShadow,
  textShadow,
  transition500,
} from "styles";
import Box from "~/components/buildingBlocks/box";

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
      bg.startsWith("bg-col-600");

    const isDarkFont =
      bg.startsWith("bg-col-1") ||
      bg.startsWith("bg-col-2") ||
      bg.startsWith("bg-col-3") ||
      bg.startsWith("bg-col-4") ||
      bg.startsWith("bg-col-5");

    const fontColor = isLightFont
      ? `text-col-100 ${textShadow}`
      : isDarkFont
      ? `text-col-900 ${lightTextShadow}`
      : `text-col-100 ${textShadow}`;

    return (
      <Flex
        className={`h-[5vh] ${w} font-bold ${bg} ${subtleShadow} ${fontColor} justify-center items-center`}
      >
        <Text>{children}</Text>
      </Flex>
    );
  }

  function SectionHeading({ id, heading }: { id: string; heading: string }) {
    return (
      <>
        <div id={id} className="h-[4.5vh] text-transparent">
          This
        </div>
        <Flex className="w-full justify-center pt-[2vh] pb-[1vh]">
          <HeadingXL>{heading}</HeadingXL>
        </Flex>
      </>
    );
  }

  const allColors = [
    "bg-col-100",
    "bg-col-200",
    "bg-col-300",
    "bg-col-400",
    "bg-col-500",
    "bg-col-600",
    "bg-col-700",
    "bg-col-800",
    "bg-col-900",
  ];

  // REQUIRES THEME ADJUSTMENTS
  const allColorsRGB = [
    { code: "bg-col-100", rgb: "rgb(228, 237, 245)" },
    { code: "bg-col-200", rgb: "rgb(208, 226, 242)" },
    { code: "bg-col-300", rgb: "rgb(217, 181, 173)" },
    { code: "bg-col-400", rgb: "rgb(167, 189, 217)" },
    { code: "bg-col-500", rgb: "rgb(84, 123, 171)" },
    { code: "bg-col-600", rgb: "rgb(97, 116, 140)" },
    { code: "bg-col-700", rgb: "rgb(41, 60, 84)" },
    { code: "bg-col-800", rgb: "rgb(1, 42, 94)" },
    { code: "bg-col-900", rgb: "rgb(1, 17, 38)" },
  ];
  const colors100 = [
    "bg-col-100",
    "bg-col-110",
    "bg-col-120",
    "bg-col-130",
    "bg-col-140",
    "bg-col-150",
    "bg-col-160",
    "bg-col-170",
    "bg-col-180",
    "bg-col-190",
  ];
  const colors200 = [
    "bg-col-200",
    "bg-col-210",
    "bg-col-220",
    "bg-col-230",
    "bg-col-240",
    "bg-col-250",
    "bg-col-260",
    "bg-col-270",
    "bg-col-280",
    "bg-col-290",
  ];
  const colors300 = [
    "bg-col-300",
    "bg-col-310",
    "bg-col-320",
    "bg-col-330",
    "bg-col-340",
    "bg-col-350",
    "bg-col-360",
    "bg-col-370",
    "bg-col-380",
    "bg-col-390",
  ];
  const colors400 = [
    "bg-col-400",
    "bg-col-410",
    "bg-col-420",
    "bg-col-430",
    "bg-col-440",
    "bg-col-450",
    "bg-col-460",
    "bg-col-470",
    "bg-col-480",
    "bg-col-490",
  ];
  const colors500 = [
    "bg-col-500",
    "bg-col-510",
    "bg-col-520",
    "bg-col-530",
    "bg-col-540",
    "bg-col-550",
    "bg-col-560",
    "bg-col-570",
    "bg-col-580",
    "bg-col-590",
  ];
  const colors600 = [
    "bg-col-600",
    "bg-col-610",
    "bg-col-620",
    "bg-col-630",
    "bg-col-640",
    "bg-col-650",
    "bg-col-660",
    "bg-col-670",
    "bg-col-680",
    "bg-col-690",
  ];
  const colors700 = [
    "bg-col-700",
    "bg-col-710",
    "bg-col-720",
    "bg-col-730",
    "bg-col-740",
    "bg-col-750",
    "bg-col-760",
    "bg-col-770",
    "bg-col-780",
    "bg-col-790",
  ];
  const colors800 = [
    "bg-col-800",
    "bg-col-810",
    "bg-col-820",
    "bg-col-830",
    "bg-col-840",
    "bg-col-850",
    "bg-col-860",
    "bg-col-870",
    "bg-col-880",
    "bg-col-890",
  ];
  const colors900 = [
    "bg-col-900",
    "bg-col-910",
    "bg-col-920",
    "bg-col-930",
    "bg-col-940",
    "bg-col-950",
    "bg-col-960",
    "bg-col-970",
    "bg-col-980",
    "bg-col-990",
  ];

  const gradients = [
    "bg-linear1",
    "bg-linear1op25",
    "bg-linear1op50",
    "bg-linear1op75",
    "bg-linear2",
    "bg-linear2op25",
    "bg-linear2op50",
    "bg-linear2op75",
    "bg-linear3",
    "bg-linear3op25",
    "bg-linear3op50",
    "bg-linear3op75",
    "bg-linear4",
    "bg-linear4op25",
    "bg-linear4op50",
    "bg-linear4op75",
    "bg-linear5",
    "bg-linear5op25",
    "bg-linear5op50",
    "bg-linear5op75",
    "bg-linear6",
    "bg-linear6op25",
    "bg-linear6op50",
    "bg-linear6op75",
    "bg-diagonal1",
    "bg-diagonal1op25",
    "bg-diagonal1op50",
    "bg-diagonal1op75",
    "bg-diagonal2",
    "bg-diagonal2op25",
    "bg-diagonal2op50",
    "bg-diagonal2op75",
    "bg-diagonal3",
    "bg-diagonal3op25",
    "bg-diagonal3op50",
    "bg-diagonal3op75",
    "bg-diagonal4",
    "bg-diagonal4op25",
    "bg-diagonal4op50",
    "bg-diagonal4op75",
    "bg-diagonal5",
    "bg-diagonal5op25",
    "bg-diagonal5op50",
    "bg-diagonal5op75",
    "bg-diagonal6",
    "bg-diagonal6op25",
    "bg-diagonal6op50",
    "bg-diagonal6op75",
    "bg-radial1",
    "bg-radial1op25",
    "bg-radial1op50",
    "bg-radial1op75",
    "bg-radial2",
    "bg-radial2op25",
    "bg-radial2op50",
    "bg-radial2op75",
    "bg-radial3",
    "bg-radial3op25",
    "bg-radial3op50",
    "bg-radial3op75",
    "bg-radial4",
    "bg-radial4op25",
    "bg-radial4op50",
    "bg-radial4op75",
    "bg-radial5",
    "bg-radial5op25",
    "bg-radial5op50",
    "bg-radial5op75",
    "bg-radial6",
    "bg-radial6op25",
    "bg-radial6op50",
    "bg-radial6op75",
  ];

  return (
    <FlexFull className="h-full overflow-y-auto justify-center">
      <NavContainer>
        <NavLink to="#colorscheme">Color Scheme</NavLink>
        <NavLink to="#rgb">RBG Equivalents</NavLink>
        <NavLink to="#gradients">Gradients</NavLink>
        <NavLink to="#complexbackgrounds">Complex Backgrounds</NavLink>
        <NavLink to="#buttons">Buttons</NavLink>
      </NavContainer>
      <VStackFull
        className="h-fit px-[2vh] pt-[5.5vh] pb-[2vh]"
        gap="gap-[2vh]"
      >
        <VStack className="w-90% pb-[3vh]">
          <SectionHeading id="buttons" heading="Buttons" />
          <Wrap className="w-full gap-[2vh] items-center">
            <button>
              <Box
                className={`p-[1vh] bg-col-300 ${border900} hover:bg-col-700 hover:text-col-100  ${hoverBorder100} ${transition500}`}
              >
                Test
              </Box>
              <IconButton icon={StarHollowIcon} textRight="this" />
            </button>
            <Button>Normal</Button> <Button isSmall>Normal Small</Button>
            <Button isNegative>Negative</Button>
            <Button isNegativeSmall>Negative Small</Button>
            <Button isUnstyled>Unstyled</Button>
            <IconButton icon={StarHollowIcon} />
            <IconButton icon={StarHollowIcon} isSmall />
            <IconButton icon={StarHollowIcon} isNegative />
            <IconButton icon={StarHollowIcon} isNegativeSmall />
            <IconButton icon={StarHollowIcon} isUnstyled />
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

        <FlexFull className=" bg-black">This</FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
