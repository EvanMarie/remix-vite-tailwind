/* eslint-disable react/no-unescaped-entities */
import CodeExample from "~/components/buildingBlocks/codeExample";
import { CSSHeading, CSSSection, CSSText } from "../../formattingComponents";
import DescriptionModalContent from "../descriptionModalContent";
import HL from "../../highlight";

export default function FlowerOfLifeExplained() {
  return (
    <DescriptionModalContent heading="Pulsating Flower of Life">
      <CSSSection>
        <CodeExample>{`export default function FlowerOfLife() {
    const radius = 23; // Determines circle size
    const centerX = 55; // Central X position within SVG coordinate system (must be half of viewbox width)
    const centerY = 55; // Central Y position
    const encompassingRadius = 2 * radius; // Radius for the encompassing circle

    // Convert numerical values for SVG attributes, keeping the SVG scalable
    const smallCircleColor = "deeppink";
    const largerCircleColor = "cyan";
    return (
        <Center className="w-fit h-fit">
    <svg
    viewBox="0 0 110 110" // Adjusted for a scalable drawing area
    width="50vw"
    height="50vw"
    className="border-970-md bg-900-linear6op75 shadowBroadNormal"
    >
    {/* Large Encompassing Circle */}
    <circle
        cx={centerX}
        cy={centerY}
        r={encompassingRadius}
        fill="none"
        stroke={largerCircleColor}
        strokeWidth="0.6"
        className="text-col-600 shadowBroadNormal animate-[pulse_3s_ease-in-out_infinite]"
    />
    {/* Central Circle */}
    <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={smallCircleColor}
        strokeWidth="0.5" // Adjust stroke width for visibility
        className="text-col-600 shadowBroadNormal animate-[pulse_2.5s_ease-in-out_infinite]"
    />
    {/* Surrounding Circles */}
    {[0, 60, 120, 180, 240, 300].map((angle, index) => (
        <circle
        key={index}
        cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
        cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
        r={radius}
        fill="none"
        stroke={smallCircleColor}
        strokeWidth="0.6"
        className="text-col-600 shadowBroadNormal animate-[pulse_3.5s_ease-in-out_infinite]"
        />
    ))}
    </svg>
        </Center>
    );
    }
          `}</CodeExample>
      </CSSSection>

      <CSSHeading>1. Central Concept</CSSHeading>
      <CSSSection>
        <CSSText>
          The Flower of Life is a geometrical shape consisting of several evenly
          spaced, overlapping circles arranged in a flower-like pattern with a
          sixfold symmetry, like a hexagon. The pattern is significant in
          various cultures and is often associated with sacred geometry.
        </CSSText>
      </CSSSection>
      <CSSHeading>2. Component Breakdown</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>SVG Container</HL>: The component encapsulates an SVG element
          defined by a viewBox of 0 0 110 110, which ensures that the SVG
          content is scalable and can dynamically adjust to different sizes. The
          SVG's width and height are set relative to the viewport width (30vw),
          making the component responsive and adaptable to different screen
          sizes.
        </CSSText>
        <CSSText>Circles Definition:</CSSText>
        <CSSSection>
          <CSSText>
            <HL>Encompassing Circle</HL>: A large circle with a radius defined
            as twice that of the smaller circles, creating a boundary that
            encapsulates the entire design. This circle serves as a visual
            anchor for the pattern.
          </CSSText>
          <CSSText>
            <HL>Central Circle</HL>: Positioned at the center of the SVG, it
            acts as the core from which the pattern radiates. Its radius is a
            key parameter that influences the size of all other circles in the
            pattern.
          </CSSText>
          <CSSText>
            <HL>Surrounding Circles</HL>: Six circles are evenly distributed
            around the central circle, with their positions calculated using
            trigonometric functions based on the central circle's radius. These
            circles are essential for forming the characteristic Flower of Life
            pattern.
          </CSSText>
        </CSSSection>
      </CSSSection>
      <CSSHeading>3. Styling:</CSSHeading>
      <CSSSection>
        <CSSText>
          <HL>Colors</HL>: Two distinct colors differentiate the encompassing
          circle from the central and surrounding circles, adding depth and
          visual interest to the pattern.
        </CSSText>
        <CSSText>
          <HL>Stroke Width and ClassNames</HL>: Custom classes and stroke widths
          are applied to enhance the visual appearance of the circles, providing
          them with distinct borders and integrating them into the overall
          design theme of the component.
        </CSSText>
        <CSSText>
          <HL>Animation</HL>: A subtle pulsing animation is applied to each
          circle, creating a dynamic and engaging visual effect. The animation
          is defined using Tailwind CSS's animate utility with custom
          parameters, ensuring that each circle pulsates at a slightly different
          rate, adding to the vibrancy of the design.
        </CSSText>
      </CSSSection>

      <CSSText>4. Center Component</CSSText>
      <CSSSection>
        <CSSText>
          The <HL>Center</HL> component is used as a wrapper to center the SVG
          element within its parent container. This component likely employs CSS
          flexbox or grid to align its children centrally both horizontally and
          vertically, ensuring that the Flower of Life pattern is prominently
          and aesthetically displayed.
        </CSSText>
      </CSSSection>

      <CSSHeading>5. Purpose and Use</CSSHeading>
      <CSSSection>
        <CSSText>
          This component can serve multiple purposes, from being a decorative
          visual element in a web application to illustrating concepts of
          geometry, symmetry, and harmony. Its responsive design ensures it can
          adapt to various display contexts, making it a versatile addition to
          any web project.
        </CSSText>
      </CSSSection>
      <CSSHeading>6. Implementation Highlights</CSSHeading>
      <CSSSection>
        <CSSText>
          The use of SVG for rendering the pattern ensures crisp, scalable
          graphics that remain high-quality regardless of screen size or
          resolution.
        </CSSText>
        <CSSText>
          The dynamic calculation of circle positions based on geometric
          principles showcases the power of mathematics in creating visually
          appealing designs.
        </CSSText>
        <CSSText>
          The integration of animations via Tailwind CSS enhances user
          engagement and brings the static design to life.
        </CSSText>
        <CSSText>
          This FlowerOfLife component is an excellent example of combining
          technology, design, and cultural significance to create a meaningful
          and beautiful web element.
        </CSSText>
      </CSSSection>
    </DescriptionModalContent>
  );
}
