import styled from "styled-components";

export default function PersonForm({ onPersonCreate, onPersonFormClear }) {
  return (
    <form onSubmit={onPersonCreate}>
      <fieldset>
        <legend>Add A Person</legend>
        <StyledFormFlex>
          <StyledFormSection>
            <label htmlFor="name">
              Name<span aria-hidden>*</span>
            </label>
            <StyledInputName
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              maxLength={50}
              title="Name must be between 1 and 50 characters"
            ></StyledInputName>
          </StyledFormSection>
          <StyledFormSection>
            <label htmlFor="birth_year">
              Year Of Birth<span aria-hidden>*</span>
            </label>
            <StyledInputYear
              type="number"
              id="birth_year"
              name="birth_year"
              maxLength="4"
              required
              aria-required="true"
              min="1900"
              max={new Date().getFullYear()}
              title={`Please enter a year between 1900 and ${new Date().getFullYear()}`}
            ></StyledInputYear>
          </StyledFormSection>
        </StyledFormFlex>
        <StyledButtonWrapper>
          <button type="submit" aria-label="Add person">
            Add
          </button>
          <button
            type="button"
            aria-label="Clear form"
            onClick={onPersonFormClear}
          >
            Clear
          </button>
        </StyledButtonWrapper>
      </fieldset>
    </form>
  );
}

const StyledFormFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputName = styled.input`
  width: 13rem;
  &:user-invalid {
    border: 1px solid red;
  }
`;

const StyledInputYear = styled.input`
  width: 6rem;
  &:user-invalid {
    border: 1px solid red;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
  gap: 1rem;
`;
