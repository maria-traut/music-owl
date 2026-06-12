import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  font-family: var(--font-family-sans);
`;

export const StyledMain = styled.main`
  width: 100%;
  padding: 1rem 1.9rem 1.9rem 1.9rem;
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const StyledIntroSection = styled.section`
  background: transparent;
`;

export const StyledH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const StyledH3 = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 600;
`;

export const StyledLinkWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
`;

export const StyledLinkPeople = styled.div`
  background-color: #1b3a5c;
  color: #ffffff;
  padding: 5px 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLinkScience = styled.div`
  background-color: #e8a838;
  color: #ffffff;
  border-radius: 15px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledDivider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
`;
