import { NavLink, useLocation } from "@remix-run/react";
import MatchesHash from "~/utils/matchesHash";
import Box from "./box";

interface CustomNavLinkProps {
  to: string;
  linkText?: string;
  activeStyles?: string;
  inactiveStyles?: string;
  useHash?: boolean;
  useActive?: boolean;
  className?: string;
}

export default function CustomNavLink({
  to,
  linkText,
  activeStyles,
  inactiveStyles = "",
  useHash,
  useActive,
  className,
}: CustomNavLinkProps) {
  const hash = useLocation().hash;
  console.log(hash);

  return (
    <Box className={className}>
      <NavLink
        to={to}
        className={
          useActive
            ? ({ isActive }) => (isActive ? activeStyles : inactiveStyles)
            : useHash
            ? MatchesHash({ linkName: to })
              ? activeStyles
              : inactiveStyles
            : undefined
        }
      >
        {linkText}
      </NavLink>
    </Box>
  );
}
