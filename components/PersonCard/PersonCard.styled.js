import styled from "styled-components";
import Link from "next/link";

export const StyledColoredArea = styled.article`
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-element);
  background-color: ${({ $color }) => $color};
  overflow: hidden;
`;

export const StyledNameYearWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 0.5rem 0.75rem;
`;

export const StyledName = styled.p`
  margin: 0;
`;

export const StyledYear = styled.p`
  font-size: 12px;
  color: #1b3a5c99;
  margin: 0;
  white-space: nowrap;
`;

export const StyledLink = styled(Link)`
  color: var(--text-color);
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
`;
