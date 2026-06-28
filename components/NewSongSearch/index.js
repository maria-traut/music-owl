import {
  StyledFormSection,
  StyledLabel,
  StyledInput,
  StyledTextButton,
  StyledFormButtonWrapperLeft,
  StyledSearchResultList,
} from "../Global/Global.styles";

export default function NewSongSearch({
  currentSong,
  setCurrentSong,
  newSongSearchQuery,
  setNewSongSearchQuery,
  newSongSearchResults,
  setNewSongSearchResults,
  onNewSongSearch,
  decodeHtml,
}) {
  return (
    <StyledFormSection>
      <StyledLabel htmlFor="search">Search</StyledLabel>
      <StyledInput
        type="text"
        id="search"
        name="search"
        placeholder="Find on YouTube"
        value={newSongSearchQuery}
        onChange={(event) => setNewSongSearchQuery(event.target.value)}
      />
      <StyledFormButtonWrapperLeft>
        <StyledTextButton type="button" onClick={onNewSongSearch}>
          Go
        </StyledTextButton>
        <StyledTextButton
          type="button"
          disabled={!newSongSearchQuery}
          onClick={() => {
            setNewSongSearchQuery("");
            setNewSongSearchResults([]);
          }}
        >
          Clear
        </StyledTextButton>
      </StyledFormButtonWrapperLeft>
      <StyledSearchResultList>
        {newSongSearchResults.map((result) => (
          <li key={result.id.videoId}>
            <button
              type="button"
              onClick={() => {
                setCurrentSong({
                  ...currentSong,
                  youtubeId: result.id.videoId,
                });

                setNewSongSearchResults([]);
                setNewSongSearchQuery("");
              }}
            >
              {decodeHtml(result.snippet.title)}
            </button>
          </li>
        ))}
      </StyledSearchResultList>
    </StyledFormSection>
  );
}
