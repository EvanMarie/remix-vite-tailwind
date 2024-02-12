import Button from "./button";

export function CloseTextButton({
  onClose,
  className,
  isSmall,
}: {
  onClose: () => void;
  className?: string;
  isSmall?: boolean;
}) {
  return (
    <Button
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }}
      isSmall={isSmall}
      className={`${className}`}
      w="w-fit"
    >
      Close
    </Button>
  );
}
