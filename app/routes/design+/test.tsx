/* eslint-disable react/no-unescaped-entities */
import { StarFilledIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <Flex className="p-[1vh] bg-col-500 text-col-100 shadow3DLg scale-item-lg">
        This
      </Flex>
      <Button
        iconLeft={StarFilledIcon}
        buttonText="this"
        onClick={() => console.log("THIS!")}
      />
    </VStackFull>
  );
}
