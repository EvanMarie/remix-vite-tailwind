import { useRef, useState } from "react";
import Alert from "~/components/buildingBlocks/alert";
import { Avatar } from "~/components/buildingBlocks/avatar";
import BackgroundImageContainer from "~/components/buildingBlocks/backgroundImageContainer";
import Badge from "~/components/buildingBlocks/badge";
import Button from "~/components/buildingBlocks/button";
import Checkbox from "~/components/buildingBlocks/checkBox";
import Text from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import Wrap from "~/components/buildingBlocks/wrap";

export default function ComponentExamples() {
  const onConfirm = () => {
    console.log("confirmed");
    setIsAlertOpen(false);
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  function ComponentContainer({
    children,
    className,
    bg = "bg-col-200",
    headerText,
  }: {
    children?: React.ReactNode;
    className?: string;
    bg?: string;
    headerText?: string;
  }) {
    return (
      <VStack
        gap="gap-[0px]"
        className={`p-[1vh] h-fit ${bg} shadowNarrowTight ${className}`}
      >
        <Text>{headerText}</Text>
        {children}
      </VStack>
    );
  }

  return (
    <Wrap className="w-full justify-around gap-y-[3vh] items-center">
      <Button buttonText="Alert" onClick={openAlert} />
      <ComponentContainer headerText="Avatar">
        <Avatar src="/images/fallbackAvatar.png" size="xxl" />
      </ComponentContainer>

      <BackgroundImageContainer
        w="w-[15vh]"
        image="/images/fallbackAvatar.png"
        containerClassName="shadowNarrowTight"
      >
        <Text className="font-bold text-col-100 textFog">Background Image</Text>
      </BackgroundImageContainer>
      <Badge label="Badge" />
      <ComponentContainer headerText="Checkbox">
        <Checkbox label="Checkbox" />
        <Checkbox label="Disabled" isDisabled />
        <Checkbox label="Checked" isChecked />
      </ComponentContainer>

      {isAlertOpen && (
        <Alert
          isAlertOpen={isAlertOpen}
          title="You sure?"
          body={`Please confirm this important thing?`}
          confirmButtonText="Yes!"
          cancelButtonText="Cancel"
          alertDimensions="h-50% w-90% md:w-[60vh]"
          bodyClassName="justify-evenly py-[2vh]"
          onClose={closeAlert}
          cancelRef={cancelRef}
          onConfirmClick={() => onConfirm()}
          bodyTextSize="text-[2.5vh]"
        />
      )}
    </Wrap>
  );
}
