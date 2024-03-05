/* eslint-disable react/no-unescaped-entities */
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function CubicBezierExplained() {
  const textStyles = "text-lg-normal";
  const headingStyles = "text-xl-loose font-semibold lightTextShadow";
  const sectionStyles =
    "bg-col-980 text-col-100 px-[4vh] py-[1.5vh] border-970-md items-start shadowBroadLoose";
  return (
    <FlexFull className="px-[5vh] py-[2vh] bg-col-200 h-full overflow-y-auto insetShadowLg">
      <VStackFull className="h-fit py-[1.5vh]" align="items-start">
        <Text className={headingStyles}>
          The cubic-bezier function is represented as cubic-bezier(x1, y1, x2,
          y2), where:
        </Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            - x1 and y1 are the coordinates of point P1.
          </Text>
          <Text className={textStyles}>
            - x2 and y2 are the coordinates of point P2.
          </Text>
        </VStackFull>
        <Text className={headingStyles}>Understanding the Coordinates</Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            - x1, x2 (Control Points for Time): These values represent the time
            of the animation. Since this is a Bezier curve that progresses over
            time from 0 to 1 (start to end), both x values are typically within
            the 0 to 1 range. Manipulating these values changes how the speed of
            the animation progresses over time.
          </Text>
          <VStackFull className="px-[4vh]">
            <Text className={textStyles}>
              - A value closer to 0 means the effect starts more slowly.
            </Text>
            <Text className={textStyles}>
              - A value closer to 1 means the effect starts more quickly.
            </Text>
          </VStackFull>
          <Text className={textStyles}>
            - y1, y2 (Control Points for Progress): These values represent the
            progression of the animation effect itself, such as moving an
            element, fading in, scaling, etc. They can technically be outside
            the 0 to 1 range, which allows for effects like overshooting (where
            the element goes beyond its final state and then settles back) or
            bouncing.
          </Text>
          <FlexFull className="px-[4vh]">
            <Text className={textStyles}>
              - A value less than 0 or greater than 1 can create non-linear, and
              sometimes extreme, progressions like elastic or bounce effects.
            </Text>
          </FlexFull>
        </VStackFull>
        <Text className={headingStyles}>Visual Interpretation</Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            - Start (P0) at (0,0): The animation's starting point.
          </Text>
          <Text className={textStyles}>
            - End (P3) at (1,1): The animation's ending point.
          </Text>
          <Text className={textStyles}>
            - First Control Point (P1) at (x1, y1): Influences the initial part
            of the animation. Adjusting y1 above 1 can make the animation start
            by moving faster than its end state, creating a "bounce" effect.
            Adjusting x1 influences how quickly this initial part progresses.
          </Text>
          <Text className={textStyles}>
            - Second Control Point (P2) at (x2, y2): Influences the latter part
            of the animation. Similar to P1, but for the ending portion of the
            animation. Adjusting y2 below 0 can create an effect where the
            animation "pulls back" before completing.
          </Text>
        </VStackFull>
        <Text className={headingStyles}>Example</Text>
        <VStackFull className={sectionStyles}>
          <Text className={textStyles}>
            For cubic-bezier(0.68, -0.55, 0.27, 1.55), this defines a curve
            where:
          </Text>
          <VStackFull className={sectionStyles}>
            <Text className={textStyles}>
              - The animation starts off quickly (since x1 is fairly high at
              0.68).
            </Text>
            <Text className={textStyles}>
              - Initially, it moves backward a little (y1 is -0.55, allowing for
              an "overshoot" backwards).
            </Text>
            <Text className={textStyles}>
              - Then, it slows down towards the middle (x2 is 0.27, indicating a
              slower progression in the middle).
            </Text>
            <Text className={textStyles}>
              - Finally, it overshoots its ending before settling (y2 is 1.55,
              indicating an "elastic" effect that goes beyond the final state
              before completing).
            </Text>
            <Text className={textStyles}>
              - This particular curve would be used for dynamic,
              attention-grabbing animations, such as a bouncing ball or an
              elastic effect.
            </Text>
          </VStackFull>
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
