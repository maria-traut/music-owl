import {
  StyledFormSection,
  StyledLabel,
  StyledInput,
} from "../Global/Global.styles";

export default function PlaylistDetails({
  currentPlaylistTitle,
  setCurrentPlaylistTitle,
}) {
  return (
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
        value={currentPlaylistTitle}
        onChange={(event) => setCurrentPlaylistTitle(event.target.value)}
      ></StyledInput>
    </StyledFormSection>
  );
}
