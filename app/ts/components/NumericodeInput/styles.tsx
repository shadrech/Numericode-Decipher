import styled from "styled-components";

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 0;
  font-size: 2rem;
  font-family: "Arial Georgia";
  color: lightgray;
  padding-left: 0.5rem;
  padding-right: 3rem;
  box-sizing: border-box;
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

export const LoaderWrapper = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: -1.5rem;
  top: 1.5rem;
`;