import { useRef, useState } from "react";
import Alert from "~/components/buildingBlocks/alert";
import { Avatar } from "~/components/buildingBlocks/avatar";
import Button from "~/components/buildingBlocks/button";

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
  return (
    <>
      <Button buttonText="Alert" onClick={openAlert} />
      <Avatar src="/fallbackImage.png" size="xl" />

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
    </>
  );
}
