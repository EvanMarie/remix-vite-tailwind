/* eslint-disable react/no-unescaped-entities */
import DescriptionModalContent from "../descriptionModalContent";
import CodeExample from "~/components/buildingBlocks/codeExample";
import {
  CSSHeading,
  CSSSection,
  CSSText,
} from "../../../components/formattingComponents";
import HL from "../../../components/highlight";

export default function FlashcardExplained() {
  return (
    <DescriptionModalContent heading="3D Flashcard">
      <CSSSection>
        <CodeExample>
          {`export default function FlashCard() {
  const cardDimensions = "h-[35vh] w-[40vh]";
  return (
    <Box className="perspective-100 group">
      <Box
        className={\`\${cardDimensions} transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180\`}
      >
        <Center className="h-full w-full absolute inset-0 bg-col-800 text-col-100 textShadow backface-hidden shadowBroadLoose text-xl-normal">
          Front Content
        </Center>
        <Center className="h-full w-full absolute inset-0 bg-col-500 text-col-100 textShadow backface-hidden rotate-y-180 shadowBroadLoose text-xl-normal">
          Back Content
        </Center>
      </Box>
    </Box>
  );
}`}
        </CodeExample>
      </CSSSection>
      <CSSHeading>1. Setting Up the Perspective</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>perspective-100 group</HL>: The outer Box uses a custom utility
          class <HL>perspective-100</HL>, which has been added to the Tailwind
          configuration to apply a perspective: 100vh; style. This property
          affects the child elements, giving the 3D flip effect a more profound
          depth. The <HL>group</HL> class is used to establish a context for
          targeting child elements when the group is hovered.
        </CSSText>
      </CSSSection>
      <CSSHeading>2. Configuring the Card Container</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>
            relative h-[35vh] w-[40vh] transition-transform duration-1000
            transform-style-3d group-hover:rotate-y-180
          </HL>
          : This set of classes configures the card's container.
        </CSSText>
        <CSSSection>
          <CSSText>
            <HL>relative</HL>: Positions the card container relatively, allowing
            absolutely positioned child elements (front and back faces) to be
            positioned relative to this container.
          </CSSText>
          <CSSText>
            <HL>h-[35vh] w-[40vh]</HL>: These classes set the height and width
            of the card using viewport units, making the card responsive to the
            viewport size.
          </CSSText>
          <CSSText>
            <HL>transition-transform</HL>: Applies a transition effect to the
            transform property, ensuring changes (like rotation) occur smoothly
            over time.
          </CSSText>
          <CSSText>
            <HL>duration-1000</HL>: Sets the duration of the transition effect
            to 1000 milliseconds (1 second), making the flip animation neither
            too fast nor too slow.
          </CSSText>
          <CSSText>
            <HL>transform-style-3d</HL>: A custom utility class that applies
            transform-style: preserve-3d;, enabling child elements to be
            positioned in 3D space.
          </CSSText>
          <CSSText>
            <HL>group-hover:rotate-y-180</HL>: This class applies a rotation of
            180 degrees along the Y-axis to the card container when the outer
            group (Box) is hovered. This is what triggers the flip effect.
          </CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading>3. Creating the Front and Back Faces</CSSHeading>
      <CSSSection>
        <CSSText>
          Both the front and back content use similar classes with key
          differences for the back face:
        </CSSText>
        <CSSText>
          <HL>h-full w-full absolute inset-0 backface-hidden</HL> (Front
          Content) and{" "}
          <HL>h-full w-full absolute inset-0 backface-hidden rotate-y-180</HL>{" "}
          (Back Content):
        </CSSText>
        <CSSSection>
          <CSSText>
            <HL>h-full and w-full</HL>: Make each face cover the entire area of
            the card container.
          </CSSText>
          <CSSText>
            <HL>absolute inset-0</HL>: Position the faces absolutely within the
            card container, filling it completely due to inset-0.
          </CSSText>
          <CSSText>
            <HL>backface-hidden</HL>: A custom utility class that applies
            backface-visibility: hidden;, preventing the side of the card not
            facing the viewer from being visible, especially during the flip.
          </CSSText>
          <CSSText>
            <HL>rotate-y-180</HL> (Back Content only): Initially rotates the
            back face 180 degrees along the Y-axis, making it face away from the
            viewer until the card is flipped.
          </CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading>4. Summary</CSSHeading>
      <CSSSection>
        <CSSText>
          By combining TailwindCSS's utility classes with custom configurations,
          the 3D FlashCard component achieves a visually engaging 3D flip
          effect. This effect is responsive and interactive, adding a
          sophisticated look and feel to the UI with smooth transitions and a
          clear distinction between the front and back faces. Tailwind's
          utility-first design philosophy allows for creating such intricate
          effects with concise and readable class names, making the code easier
          to maintain and understand.
        </CSSText>
      </CSSSection>
    </DescriptionModalContent>
  );
}
