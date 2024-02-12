import { CloseIcon } from "styles";
import IconButton from "./iconButton";

export function CloseButton({
  onClose,
  className,
  isSmall = false,
  isUnstyled = false,
  pos = "absolute",
  buttonRadius,
  iconSize = "text-[2.5vh]",
  t = "top-1 quadHD:top-2 ultraHD:top-3",
  r = "right-1 quadHD:right-2 ultraHD:right-3",
  l,
  b,
}: {
  onClose: () => void;
  className?: string;
  isSmall?: boolean;
  isUnstyled?: boolean;
  iconSize?: string;
  buttonRadius?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit";
  t?: string;
  l?: string;
  r?: string;
  b?: string;
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
      pos={pos}
      t={t}
      r={r}
      l={l}
      b={b}
      className={`z-10 ${className}`}
      tooltipPlacement="left"
      isSmall={isSmall}
      isUnstyled={isUnstyled}
      iconSize={iconSize}
      buttonRadius={buttonRadius}
    />
  );
}
