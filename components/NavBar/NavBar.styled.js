import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;
  padding: 7px 0 0 0;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  font-family: var(--font-family-sans);
  position: sticky;
  top: 0;
  background-color: var(--app-background);
  z-index: 100;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const StyledNavDivider = styled.div`
  border: none;
  border-top: 1px solid #e0e0e0;

  margin: 8px 25px 7px 25px;
`;
