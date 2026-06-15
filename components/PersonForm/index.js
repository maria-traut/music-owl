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

export default function PersonForm({
  onSubmit,
  onPersonFormClear,
  defaultValues,
  updateMode,
  setUpdateMode,
}) { 
  return (
    <form onSubmit={onSubmit}>
       <StyledFieldset>
        {!updateMode ? <legend>Add A Person</legend> : <legend>Edit</legend>}
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
            defaultValue={defaultValues?.name ?? ""}
          />
        </StyledFormSection>
        <StyledInputAndButtonFlex>
          <StyledFormSection>
            <StyledLabel htmlFor="birth_year">
              Year Of Birth<span aria-hidden>*</span>
            </StyledLabel>
            <StyledInputYear
              type="number"
              id="birth_year"
              name="birth_year"
              required
              aria-required="true"
              min="1900"
              max={new Date().getFullYear()}
              title={`Please enter a year between 1900 and ${new Date().getFullYear()}`}
              defaultValue={defaultValues?.birth_year ?? ""}
            />
          </StyledFormSection>
          <StyledButtonWrapper>
            {updateMode ? (
              <>            
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel edit person and close edit form"
                  onClick={() => setUpdateMode(false)}
                >
                  Cancel
               </StyledButtonSecondary>
                <StyledButtonPrimary type="submit" aria-label="Update person">
                  Update
                </StyledButtonPrimary>
              </>
            ) : (
              <>
                <StyledButtonSecondary

                  type="button"
                  aria-label="Clear form"
                  onClick={onPersonFormClear}
                >
                  Clear
                </StyledButtonSecondary>
                <StyledButtonPrimary type="submit" aria-label="Add person">
                  Add
                </StyledButtonPrimary>
              </>
            )}
          </StyledButtonWrapper>
        </StyledInputAndButtonFlex>
      </StyledFieldset>
    </form>
  );
}
