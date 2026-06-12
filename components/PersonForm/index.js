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
            ></StyledInputName>
          </StyledFormSection>
          <StyledFormSection>
            <label htmlFor="birth_year">
              Year Of Birth<span aria-hidden>*</span>
            </label>
            <StyledInputYear
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              id="birth_year"
              name="birth_year"
              maxLength="4"
              required
              aria-required="true"
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
`;

const StyledInputYear = styled.input`
  width: 6rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
  gap: 1rem;
`;
