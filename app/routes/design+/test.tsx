/* eslint-disable react/no-unescaped-entities */
import { StarFilledIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/textComponents";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { shadowsDarkBack, shadowsLightBack } from "./components/boxShadows";
import Wrap from "~/components/buildingBlocks/wrap";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <Flex className="p-[1vh] bg-col-500 text-col-100 shadow3D scale-item-lg">
        This
      </Flex>
      <Button
        iconLeft={StarFilledIcon}
        buttonText="this"
        onClick={() => console.log("THIS!")}
      />

      <Flex className="justify-center p-[1vh] shadow3D border-200 text-col-100">
        {" "}
        This has className="shadow3D border-200"
      </Flex>
    </VStackFull>
  );
}
