import {
  StyledFormSection,
  StyledLabel,
  StyledInput,
  StyledButtonWrapper,
  StyledButtonSecondary,
} from "../Global/Global.styles";
styledserach;

export default function NewSongSearch() {
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
      <StyledButtonWrapper>
        <StyledButtonSecondary
          type="button"
          disabled={!newSongSearchQuery}
          onClick={() => {
            setNewSongSearchQuery("");
            setNewSongSearchResults([]);
          }}
        >
          Clear
        </StyledButtonSecondary>
        <StyledButtonSecondary type="button" onClick={handleNewSongSearch}>
          Go
        </StyledButtonSecondary>
      </StyledButtonWrapper>
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
