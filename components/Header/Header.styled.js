import styled from "styled-components";
import Image from "next/image";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;

export const StyledH1 = styled.h1`
  margin: 0;
  text-align: left;
`;

export const StyledOwlIcon = styled(Image)`
  width: auto;
  height: auto;
  cursor: pointer;
`;
