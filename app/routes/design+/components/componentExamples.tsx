import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Alert from "~/components/buildingBlocks/alert";
import { Avatar } from "~/components/buildingBlocks/avatar";
import BackgroundImageContainer from "~/components/buildingBlocks/backgroundImageContainer";
import Badge from "~/components/buildingBlocks/badge";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Checkbox from "~/components/buildingBlocks/checkBox";
import DrawerWithButton from "~/components/buildingBlocks/drawerWithButton";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Input from "~/components/buildingBlocks/input";
import InputDateTime from "~/components/buildingBlocks/inputDateTIme";
import TextArea from "~/components/buildingBlocks/textArea";
import Text from "~/components/buildingBlocks/textComponents";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
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
        className={`h-fit ${bg} shadowNarrowLoose ${className}`}
      >
        {headerText && (
          <FlexFull className="px-[1vh] py-[0.5vh] bg-col-970 rounded-b-none">
            <Text className="font-semibold text-col-100 textShadow">
              {headerText}
            </Text>
          </FlexFull>
        )}
        <FlexFull className="px-[1vh] py-[0.5vh] ">{children}</FlexFull>
      </VStack>
    );
  }

  return (
    <Flex className="w-full justify-around items-center">
      <Wrap className="w-full items-center justify-around gap-[3vh]">
        <Button buttonText="Alert" onClick={openAlert} />
        <ComponentContainer headerText="Avatar">
          <Avatar src="/images/fallbackAvatar.png" size="xxl" />
        </ComponentContainer>
        <BackgroundImageContainer
          w="w-[15vh]"
          image="/images/fallbackAvatar.png"
          containerClassName="shadowNarrowTight"
        >
          <Text className="font-bold text-col-100 textFog">
            Background Image
          </Text>
        </BackgroundImageContainer>
        <Badge label="Badge" />
        <ComponentContainer>
          <VStack>
            <Checkbox label="Checkbox" />
            <Checkbox label="Disabled" isDisabled />
            <Checkbox label="Checked" isChecked />
          </VStack>
        </ComponentContainer>
        <ComponentContainer headerText="Date Time Picker">
          <InputDateTime containerHeight="h-[38vh]" />
        </ComponentContainer>
        <ComponentContainer headerText="Drawer With Button">
          <VStackFull>
            <HStackFull className="justify-between">
              <Text>right</Text>
              <DrawerWithButton icon={BiMenu} buttonType="smallNormal" />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>top-right</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="top-right"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>bottom-right</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="bottom-right"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>top-center</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="top-center"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>left</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="left"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>top-left</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="top-left"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>bottom-left</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="bottom-left"
                buttonType="smallNormal"
              />
            </HStackFull>
            <HStackFull className="justify-between">
              <Text>bottom-center</Text>
              <DrawerWithButton
                icon={BiMenu}
                slideDirection="bottom-center"
                buttonType="smallNormal"
              />
            </HStackFull>
          </VStackFull>
        </ComponentContainer>
        <VStackFull gap="gap-[2vh]">
          {" "}
          <ComponentContainer headerText="Input">
            <Box className="w-[25vh]">
              <Input />
            </Box>
          </ComponentContainer>
          <ComponentContainer headerText="TextArea">
            <Box className="w-[25vh]">
              <TextArea />
            </Box>
          </ComponentContainer>
        </VStackFull>
      </Wrap>

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
    </Flex>
  );
}
