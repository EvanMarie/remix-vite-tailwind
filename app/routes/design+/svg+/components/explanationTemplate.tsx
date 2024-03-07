import CodeExample from "~/components/buildingBlocks/codeExample";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import DescriptionModalContent from "~/routes/css+/components/descriptionModalContent";
import {
  SVGHeading,
  SVGSection,
  SVGText,
} from "~/components/main/formattingComponents";

export default function ExplanationTemplate() {
  return (
    <DescriptionModalContent heading="heading">
      <CodeExample>code</CodeExample>
      <SVGHeading></SVGHeading>
      <SVGSection>
        <SVGText></SVGText>
      </SVGSection>
      <SVGHeading></SVGHeading>
      <SVGSection>
        <SVGText></SVGText>
        <SVGSection>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
        </SVGSection>
      </SVGSection>
      <SVGHeading></SVGHeading>
      <SVGSection>
        <SVGText></SVGText>
        <SVGText></SVGText>
        <SVGSection>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
          <SVGText></SVGText>
        </SVGSection>
      </SVGSection>
      <SVGHeading></SVGHeading>
      <SVGSection>
        <SVGText></SVGText>
      </SVGSection>
    </DescriptionModalContent>
  );
}
