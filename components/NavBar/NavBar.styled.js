import styled from "styled-components";
import Link from "next/link";
import { StyledDivider } from "../Global/Global.styles";

export const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  text-transform: uppercase;
  font-family: var(--font-family-sans);
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const StyledNavDivider = styled(StyledDivider)`
  margin: 10px 25px;
`;
