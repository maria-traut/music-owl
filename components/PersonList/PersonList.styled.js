import styled from "styled-components";
import Image from "next/image";

export const StyledPersonList = styled.ul`
  all: unset;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const StyledImage = styled(Image)`
width: 100%,
height: auto;
`;
