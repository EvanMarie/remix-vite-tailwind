/* eslint-disable react/no-unescaped-entities */
import InputDateTime from "~/components/buildingBlocks/inputDateTIme";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <InputDateTime containerHeight="h-[38vh]" />
    </VStackFull>
  );
}
