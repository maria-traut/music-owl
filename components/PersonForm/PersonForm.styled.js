import styled from "styled-components";

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputAndButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledInputName = styled.input`
  width: 13rem;
  &:user-invalid {
    border: 1px solid red;
  }
`;

export const StyledInputYear = styled.input`
  width: 6rem;
  &:user-invalid {
    border: 1px solid red;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 0.5rem;
`;
