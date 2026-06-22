import styled from "styled-components";

export const StyledCard = styled.li`
  list-style: none;
  border-radius: var(--radius-card);
  padding: 20px 25px;
  background-color: ${({ $color }) => $color};
`;

export const StyledCategory = styled.p`
  all: unset;
  display: inline-block;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  background: #1b3a5c22;
  color: var(--color-text-primary);
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const StyledCardTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
`;

export const StyledTagWrapper = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const StyledTag = styled.li`
  font-size: 10px;
  padding: 4px 8px;
  border: 1px solid #1b3a5c33;
  border-radius: var(--radius-element);
  color: var(--color-text-secondary);
`;

export const StyledReference = styled.p`
  font-size: 10px;
  font-style: italic;
  color: var(--color-text-secondary);
  border-left: 2px solid #1b3a5c33;
  padding-left: 8px;
  margin: 8px 0;
`;
