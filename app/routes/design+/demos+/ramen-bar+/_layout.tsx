import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function RamenLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/demo_images/moth_ramen_tokyo.png')] bg-center bg-cover ">
      <Outlet />
    </LayoutContainer>
  );
}
