import { HomeIcon, ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import HStack from "~/components/buildingBlocks/hStack";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function DemoNav() {
  return (
    <HStack className=" fixed top-[0.5vh] left-[0.5vh] bg-col-930 border-900-md shadowBroadLoose gap-[0px] z-10 cursor-pointer">
      <Box className="p-[0.5vh] hover:bg-col-900 transition-400">
        <NavIconButton
          icon={HomeIcon}
          to="/"
          label="home"
          type="unstyled"
          iconClassName="text-col-400 hover:text-col-100 transition-400"
        />
      </Box>
      <Box className="p-[0.5vh] hover:bg-col-900 transition-400">
        <NavIconButton
          icon={ReturnPathIcon}
          to="/design/demos"
          label="demos"
          type="unstyled"
          iconClassName="text-col-400 hover:text-col-100 transition-400"
        />
      </Box>
    </HStack>
  );
}
