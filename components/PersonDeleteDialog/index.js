import {
  StyledMessage,
  StyledMessageAndButtonWrapper,
  StyledButtonWrapper,
  StyledButtonSecondary,
  StyledButtonDanger,
} from "../Global/Global.styles";

export default function PersonDeleteDialog({
  name,
  activeMode,
  setActiveMode,
  onPersonDelete,
  personDeleteSuccess,
  personDeleteError,
  setPersonDeleteError,
}) {
  return (
    <>
      {activeMode === "delete" && (
        <>
          {!personDeleteSuccess && (
            <StyledMessageAndButtonWrapper>
              <StyledMessage>Remove and go back?</StyledMessage>
              <StyledButtonWrapper>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel deletion"
                  onClick={() => {
                    setActiveMode(null);
                    setPersonDeleteError(false);
                  }}
                >
                  No
                </StyledButtonSecondary>
                <StyledButtonDanger
                  type="button"
                  aria-label="Confirm deletion"
                  onClick={onPersonDelete}
                >
                  Yes
                </StyledButtonDanger>
              </StyledButtonWrapper>
              {personDeleteError && (
                <span>An error occurred. Please try again.</span>
              )}
            </StyledMessageAndButtonWrapper>
          )}
        </>
      )}
    </>
  );
}
