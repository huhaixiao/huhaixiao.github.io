import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .auto {
    width: 100px;
    height: 100px;
    background-color: aqua;
    color: red;
    cursor: pointer;
    margin: 20px;
  }
  .auto {
    /* Specifies the name of the @keyframes 
          at-rule describing the animation’s keyframes. */
    animation-name: wtf;

    /* Configures the length of time that 
          an animation should take to complete one cycle. */
    animation-duration: 3s;

    /* how the animation transitions through keyframes, 
    by establishing acceleration curves. */
    /* linear */
    animation-timing-function: cubic-bezier(0, 0, 1, 1);

    animation-delay: 0.5s;

    animation-iteration-count: infinite;

    animation-direction: alternate;

    animation-fill-mode: both;

    animation-play-state: running;
  }

  @keyframes wtf {
    0% {
      transform: rotateZ(0deg);
    }

    50% {
      transform: rotateZ(180deg);
    }

    100% {
      transform: rotateZ(270deg);
    }
  }
`;

export const Animation = () => {
  return (
    <Wrapper>
      <h1>Auto</h1>
      <div className="auto">this is auto animation</div>
      <h1>Element.animate</h1>
    </Wrapper>
  );
};
