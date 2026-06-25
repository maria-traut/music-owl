import styled from "styled-components";
import { StyledButton } from "../Global/Global.styles";

export const StyledFilterButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledFilterButton = styled(StyledButton)`
  background: red;
  font-size: 0.8rem;
  border: 1px solid #1b3a5c;
  padding: 10px 10px;
  width: auto;
  color: ${({ $isActive }) =>
    $isActive ? "white" : "var(--color-text-primary)"};
  background: ${({ $isActive }) =>
    $isActive ? "var(--color-primary)" : "transparent"};
  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "var(--color-primary)" : "rgba(0,0,0,.06)"};
  }
`;
