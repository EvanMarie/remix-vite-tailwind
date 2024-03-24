import { useState } from "react";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import ToggleSwitch from "~/components/buildingBlocks/toggleSwitch";

export default function Test() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <CenterFull>
      <Center className="w-[30vh] h-[20vh] bg-col-140">
        <ToggleSwitch
          toggleOn={toggleOn}
          setToggleOn={setToggleOn}
          labelOn="Sound On"
          labelOff="Sound Off"
        />
      </Center>
    </CenterFull>
  );
}
