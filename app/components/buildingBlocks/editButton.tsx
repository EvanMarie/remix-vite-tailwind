import IconButton from "./iconButton";
import { useNavigate } from "@remix-run/react";
import { EditIcon } from "styles";

export default function EditButton({
  editLink,
  pos,
  t,
  b,
  l,
  r,
  className = "",
  style,
  tooltipPlacement = "bottomLeft",
  isMinimal,
  isInteraction,
  iconSize,
  onClick,
}: {
  editLink?: string;
  pos?:
    | "relative"
    | "fixed"
    | "absolute"
    | "sticky"
    | "static"
    | "inherit"
    | undefined;
  t?: string;
  b?: string;
  l?: string;
  r?: string;
  className?: string;
  style?: React.CSSProperties;
  isMinimal?: boolean;
  isInteraction?: boolean;
  iconSize?: string;
  onClick?: () => void;
  tooltipPlacement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
}) {
  const navigate = useNavigate();
  return (
    <IconButton
      label="edit"
      iconSize={iconSize}
      icon={EditIcon}
      pos={pos}
      t={t}
      b={b}
      r={r}
      l={l}
      className={className}
      style={style}
      onClick={onClick ? onClick : () => navigate(editLink || "")}
      tooltipPlacement={tooltipPlacement}
      isMinimal={isMinimal}
      isInteraction={isInteraction}
    />
  );
}
