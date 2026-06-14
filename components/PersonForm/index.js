import {
  StyledInputAndButtonFlex,
  StyledFormSection,
  StyledInputName,
  StyledInputYear,
  StyledButtonWrapper,
  StyledFieldset,
  StyledLabel,
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "./PersonForm.styled";

export default function PersonForm({ onPersonCreate, onPersonFormClear }) {
  return (
    <form onSubmit={onPersonCreate}>
      <StyledFieldset>
        <legend>Add A Person</legend>
        <StyledFormSection>
          <StyledLabel htmlFor="name">
            Name<span aria-hidden>*</span>
          </StyledLabel>
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
            />
          </StyledFormSection>
          <StyledButtonWrapper>
            <StyledButtonPrimary type="submit" aria-label="Add person">
              Add
            </StyledButtonPrimary>
            <StyledButtonSecondary
              type="button"
              aria-label="Clear form"
              onClick={onPersonFormClear}
            >
              Clear
            </StyledButtonSecondary>
          </StyledButtonWrapper>
        </StyledInputAndButtonFlex>
      </StyledFieldset>
    </form>
  );
}
