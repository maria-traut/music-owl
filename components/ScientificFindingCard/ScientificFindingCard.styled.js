import styled from "styled-components";

export const StyledCard = styled.li`
  list-style: none;
  border-radius: 15px;
  padding: 20px 25px;
  background-color: #f9d08a;
`;

export const StyledCategory = styled.p`
  all: unset;
  text-transform: uppercase;
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
  font-size: 8px;
  padding: 5px 6px;
  border: 1px solid #fafaf8;
  border-radius: 15px;
`;

export const StyledReference = styled.p`
  font-size: 10px;
  display: flex;
  font-style: italic;
`;
