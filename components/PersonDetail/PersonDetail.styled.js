import styled from "styled-components";
import Image from "next/image";

export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  border: 1px solid black;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const StyledFigcaption = styled.figcaption`
  display: flex;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledUpdateButton = styled.button`
  transform: scaleX(-1);
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 0.5rem;
`;
