import {
  StyledMessage,
  StyledMessageAndButtonWrapper,
  StyledButtonWrapper,
  StyledButtonSecondary,
  StyledButtonDanger,
} from "../Global/Global.styles";

export default function PersonDeleteDialog({
  activeMode,
  setActiveMode,
  onPersonDelete,
  personDeleteSuccess,
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
            </StyledMessageAndButtonWrapper>
          )}
        </>
      )}
    </>
  );
}
