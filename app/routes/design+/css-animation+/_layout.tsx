import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import CSSNav from "../components/cssAnimation/cssNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <CSSNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
