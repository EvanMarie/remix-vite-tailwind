/* eslint-disable react/no-unescaped-entities */
import CodeExample from "~/components/buildingBlocks/codeExample";

import FlexFull from "~/components/buildingBlocks/flexFull";
import Flex from "~/components/buildingBlocks/flex";
import DescriptionModalContent from "../css-animation+/components/descriptionModalContent";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  SVGExample,
  SVGHeading,
  SVGSection,
  SVGText,
} from "../components/formattingComponents";
import HL from "../components/highlight";

export const svgTextStyles = "text-lg-normal";
export const svgheadingStyles =
  "text-xl-loose font-semibold textShadow text-col-100";

export default function SVGIntro() {
  return (
    <DescriptionModalContent
      heading="Intro to SVGs"
      bg="bg-linear2op50"
      headingColor="bg-col-890"
    >
      <FlexFull className="justify-center">
        <VStackFull className="lg:w-90% xl:w-80%" align="items-start">
          <SVGHeading>Understanding SVGs</SVGHeading>
          <SVGSection>
            <SVGText>What is SVG?</SVGText>
            <SVGSection>
              SVGText
              <SVGText>
                SVG stands for <HL>Scalable Vector Graphics</HL>. It's an
                XML-based markup language for describing two-dimensional based
                vector graphics. SVG is essentially to graphics what HTML is to
                text. SVGs are scalable, meaning they maintain high quality at
                any size, and are interactive and scriptable, hence ideal for
                animations.
              </SVGText>
              <SVGText></SVGText>
            </SVGSection>
            <SVGText>Why SVG for Animations?</SVGText>
            <SVGSection>
              <SVGText>
                <HL>Scalability</HL>: Vector-based, so they scale up or down
                without losing quality.
              </SVGText>
              <SVGText>
                <HL>Performance</HL>: Generally smaller file sizes compared to
                bitmap images, which makes them faster to load.
              </SVGText>
              <SVGText>
                <HL>Interactivity</HL>: Can be manipulated via CSS and
                JavaScript.
              </SVGText>
              <SVGText>
                <HL>Accessibility</HL>: Text inside SVGs is selectable and
                searchable.
              </SVGText>
            </SVGSection>{" "}
          </SVGSection>
          <SVGHeading>Creating a Simple SVG</SVGHeading>
          <SVGSection>
            <SVGText>
              SVGs can be created with graphic design software like Adobe
              Illustrator or even coded by hand. Here's an example of a simple
              SVG coded directly:
            </SVGText>

            <SVGExample
              example={
                <Flex className="justify-center items-center w-full h-full">
                  <svg
                    width="20vh"
                    height="20vh"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10vh"
                      cy="10vh"
                      r="8vh"
                      stroke="cyan"
                      strokeWidth="0.2vh"
                      fill="deeppink"
                    />
                  </svg>
                </Flex>
              }
              description={
                <CodeExample>{`<svg width="20vh" height="20vh" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10vh" cy="10vh" r="8vh" stroke="cyan" 
    strokeWidth="0.2vh" fill="deeppink" />
</svg>`}</CodeExample>
              }
            />
            <SVGSection>
              <SVGText>
                <HL>&lt;svg&gt;</HL>: This tag defines the SVG container that
                holds the SVG graphics. It acts as a canvas for vector graphics
                defined inside it.
              </SVGText>
              <SVGText>
                <HL>width="20vh"</HL>: Sets the width of the SVG canvas to 20
                viewport heights. This means the SVG's width will be 20% of the
                viewport height, making it responsive and scaling based on the
                height of the viewport.
              </SVGText>
              <SVGText>
                <HL>height="20vh"</HL>: Similarly, sets the height of the SVG
                canvas to 20 viewport heights, ensuring that the SVG's height
                matches its width for a square aspect ratio.
              </SVGText>
              <SVGText>
                <HL>xmlns="http://www.w3.org/2000/svg"</HL>: Declares the XML
                namespace for SVG. This is necessary because SVG is an XML-based
                markup language, and this attribute ensures that the SVG markup
                is correctly interpreted according to the SVG specification.
              </SVGText>
              <SVGText>
                <HL>&lt;circle&gt;</HL>: This tag defines a circle. The circle
                is one of the basic shapes in SVG
              </SVGText>
              <SVGText>
                <HL>cx="10vh"</HL>: The cx attribute sets the x-coordinate of
                the center of the circle. Here, it's set to 10 viewport heights,
                effectively centering the circle horizontally within the
                20vh-wide SVG canvas.
              </SVGText>
              <SVGText>
                <HL>cy="10vh"</HL>: The cy attribute sets the y-coordinate of
                the center of the circle. Setting it to 10vh centers the circle
                vertically within the 20vh-tall SVG canvas.
              </SVGText>
              <SVGText>
                <HL>r="8vh"</HL>: The r attribute specifies the radius of the
                circle. The circle's radius is 8vh, making the circle's diameter
                16vh. This size allows for a margin between the circle and the
                SVG container edges, given the container's 20vh dimensions.
              </SVGText>{" "}
              <SVGText>
                <HL>stroke="cyan"</HL>: This attribute sets the color of the
                circle's outline (stroke) to cyan.
              </SVGText>
              <SVGText>
                <HL>strokeWidth="0.2vh"</HL>: Defines the thickness of the
                stroke around the circle. The stroke width is set to 0.2vh,
                making it responsive to the viewport height like the other
                dimensions.
              </SVGText>
              <SVGText>
                <HL>fill="deeppink"</HL>: Determines the fill color of the
                circle, which is set to a deep pink color. This color fills the
                interior of the circle.
              </SVGText>
              <SVGText>
                This SVG example creates a responsive, square-shaped SVG canvas
                that automatically scales its size based on the viewport's
                height. Inside this canvas, a circle is drawn, centered both
                horizontally and vertically, with a cyan stroke around it and
                filled with a deep pink color. The use of viewport units (vh)
                for all dimensions ensures that the circle's size and position
                scale dynamically with changes in the viewport size, maintaining
                its aspect ratio and positioning within the SVG container.
              </SVGText>
            </SVGSection>
          </SVGSection>
        </VStackFull>
      </FlexFull>
    </DescriptionModalContent>
  );
}
