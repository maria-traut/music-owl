import {
  StyledInputAndButtonFlex,
  StyledFormSection,
  StyledInputName,
  StyledInputYear,
  StyledButtonWrapper,
} from "./PersonForm.styled";

export default function PersonForm({ onPersonCreate, onPersonFormClear }) {
  return (
    <form onSubmit={onPersonCreate}>
      <fieldset>
        <legend>Add A Person</legend>
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
          />
        </StyledFormSection>
        <StyledInputAndButtonFlex>
          <StyledFormSection>
            <label htmlFor="birth_year">
              Year Of Birth<span aria-hidden>*</span>
            </label>
            <StyledInputYear
              type="number"
              id="birth_year"
              name="birth_year"
              required
              aria-required="true"
              min="1900"
              max={new Date().getFullYear()}
              title={`Please enter a year between 1900 and ${new Date().getFullYear()}`}
            ></StyledInputYear>
          </StyledFormSection>
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
        </StyledInputAndButtonFlex>
      </fieldset>
    </form>
  );
}
