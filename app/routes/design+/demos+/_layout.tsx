import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
}
