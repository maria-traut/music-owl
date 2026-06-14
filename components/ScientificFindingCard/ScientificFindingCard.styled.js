import styled from "styled-components";

export const StyledCard = styled.li`
  list-style: none;
  border: 1px solid grey;
  border-radius: 15px;
`;

export const StyledCategory = styled.p`
  all: unset;
  text-transform: uppercase;
`;

export const StyledCardTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.4;
`;

export const StyledTagWrapper = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledTag = styled.li`
  padding: 1px;
  border: none;
  border-radius: 15px;
  background-color: transparent;
`;

export const StyledReference = styled.p`
  font-size: 10px;
  display: flex;
  font-style: italic;
`;
