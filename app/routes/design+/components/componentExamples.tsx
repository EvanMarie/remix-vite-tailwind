import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ExpandIcon } from "styles";
import { DrawerSlideDirection } from "types";
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
import InputVStack from "~/components/buildingBlocks/inputVStack";
import ModalWithButton from "~/components/buildingBlocks/modalWithButton";
import PasswordInput from "~/components/buildingBlocks/passwordInput";
import Popover from "~/components/buildingBlocks/popover";
import Text from "~/components/buildingBlocks/text";
import TextArea from "~/components/buildingBlocks/textArea";
import TextAreaVStack from "~/components/buildingBlocks/textAreaVStack";
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

  const drawerTypes = [
    "right",
    "top-right",
    "bottom-right",
    "bottom-center",
    "left",
    "bottom-left",
    "top-left",
    "top-center",
  ];

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
            {drawerTypes.map((type) => (
              <HStackFull key={type} className="justify-between">
                <Text>{type}</Text>
                <DrawerWithButton
                  icon={BiMenu}
                  buttonType="smallNormal"
                  slideDirection={type as DrawerSlideDirection}
                >
                  <FlexFull className="h-full justify-center items-center">
                    <Text className="text-xxl-loose text-col-100 textShadow">
                      {type}
                    </Text>
                  </FlexFull>
                </DrawerWithButton>
              </HStackFull>
            ))}
          </VStackFull>
        </ComponentContainer>
        <VStack gap="gap-[2vh]">
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
        </VStack>
        <VStack gap="gap-[2vh]">
          {" "}
          <ComponentContainer headerText="InputVStack">
            <Box className="w-[25vh]">
              <InputVStack label="Input Label" />
            </Box>
          </ComponentContainer>
          <ComponentContainer headerText="TextAreaVStack">
            <Box className="w-[25vh]">
              <TextAreaVStack label="Text Area Label" />
            </Box>
          </ComponentContainer>
        </VStack>
        <ComponentContainer headerText="Modal" className="w-[20vh] h-[10vh]">
          <FlexFull className="justify-center">
            <ModalWithButton icon={ExpandIcon}>
              <FlexFull className="h-full bg-col-700 justify-center items-center rounded-b-none">
                <Text className="text-mega-normal text-col-100 textShadow">
                  This is a lovely Modal!
                </Text>
              </FlexFull>
            </ModalWithButton>
          </FlexFull>
        </ComponentContainer>
        <ComponentContainer headerText="Password Input" className="w-[40vh]">
          <PasswordInput />
        </ComponentContainer>
        <ComponentContainer headerText="Popover" className="w-[30vh]">
          <FlexFull className="justify-center">
            <Popover
              trigger={<Button buttonText="popover" />}
              content={<Flex>I am the content</Flex>}
              heading="Popover Heading"
            />
          </FlexFull>
        </ComponentContainer>
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
