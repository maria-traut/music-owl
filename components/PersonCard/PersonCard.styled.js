import styled from "styled-components";
import Image from "next/image";

export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0;
  border: 1px solid black;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
`;

export const StyledFigcaption = styled.figcaption`
  display: flex;
`;

export const StyledImage = styled(Image)`
width: 100%,
height: auto;
`;

