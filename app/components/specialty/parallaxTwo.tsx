import Box from "../buildingBlocks/box";
import FlexFull from "../buildingBlocks/flexFull";
import VStackFull from "../buildingBlocks/vStackFull";
import HStackFull from "../buildingBlocks/hStackFull";
import Icon from "../buildingBlocks/icon";
import { CgScrollV } from "react-icons/cg";

export default function ParallaxTwo({
  width = "w-[50vh]",
  height = "h-[50vh]",
  imageMargin = "mt-[40vh]",
  showIcon = true,
  children,
  bgImage = "/images/rain.jpg",
  title = "Adventure Calls",
  tagline = "Conquer mountain trails.",
  scrollBackground = "bg-100-linear6op75",
}: {
  width?: string;
  height?: string;
  imageMargin?: string;
  children?: React.ReactNode;
  bgImage?: string;
  title?: string;
  tagline?: string;
  scrollBackground?: string;
  showIcon?: boolean;
}) {
  return (
    <>
      <Box
        className={`${width} ${height} border-970-md overflow-y-scroll bg-[url('${bgImage}')] bg-cover bg-fixed bg-center bg-no-repeat shadowNarrowNormal`}
      >
        <Box className={imageMargin}>
          <VStackFull
            className={`${scrollBackground} text-col-100 shadow3DSm`}
            align="items-start"
          >
            <VStackFull>
              <HStackFull className="justify-between items-center rounded-none p-[1vh] bg-col-960">
                <Box className="text-xl-tight font-cursive textShadow">
                  {title}
                </Box>
                {showIcon && (
                  <Icon icon={CgScrollV} iconClassName="text-[3vh]" />
                )}
              </HStackFull>
            </VStackFull>
            <VStackFull className="px-[1vh] pb-[1vh]">
              <FlexFull className="italic text-lg textShadow">
                {tagline}
              </FlexFull>
              {children}
            </VStackFull>
          </VStackFull>
        </Box>
      </Box>
    </>
  );
}
