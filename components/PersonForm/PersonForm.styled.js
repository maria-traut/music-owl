import styled from "styled-components";
import { StyledInput } from "../Global/Global.styles";

export const StyledInputAndColorFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const StyledInputAndButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
`;

export const StyledInputName = styled(StyledInput)`
  width: 12rem;
`;

export const StyledInputYear = styled(StyledInput)`
  width: 7rem;
`;

export const StyledInputColor = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 42px;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    opacity: 0.8;
  }
`;
