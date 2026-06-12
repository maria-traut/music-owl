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
  position: relative;
  width: 100%;
  height: 100px;
`;

export const StyledFigcaption = styled.figcaption`
  display: flex;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
