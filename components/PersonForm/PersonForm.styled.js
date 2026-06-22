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

export const StyledInputColor = styled(StyledInput)`
  width: 3rem;
`;
