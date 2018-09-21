import styled from "styled-components";

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 0;
  border-color: lightgray;
  font-size: 2rem;
  font-family: "Arial Georgia";
`;

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0.5rem;

  svg path {
    fill: #ceb00e;
  }
`;

export const Wrapper = styled.div`
  width: 85vw;
  max-width: 30rem;
  height: 4rem;
  position: relative;
`;