import { CloseIcon } from "styles";
import IconButton from "./iconButton";

export function CloseButton({
  onClose,
  className,
  iconClassName = "text-[2.5vh]",
}: {
  onClose: () => void;
  className?: string;
  iconClassName?: string;
  buttonRadius?: string;
}) {
  return (
    <IconButton
      label="close"
      icon={CloseIcon}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }}
      containerClassName={`z-10 ${className}`}
      tooltipPlacement="left"
      iconClassName={iconClassName}
    />
  );
}
