import styled from "styled-components";
import Image from "next/image";

export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const StyledFigcaption = styled.figcaption`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledUpdateAndDeleteButton = styled.button`
  background-color: transparent;
  height: 1.2rem;
  padding: 13px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1b3a5c;
`;

export const StyledUpdateButton = styled(StyledUpdateAndDeleteButton)`
  transform: scaleX(-1);
  &:hover {
    background-color: #b4d4f7;
  }

  &:active {
    background-color: #b4d4f7;
  }
`;

export const StyledDeleteButton = styled(StyledUpdateAndDeleteButton)`
  &:hover {
    background-color: #e7a5a5;
  }

  &:active {
    background-color: #e7a5a5;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  gap: 0.7rem;
`;

export const StyledMessageAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledMessage = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
`;
