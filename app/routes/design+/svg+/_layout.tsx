import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import SVGNav from "./components/svgNav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <SVGNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
