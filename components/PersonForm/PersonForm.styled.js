import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border: 1px solid #2e5f8a;
  background-color: #ebf3fa;
  margin-top: 1rem;
`;

export const StyledLabel = styled.label`
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputAndButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  &:user-invalid {
    border: 1px solid salmon;
  }
`;

export const StyledInputName = styled(StyledInput)`
  width: 12rem;
`;

export const StyledInputYear = styled(StyledInput)`
  width: 6rem;
`;

export const StyledInputColor = styled(StyledInput)`
  width: 3rem;
`;

export const StyledFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;
