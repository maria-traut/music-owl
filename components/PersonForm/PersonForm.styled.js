import styled from "styled-components";
import { StyledInput } from "../Global/Global.styles";

export const StyledInputAndButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInputName = styled(StyledInput)`
  width: 12rem;
  margin-bottom: 0.5rem;
`;

export const StyledInputYear = styled(StyledInput)`
  width: 7rem;
`;

export const StyledInputColor = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;
