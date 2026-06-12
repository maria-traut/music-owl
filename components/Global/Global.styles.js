import Link from "next/link";
import styled from "styled-components";

//homepage
export const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  width: 100%;
  padding: 0 1.9rem;
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

//people
export const StyledMain = styled.main`
  padding: 20px 30px 30px 30px;
`;

export const StyledSection = styled.section`
  border: 1px solid black;
  margin-bottom: 20px;
`;

// science
export const StyledScienceMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;
