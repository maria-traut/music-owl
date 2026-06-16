import styled from "styled-components";
import Link from "next/link";

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  background-color: #fafaf8;
  overflow: hidden;
`;

export const StyledColoredArea = styled.div`
  position: relative;
  height: 5rem;
  background-color: ${({ color }) => color};
`;

export const StyledYear = styled.div`
  position: absolute;
  font-size: 0.65rem;
  color: white;
  background-color: #00000022;
  border-radius: 15px;
  padding: 2px 6px;
  right: 0.3rem;
  bottom: 0.3rem;
`;

export const StyledName = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  margin: 0.5rem;
  background-color: #fafaf8;
`;

export const StyledLink = styled(Link)`
  color: var(--text-color);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
`;
