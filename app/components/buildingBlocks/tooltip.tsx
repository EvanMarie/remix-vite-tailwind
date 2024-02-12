import React, { useState } from "react";
import Transition from "./transition";
import { subtleShadow, leading, lightTextShadow } from "styles";

export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "topLeftCorner"
  | "topRightCorner";

interface TooltipProps {
  label?: string | null;
  bg?: string; // e.g., 'bg-red-500'
  color?: string; // e.g., 'text-white'
  w?: string; // Tailwind width classes e.g., 'w-auto'
  fontSize?: string; // e.g., 'text-base'
  children?: React.ReactNode;
  placement?: TooltipPlacement;
  displacementPercentage?: string; // Custom calculation may be needed
  className?: string;
}

export default function Tooltip({
  label,
  bg = "bg-dt-200",
  color = "text-dt-900",
  w = "w-auto",
  children,
  placement = "bottomRight",
  className = "",
}: TooltipProps) {
  const [isHovered, setHovered] = useState(false);

  let placementStyles;
  switch (placement) {
    case "top":
      placementStyles = `bottom-full left-1/2 transform -translate-x-1/2`;
      break;
    case "bottom":
      placementStyles = `top-full left-1/2 transform -translate-x-1/2`;
      break;
    case "topLeftCorner":
      placementStyles = `right-full top-[0.1vh] transform -translate-y-1/2`;
      break;
    case "topRightCorner":
      placementStyles = `left-full top-[0.5vh] transform -translate-y-1/2`;
      break;
    case "left":
      placementStyles = `right-full top-1/2 transform -translate-y-1/2`;
      break;
    case "right":
      placementStyles = `left-full top-1/2 transform -translate-y-1/2`;
      break;
    case "topLeft":
      placementStyles = `bottom-full right-0`;
      break;
    case "topRight":
      placementStyles = `bottom-full left-0`;
      break;
    case "bottomLeft":
      placementStyles = `top-full right-0`;
      break;
    case "bottomRight":
      placementStyles = `top-full left-0`;
      break;
    default:
      placementStyles = "";
  }

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(false)}
        onKeyDown={(e) => {
          // Add a keydown event handler
          if (e.key === "Enter" || e.key === " ") {
            setHovered(false);
          }
        }}
        tabIndex={0} // Make the div focusable
        role="button" // Indicate that the div is a button
      >
        {/* Child Element */}
        {children}
        {/* Tooltip */}
        {isHovered && label && (
          <div
            className={`absolute ${placementStyles} p-[0.5vh]`}
            onMouseLeave={() => setHovered(false)}
          >
            <Transition>
              <div
                className={`text-[1.8vh] ${leading.smTight} lightTextShadow justify-center px-2 py-[0px] pt-[0.1vh] pb-[0px] z-30 ${w} ${bg} ${color} font-semibold subtleShadow whitespace-nowrap`}
              >
                {label}
              </div>
            </Transition>
          </div>
        )}
      </div>
    </div>
  );
}
