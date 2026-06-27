import {
  StyledConfirmMessage,
  StyledButtonWrapper,
  StyledButtonSecondary,
  StyledButtonDanger,
  StyledConfirmDialog,
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
            <StyledConfirmDialog>
              <StyledConfirmMessage>
                Remove this person and go back?
              </StyledConfirmMessage>
              <StyledButtonWrapper>
                <StyledButtonDanger
                  type="button"
                  aria-label="Confirm deletion"
                  onClick={onPersonDelete}
                >
                  Yes
                </StyledButtonDanger>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel deletion"
                  onClick={() => {
                    setActiveMode(null);
                  }}
                >
                  No
                </StyledButtonSecondary>
              </StyledButtonWrapper>
            </StyledConfirmDialog>
          )}
        </>
      )}
    </>
  );
}
