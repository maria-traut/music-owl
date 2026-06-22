import {
  StyledFieldset,
  StyledLabel,
  StyledFormSection,
  StyledFormButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "../Global/Global.styles";
import {
  StyledInputAndButtonFlex,
  StyledInputName,
  StyledInputYear,
  StyledInputColor,
} from "./PersonForm.styled";

export default function PersonForm({
  onSubmit,
  onPersonFormClear,
  defaultValues,
  updateMode,
  setUpdateMode,
  setPersonFormMode,
}) {
  return (
    <form onSubmit={onSubmit}>
      <StyledFieldset>
        {!updateMode ? <legend>Add a Person</legend> : <legend>Edit</legend>}
        <StyledInputAndButtonFlex>
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
              title="Name must be between 1 and 50 characters."
              defaultValue={defaultValues?.name ?? ""}
            />
          </StyledFormSection>
          <StyledFormSection>
            <StyledLabel htmlFor="color">Colour</StyledLabel>
            <StyledInputColor
              type="color"
              id="color"
              name="color"
              title="Please choose a color."
              defaultValue={defaultValues?.color ?? "#e8a838"}
            />
          </StyledFormSection>
        </StyledInputAndButtonFlex>
        <StyledInputAndButtonFlex>
          <StyledFormSection>
            <StyledLabel htmlFor="birth_year">
              Year of Birth<span aria-hidden>*</span>
            </StyledLabel>
            <StyledInputYear
              type="number"
              id="birth_year"
              name="birth_year"
              required
              aria-required="true"
              min="1900"
              max={new Date().getFullYear()}
              title={`Please enter a year between 1900 and ${new Date().getFullYear()}.`}
              defaultValue={defaultValues?.birth_year ?? ""}
            />
          </StyledFormSection>

          <StyledFormButtonWrapper>
            {updateMode ? (
              <>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel edit person and close form"
                  onClick={() => setUpdateMode(false)}
                >
                  Cancel
                </StyledButtonSecondary>
                <StyledButtonPrimary type="submit" aria-label="Update person">
                  Save
                </StyledButtonPrimary>
              </>
            ) : (
              <>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel add person and close form"
                  onClick={() => {
                    onPersonFormClear();
                    setPersonFormMode(false);
                  }}
                >
                  Cancel
                </StyledButtonSecondary>

                <StyledButtonPrimary type="submit" aria-label="Add person">
                  Save
                </StyledButtonPrimary>
              </>
            )}
          </StyledFormButtonWrapper>
        </StyledInputAndButtonFlex>
      </StyledFieldset>
    </form>
  );
}
