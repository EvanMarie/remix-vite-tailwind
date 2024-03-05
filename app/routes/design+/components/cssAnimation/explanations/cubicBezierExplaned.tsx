/* eslint-disable react/no-unescaped-entities */
import FlexFull from "~/components/buildingBlocks/flexFull";
import { CSSHeading, CSSSection, CSSText } from "../../formattingComponents";
import DescriptionModalContent from "../descriptionModalContent";

export default function CubicBezierExplained() {
  return (
    <DescriptionModalContent>
      <CSSHeading>
        The cubic-bezier function is represented as cubic-bezier(x1, y1, x2,
        y2), where:
      </CSSHeading>
      <CSSSection>
        <CSSText>- x1 and y1 are the coordinates of point P1.</CSSText>
        <CSSText>- x2 and y2 are the coordinates of point P2.</CSSText>
      </CSSSection>
      <CSSHeading>Understanding the Coordinates</CSSHeading>
      <CSSSection>
        <CSSText>
          - x1, x2 (Control Points for Time): These values represent the time of
          the animation. Since this is a Bezier curve that progresses over time
          from 0 to 1 (start to end), both x values are typically within the 0
          to 1 range. Manipulating these values changes how the speed of the
          animation progresses over time.
        </CSSText>
        <CSSSection>
          <CSSText>
            - A value closer to 0 means the effect starts more slowly.
          </CSSText>
          <CSSText>
            - A value closer to 1 means the effect starts more quickly.
          </CSSText>
        </CSSSection>
        <CSSText>
          - y1, y2 (Control Points for Progress): These values represent the
          progression of the animation effect itself, such as moving an element,
          fading in, scaling, etc. They can technically be outside the 0 to 1
          range, which allows for effects like overshooting (where the element
          goes beyond its final state and then settles back) or bouncing.
        </CSSText>
        <FlexFull className="px-[4vh]">
          <CSSText>
            - A value less than 0 or greater than 1 can create non-linear, and
            sometimes extreme, progressions like elastic or bounce effects.
          </CSSText>
        </FlexFull>
      </CSSSection>
      <CSSHeading>Visual Interpretation</CSSHeading>
      <CSSSection>
        <CSSText>
          - Start (P0) at (0,0): The animation&apos;s starting point.
        </CSSText>
        <CSSText>
          - End (P3) at (1,1): The animation&apos;s ending point.
        </CSSText>
        <CSSText>
          - First Control Point (P1) at (x1, y1): Influences the initial part of
          the animation. Adjusting y1 above 1 can make the animation start by
          moving faster than its end state, creating a "bounce" effect.
          Adjusting x1 influences how quickly this initial part progresses.
        </CSSText>
        <CSSText>
          - Second Control Point (P2) at (x2, y2): Influences the latter part of
          the animation. Similar to P1, but for the ending portion of the
          animation. Adjusting y2 below 0 can create an effect where the
          animation "pulls back" before completing.
        </CSSText>
      </CSSSection>
      <CSSHeading>Example</CSSHeading>
      <CSSSection>
        <CSSText>
          For cubic-bezier(0.68, -0.55, 0.27, 1.55), this defines a curve where:
        </CSSText>
        <CSSSection>
          <CSSText>
            - The animation starts off quickly (since x1 is fairly high at
            0.68).
          </CSSText>
          <CSSText>
            - Initially, it moves backward a little (y1 is -0.55, allowing for
            an "overshoot" backwards).
          </CSSText>
          <CSSText>
            - Then, it slows down towards the middle (x2 is 0.27, indicating a
            slower progression in the middle).
          </CSSText>
          <CSSText>
            - Finally, it overshoots its ending before settling (y2 is 1.55,
            indicating an "elastic" effect that goes beyond the final state
            before completing).
          </CSSText>
          <CSSText>
            - This particular curve would be used for dynamic,
            attention-grabbing animations, such as a bouncing ball or an elastic
            effect.
          </CSSText>
        </CSSSection>
      </CSSSection>
    </DescriptionModalContent>
  );
}
