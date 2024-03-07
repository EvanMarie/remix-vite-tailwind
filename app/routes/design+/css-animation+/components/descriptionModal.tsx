import { useState } from "react";
import { InfoIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import IconButton from "~/components/buildingBlocks/iconButton";
import Modal from "~/components/buildingBlocks/modal";

export default function DescriptionModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Box className="absolute bottom-[1vh] right-[1vh]">
        <IconButton
          icon={InfoIcon}
          onClick={() => setModalOpen(true)}
          iconClassName="text-[2vh]"
        />
      </Box>
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-full lg:w-80% h-90% xl:w-70% xxl:w-60%"
      >
        {children}
      </Modal>
    </>
  );
}
