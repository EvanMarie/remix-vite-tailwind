/* eslint-disable react/no-unescaped-entities */
import PasswordInput from "~/components/buildingBlocks/passwordInput";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  return (
    <VStackFull className="h-full p-[2vh] bg-col-600 overflow-y-auto">
      <PasswordInput />
    </VStackFull>
  );
}
