/* eslint-disable react/no-unescaped-entities */
import CodeExample from "~/components/buildingBlocks/codeExample";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { motion } from "framer-motion";
import { useState } from "react";
import { HideIcon, ViewIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import FlexFull from "~/components/buildingBlocks/flexFull";
import DescriptionModalContent from "../css-animation+/components/descriptionModalContent";
import {
  SVGExample,
  SVGHeading,
  SVGSection,
  SVGText,
} from "../components/formattingComponents";
import HL from "../components/highlight";
import Transition from "~/components/buildingBlocks/transition";

export default function FramerMotionIntro() {
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const buttonIcon = showCircle1 ? HideIcon : ViewIcon;
  return (
    <Transition className="w-full h-full">
      <DescriptionModalContent
        heading="Intro to Framer Motion"
        bg="bg-linear2op50"
        headingColor="bg-col-890"
      >
        <FlexFull className="justify-center">
          <VStackFull className="lg:w-90% xl:w-80%" align="items-start">
            {" "}
            <SVGHeading>Creating Interactive SVG Animations</SVGHeading>
            <SVGSection>
              <SVGText>
                <HL>Why Framer Motion?</HL>
              </SVGText>
              <SVGText>
                Framer Motion is a powerful and easy-to-use library for React
                and Remix that simplifies creating animations and interactive
                UIs. It provides a set of components that can animate your
                elements, including SVGs, with minimal code, offering high
                performance and a plethora of animation features like keyframes,
                spring physics, and gesture animations.
              </SVGText>

              <SVGText>
                <HL>Animating an SVG Circle</HL>: Convert the SVG circle element
                into a motion component. You can directly replace <circle />{" "}
                with <HL>&lt;motion.circle&gt;</HL> to start using animation
                props.
              </SVGText>

              <SVGExample
                description={
                  <CodeExample>{`<svg width="20vh" height="20vh" 
  xmlns="http://www.w3.org/2000/svg">
  <motion.circle cx="10vh" cy="10vh" r="6vh" stroke="cyan" 
    strokeWidth="0.2vh" whileHover={{ scale: 1.1 }}      
    whileTap={{ scale: 1.4 }} fill="deeppink" initial={{ scale: 0 }}
    animate={{ scale: 1 }}  
    transition={{ type: "spring", stiffness: 260,
    damping: 20,}}/>
</svg>`}</CodeExample>
                }
                example={
                  <VStackFull className="min-h-[25vh]">
                    <Button
                      iconLeft={buttonIcon}
                      buttonText={showCircle1 ? "hide circle" : "show circle"}
                      onClick={() => setShowCircle1(!showCircle1)}
                    />
                    {showCircle1 && (
                      <svg
                        width="20vh"
                        height="20vh"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle
                          cx="10vh"
                          cy="10vh"
                          r="6vh"
                          stroke="cyan"
                          strokeWidth="0.2vh"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 1.4 }}
                          fill="deeppink"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                        />
                      </svg>
                    )}
                  </VStackFull>
                }
              />
              <SVGText>
                This component introduces several new concepts related to
                creating interactive and animated SVGs, particularly by
                utilizing the motion.circle element from Framer Motion, a
                popular library for animations in React. Let's break down the
                new aspects:
              </SVGText>
              <SVGSection>
                <SVGText>
                  <HL>Framer Motion and motion.circle</HL>
                </SVGText>
                <SVGText>
                  <HL>Framer Motion</HL>: This is a library that makes creating
                  animations in Remix straightforward. It provides components
                  that you can use to animate and add interactions to your Remix
                  and React components.
                </SVGText>
                <SVGText>
                  <HL>motion.circle</HL>: This is a Framer Motion component.
                  It's essentially a wrapper around the standard SVG
                  <HL> &lt;circle&gt;</HL>
                  element that adds animation and interaction capabilities.
                  Using motion.circle instead of <HL>&lt;circle&gt;</HL> allows
                  you to animate properties of the circle with ease.
                </SVGText>
                <SVGText>
                  <HL>initial</HL>: This prop defines the initial state of the
                  circle. Here, the circle starts with a scale of 0, effectively
                  making it invisible once a user clicks the button.
                </SVGText>
                <SVGText>
                  <HL>whileHover</HL>: This prop allows you to define animations
                  that should occur when the user hovers over the circle. In
                  this case, the scale of the circle increases by 10% when
                  hovered over.
                </SVGText>
                <SVGText>
                  <HL>whileTap</HL>: This prop defines animations that should
                  occur when the user taps or clicks on the circle. Here, the
                  scale of the circle increases by 40% when tapped.
                </SVGText>

                <SVGText>
                  <HL>animate</HL>: This prop defines the target state of the
                  circle. The circle is animated to a scale of 1, making it
                  visible and at its normal size.
                </SVGText>
                <SVGText>
                  <HL>transition</HL>: This prop defines the transition
                  animation's behavior. Here, the circle's scale is animated
                  using a spring physics-based transition, which gives it a
                  natural bounce effect when it appears.
                </SVGText>
                <VStackFull className="px-[2vh]">
                  <SVGText>
                    - <HL>Spring Physics</HL>: The transition type is set to
                    spring, which means the circle's scale animation is based on
                    spring physics. This gives the circle a natural bounce
                    effect when it appears.
                  </SVGText>
                  <SVGText>
                    - <HL>Stiffness</HL>: This prop defines the stiffness of the
                    spring. A higher stiffness value results in a more rigid
                    spring, which means the circle's scale animation will be
                    quicker and more abrupt.
                  </SVGText>
                  <SVGText>
                    - <HL>Damping</HL>: This prop defines the damping of the
                    spring. A higher damping value results in a slower and
                    smoother animation, as it reduces the spring's oscillations.
                  </SVGText>
                </VStackFull>
              </SVGSection>
            </SVGSection>
            <SVGHeading>Varying Transition Types</SVGHeading>
            <SVGSection>
              <SVGText>
                Understanding the differences between a tween transition and a
                spring transition in the context of animating with Framer Motion
                is crucial for crafting the desired animation effects in your
                applications. Each type of transition offers a different
                approach to animating elements, with unique characteristics,
                benefits, and suitable use cases.
              </SVGText>
              <SVGExample
                description={
                  <CodeExample>{`<svg width="20vh" height="20vh" 
  xmlns="http://www.w3.org/2000/svg">
  <motion.circle cx="10vh" cy="10vh" r="6vh" stroke="cyan" 
    strokeWidth="0.2vh" whileHover={{ scale: 1.5 }}      
    fill="deeppink" initial={{ scale: 0 }}
    animate={{ scale: 1 }}  
    transition={{ 
      type: "tween", duration: 2, ease: "easeOut",}}/>
</svg>`}</CodeExample>
                }
                example={
                  <VStackFull className="min-h-[25vh]">
                    <Button
                      iconLeft={buttonIcon}
                      buttonText={showCircle2 ? "hide circle" : "show circle"}
                      onClick={() => setShowCircle2(!showCircle2)}
                    />
                    {showCircle2 && (
                      <svg
                        width="20vh"
                        height="20vh"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle
                          cx="10vh"
                          cy="10vh"
                          r="6vh"
                          stroke="cyan"
                          strokeWidth="0.2vh"
                          whileHover={{ scale: 1.5 }}
                          fill="deeppink"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "tween",
                            duration: 2,
                            ease: "easeOut",
                          }}
                        />
                      </svg>
                    )}
                  </VStackFull>
                }
              />
              <SVGText>
                This example demonstrates the use of a <HL>tween</HL> transition
                to animate the circle animates an element from its initial state
                to its target state over a specified duration, using a specified
                easing function. Here's a breakdown of the new transition
                properties:
              </SVGText>

              <VStackFull className="px-[2vh]">
                <SVGText>
                  <HL>type</HL>: This prop defines the type of transition to
                  use. Here, the type is set to <HL>tween</HL>, which means the
                  circle's scale animation occurs over a specified duration.
                </SVGText>
                <SVGText>
                  <HL>duration</HL>: This prop sets the duration of the tween
                  transition. The duration is set to 2 seconds, meaning the
                  circle takes 2 seconds to animate from its initial scale to
                  its target scale. This duration is applied to the initial
                  scale in from 0 to 1, as well as the hover scale from 1 to
                  1.5.
                </SVGText>
                <SVGText>
                  <HL>ease</HL>: This prop defines the easing function to use
                  for the tween transition. Here, the ease is set to easeOut,
                  which means the circle's scale animation starts quickly and
                  slows down towards the end, giving it a decelerating effect.
                </SVGText>
              </VStackFull>
              <SVGHeading>When duration can be effective:</SVGHeading>
              <SVGText>
                - <HL>Tween Transition</HL>: The duration property is fully
                effective and directly controls the length of the animation.
                This gives you precise control over the timing of animations.
              </SVGText>
              <SVGText>
                - <HL>Spring Transition</HL>: The duration property does not
                apply because the animation's timing is governed by its physics
                properties. Attempting to set a duration with a spring type will
                have no effect on the animation. Instead, adjust stiffness,
                damping, and mass to influence the perceived duration and
                dynamics of the motion.
              </SVGText>
            </SVGSection>
          </VStackFull>
        </FlexFull>
      </DescriptionModalContent>
    </Transition>
  );
}
