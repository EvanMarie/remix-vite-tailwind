import { NavLink, useLocation } from "@remix-run/react";
import MatchesHash from "~/utils/matchesHash";

interface CustomNavLinkProps {
  to: string;
  linkText?: string;
  activeStyles?: string;
  inactiveStyles?: string;
  useHash?: boolean;
  useActive?: boolean;
}

export default function CustomNavLink({
  to,
  linkText,
  activeStyles,
  inactiveStyles,
  useHash,
  useActive,
}: CustomNavLinkProps) {
  const hash = useLocation().hash;
  console.log(hash);

  return (
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
  );
}
