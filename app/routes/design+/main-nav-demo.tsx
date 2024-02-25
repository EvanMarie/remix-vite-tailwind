import FlexFull from "~/components/buildingBlocks/flexFull";
import MainNavDemo from "./components/mainNavDemo";
import Flex from "~/components/buildingBlocks/flex";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ReturnPathIcon } from "styles";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function MainNavDemoPage() {
  return (
    <VStackFull>
      <VStackFull className="absolute top-0 left-0">
        <FlexFull>
          <MainNavDemo />
        </FlexFull>
      </VStackFull>
      <Flex className="w-[20vh] h-[20vh] justify-center items-center">
        <IconButton icon={ReturnPathIcon} to="/design#components" />
      </Flex>
      {/* <Box className="w-40vh h-[20vh] bg-red-200">This</Box> */}
    </VStackFull>
  );
}
