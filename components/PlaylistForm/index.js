import styled from "styled-components";

export default function PlaylistForm() {
  return (
    <form>
      <StyledFieldset>
        <legend>Add a Playlist</legend>
        <StyledFormSection>
          <StyledLabel htmlFor="playlistTitle">
            Playlist Title<span aria-hidden>*</span>
          </StyledLabel>
          <StyledInput
            type="text"
            id="playlistTitle"
            name="playlistTitle"
            required
            aria-required="true"
            maxLength={50}
            title="Playlist title must be between 1 and 50 characters."
          ></StyledInput>
        </StyledFormSection>
        <StyledFormSection>
          <StyledLabel htmlFor="title">
            Title<span aria-hidden>*</span>
          </StyledLabel>
          <StyledInput
            type="text"
            id="title"
            name="title"
            required
            aria-required="true"
            maxLength={30}
            title="Title must be between 1 and 30 characters."
          />
        </StyledFormSection>
        <StyledFormSection>
          <StyledLabel htmlFor="artist">
            Artist<span aria-hidden>*</span>
          </StyledLabel>
          <StyledInput
            type="text"
            id="artist"
            name="artist"
            required
            aria-required="true"
            maxLength={30}
            title="Artist must be between 1 and 30 characters."
          />
        </StyledFormSection>
        <StyledFormSection>
          <StyledLabel htmlFor="youtubeId">YouTube ID</StyledLabel>
          <StyledInput
            type="text"
            id="youtubeId"
            name="youtubeId"
            maxLength={30}
            title="Youtube ID must be between 1 and 30 characters."
          />
        </StyledFormSection>
        <StyledFormSection>
          <StyledLabel htmlFor="note">Note</StyledLabel>
          <StyledInput
            type="text"
            id="note"
            name="note"
            maxLength={50}
            title="Note must be between 1 and 50 characters."
          />
        </StyledFormSection>
      </StyledFieldset>
    </form>
  );
}

const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border: 1px solid #2e5f8a;
  margin-top: 1rem;
`;

const StyledLabel = styled.label`
  margin-top: 0.5rem;
`;

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  &:user-invalid {
    border: 1px solid salmon;
  }
`;
