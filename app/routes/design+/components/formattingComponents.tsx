import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export function CSSHeading({ children }: { children?: React.ReactNode }) {
  const headingStyles = "text-xl-loose font-semibold lightTextShadow";
  return <Text className={headingStyles}>{children}</Text>;
}

export function CSSText({ children }: { children?: React.ReactNode }) {
  const svgTextStyles = "text-lg-normal";
  return <Text className={svgTextStyles}>{children}</Text>;
}

export function CSSSection({ children }: { children?: React.ReactNode }) {
  const sectionStyles =
    "bg-col-980 text-col-100 px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";
  return (
    <VStackFull className={sectionStyles} align="items-start">
      {children}
    </VStackFull>
  );
}

export function SVGHeading({ children }: { children?: React.ReactNode }) {
  const svgHeadingStyles =
    "text-xl-loose font-semibold textShadow text-col-100";
  return <Text className={svgHeadingStyles}>{children}</Text>;
}

export function SVGText({ children }: { children?: React.ReactNode }) {
  const svgTextStyles = "text-lg-normal";
  return <Text className={svgTextStyles}>{children}</Text>;
}

export function SVGSection({ children }: { children?: React.ReactNode }) {
  const svgSectionStyles =
    "bg-col-890 text-col-100 px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";
  return (
    <VStackFull className={svgSectionStyles} align="items-start">
      {children}
    </VStackFull>
  );
}
