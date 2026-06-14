import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

export const StyledFigcaption = styled.figcaption`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
`;
