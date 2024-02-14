/* eslint-disable react/no-unescaped-entities */
import { StarFilledIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/textComponents";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function TextRoute() {
  const textBg = "bg-col-200 px-[1vh]";
  return (
    <VStackFull className="h-full justify-center p-[2vh] bg-col-600">
      <Flex className="p-[1vh] bg-col-500 text-col-100 shadow3D scale-item-lg">
        This
      </Flex>
      <Button
        iconLeft={StarFilledIcon}
        buttonText="this"
        onClick={() => console.log("THIS!")}
      />
      <VStackFull className={`lightGlow`}>
        <Text className={`text-xs-tight ${textBg}`}>text-xs-tight</Text>
        <Text className={`text-xs-normal ${textBg}`}>text-xs-normal</Text>
        <Text className={`text-xs-loose  ${textBg}`}>text-xs-loose</Text>
        <Text className={`text-sm-tight ${textBg}`}>text-sm-tight</Text>
        <Text className={`text-md-tight ${textBg}`}>text-md-tight</Text>
        <Text className={`text-lg-tight ${textBg}`}>text-lg-tight</Text>
        <Text className={`text-xl-tight ${textBg}`}>text-xl-tight</Text>
        <Text className={`text-xxl-tight ${textBg}`}>text-xxl-tight</Text>
        <Text className={`text-xxxl-tight ${textBg}`}>text-xxxl-tight</Text>
        <Text className={`text-mega-tight ${textBg}`}>text-mega-tight</Text>
        <Text className={`text-too-big-tight ${textBg}`}>
          text-too-big-tight
        </Text>
        <Text className={`text-insane-tight ${textBg}`}>text-insane-tight</Text>
      </VStackFull>
      <Flex className="justify-center p-[1vh] shadow3D border-200 text-col-100">
        {" "}
        This has className="shadow3D border-200"
      </Flex>
    </VStackFull>
  );
}
