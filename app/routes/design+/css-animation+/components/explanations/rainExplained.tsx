/* eslint-disable react/no-unescaped-entities */
import CodeExample from "~/components/buildingBlocks/codeExample";
import {
  CSSHeading,
  CSSSection,
  CSSText,
} from "../../../components/formattingComponents";
import DescriptionModalContent from "../descriptionModalContent";
import HL from "../../../components/highlight";

export default function RainExplained() {
  return (
    <DescriptionModalContent heading="Animated Rain">
      <CSSSection>
        <CodeExample>
          {`export default function Rain({
  rainColor = "bg-cyan-400",
  numDrops = 75,
}: {
  rainColor?: string;
  numDrops?: number;
}) {
  return (
    <Box className="relative w-full h-full overflow-hidden border-970-md">
      {Array.from({ length: numDrops }).map((_, index) => {
        // Generate random width and height within specified ranges
        const width = Math.max(0.13, Math.random() * 0.4); 
        const height = 0.1 + Math.random() * 1.3; 

        return (
          <div
            key={index}
            className={\`absolute \`\${rainColor} animate-rain shadow-lg rounded-raindrop\`}
            style={{
              width: \`\${width}vh\`,
              height: \`\${height}vh\`, 
              animationDuration: \`\${0.5 + Math.random() * 3}s\`, 
              animationDelay: \`\${Math.random() * 2}s\`, 
              top: \`-4rem\`, // Start above the container to ensure a smooth entrance
              left: \`\${Math.random() * 100}%\`, 
            }}
          ></div>
        );
      })}
    </Box>
  );
}`}
        </CodeExample>
      </CSSSection>

      <CSSHeading>1. Component Structure and Props</CSSHeading>
      <CSSSection>
        <CSSText>Props: The component accepts two optional props:</CSSText>
        <CSSSection>
          <CSSText>
            <HL>rainColor</HL>: A string that sets the color of the raindrops
            using Tailwind CSS color utilities. It defaults to "bg-cyan-400",
            giving the raindrops a cyan color.
          </CSSText>
          <CSSText>
            <HL>numDrops</HL>: A number specifying the total count of raindrops
            to be generated. It defaults to 75, striking a balance between
            visual density and performance.
          </CSSText>
        </CSSSection>
        <CSSText>
          <HL>Box Container</HL>: The Box component acts as the container for
          the raindrops. It's styled to be full width and height, with overflow
          hidden to ensure that any raindrops moving outside its bounds are not
          visible. This creates the illusion that rain is falling within the
          container's confines.
        </CSSText>
      </CSSSection>

      <CSSHeading>2. Dynamic Raindrop Generation</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>Raindrop Elements</HL>: making an array of the number of drops,
          the component dynamically generates an array of numDrops elements.
          Each element is represented by a div with styles and classes applied
          to simulate a raindrop.
        </CSSText>
        <CSSText>
          <HL>Random Sizes</HL>: The width and height of each raindrop are
          randomized within specified ranges to create variability among the
          raindrops. This is achieved through JavaScript's Math.random()
          function, ensuring each raindrop appears unique.
        </CSSText>
        <CSSText>
          <HL>Styling</HL>: Raindrops are absolutely positioned within the
          container, allowing them to move independently. The rainColor prop is
          used to dynamically assign a background color class from Tailwind CSS.
          Additional classes like shadow-lg and a custom rounded-raindrop class
          (defined in the project's Tailwind configuration) are applied to
          enhance the visual appearance of the raindrops.
        </CSSText>
      </CSSSection>
      <CSSHeading>3. Animation</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>CSS Animation</HL>: The animate-rain class applies a custom CSS
          animation (defined elsewhere in the project) to each raindrop, making
          it fall from the top of the container to the bottom. This simulates
          the falling motion of rain.
        </CSSText>
        <CSSText>
          <HL>Random Animation Properties</HL>: Each raindrop's animation
          duration and delay are randomized to create a more natural and less
          uniform falling effect. This prevents all raindrops from falling at
          the same speed and starting at the same time.
        </CSSText>
        <CSSText>
          <HL>Inline Style Customization</HL>: The randomization of width,
          height, animation duration, and delay, along with the raindrop's
          starting position (top: -4rem to start above the viewable area) and
          horizontal position (left), are applied directly through inline styles
          for each raindrop.
        </CSSText>
      </CSSSection>
      <CSSHeading>4. Conclusion</CSSHeading>
      <CSSSection>
        <CSSText>
          The Rain component exemplifies how to use React with Tailwind CSS to
          create dynamic, customizable, and visually appealing effects. Using
          Tailwind's utility classes for styling and incorporating randomness in
          size, position, and animation, the component achieves a lifelike
          simulation of rainfall. This component not only enhances the visual
          experience of a web application but also demonstrates the power of
          combining React's component-based architecture with Tailwind CSS's
          styling capabilities.
        </CSSText>
      </CSSSection>
    </DescriptionModalContent>
  );
}
