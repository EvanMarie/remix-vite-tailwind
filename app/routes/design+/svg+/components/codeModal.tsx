/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { CodeIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Center from "~/components/buildingBlocks/center";
import CodeExample from "~/components/buildingBlocks/codeExample";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Modal from "~/components/buildingBlocks/modal";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { SVGHeading } from "../../components/formattingComponents";

export default function CodeModal({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Box>
        <Button
          iconLeft={CodeIcon}
          onClick={() => setModalOpen(true)}
          buttonText="View Path"
          type="smallNormal"
        />
      </Box>
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-fit max-h-90% sm:w-80% md:w-70% lg:w-60% xl:w-50% 2xl:w-40%"
      >
        <Center className="w-full h-full p-[1vh] text-col-100 bg-col-700 py-[2vh]">
          <VStackFull gap="gap-[2vh]">
            <SVGHeading>{title}</SVGHeading>
            <FlexFull className="h-full justify-center overflow-y-auto p-[2vh]">
              <CodeExample>d="{code}"</CodeExample>
            </FlexFull>
          </VStackFull>
        </Center>
      </Modal>
    </>
  );
}
