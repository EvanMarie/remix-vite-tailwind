import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import ToggleSwitch from "~/components/buildingBlocks/toggleSwitch";

export default function Test() {
  return (
    <CenterFull>
      <Center className="w-[30vh] h-[20vh] bg-col-140">
        <ToggleSwitch />
      </Center>
    </CenterFull>
  );
}
