/* eslint-disable react/no-unescaped-entities */
import Box from "~/components/buildingBlocks/box";
import Input from "~/components/buildingBlocks/input";
import InputDateTime from "~/components/buildingBlocks/inputDateTIme";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <InputDateTime containerHeight="h-[38vh]" />
      <Box className="w-[40vh]">
        <Input />
      </Box>
    </VStackFull>
  );
}
