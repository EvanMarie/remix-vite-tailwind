/* eslint-disable react/no-unescaped-entities */
import { BiMenu } from "react-icons/bi";
import ModalWithButton from "~/components/buildingBlocks/modalWithButton";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <ModalWithButton icon={BiMenu} />
    </VStackFull>
  );
}
