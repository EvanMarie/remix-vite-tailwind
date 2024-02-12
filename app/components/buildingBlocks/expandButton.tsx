import IconButton from "./iconButton";
import { NavLink } from "@remix-run/react";
import { ExpandIcon } from "styles";
import type { TooltipPlacement } from "./tooltip";

export default function ExpandButton({
  expandLink,
  pos,
  t,
  b,
  l,
  r,
  className = "",
  style,
  tooltipPlacement = "top",
}: {
  expandLink: string;
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
  tooltipPlacement?: TooltipPlacement;
  style?: React.CSSProperties;
}) {
  return (
    <NavLink to={expandLink}>
      <IconButton
        label="expand"
        icon={ExpandIcon}
        pos={pos}
        t={t}
        b={b}
        r={r}
        l={l}
        className={className}
        style={style}
        tooltipPlacement={tooltipPlacement}
      />
    </NavLink>
  );
}
