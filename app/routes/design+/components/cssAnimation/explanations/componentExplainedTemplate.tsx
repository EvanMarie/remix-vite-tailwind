import CodeExample from "~/components/buildingBlocks/codeExample";
import DescriptionModalContent from "../descriptionModalContent";
import { CSSHeading, CSSSection, CSSText } from "../../formattingComponents";

export default function ComponentExplainedTemplate() {
  return (
    <DescriptionModalContent heading="heading">
      <CodeExample>code</CodeExample>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
        <CSSSection>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
        <CSSText></CSSText>
        <CSSSection>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
          <CSSText></CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading></CSSHeading>
      <CSSSection>
        <CSSText></CSSText>
      </CSSSection>
    </DescriptionModalContent>
  );
}
