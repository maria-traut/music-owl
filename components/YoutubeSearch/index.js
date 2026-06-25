import {
  StyledFormSection,
  StyledLabel,
  StyledInput,
  StyledButtonWrapper,
  StyledButtonSecondary,
  StyledSearchResultList,
} from "../Global/Global.styles";

export default function YoutubeSearch({
  song,
  songs,
  setSongs,
  index,
  activeSearchIndex,
  setActiveSearchIndex,
  songSearches,
  setSongSearches,
  decodeHtml,
  onSongSearch,
  onSongSearchClear,
}) {
  return (
    <StyledFormSection>
      <StyledLabel htmlFor="search">Search</StyledLabel>
      <StyledInput
        type="text"
        id="search"
        name="search"
        placeholder="Find on YouTube"
        value={songSearches[song.uid]?.query || ""}
        onChange={(event) =>
          setSongSearches((prev) => ({
            ...prev,
            [song.uid]: {
              ...prev[song.uid],
              query: event.target.value,
              results: prev[song.uid]?.results || [],
            },
          }))
        }
      />
      <StyledButtonWrapper>
        <StyledButtonSecondary
          type="button"
          disabled={!songSearches[song.uid]?.query}
          onClick={() => onSongSearchClear(song.uid)}
        >
          Clear
        </StyledButtonSecondary>
        <StyledButtonSecondary
          type="button"
          onClick={() => onSongSearch(song.uid, index)}
        >
          Go
        </StyledButtonSecondary>
      </StyledButtonWrapper>
      {activeSearchIndex === index && (
        <StyledSearchResultList>
          {songSearches[song.uid]?.results?.map((result) => (
            <li key={result.id.videoId}>
              <button
                type="button"
                onClick={() => {
                  const updated = songs.map((existingSong, i) =>
                    i === activeSearchIndex
                      ? {
                          ...existingSong,
                          youtube_id: result.id.videoId,
                        }
                      : existingSong
                  );

                  setSongs(updated);

                  setSongSearches((prev) => ({
                    ...prev,
                    [song.uid]: {
                      query: "",
                      results: [],
                    },
                  }));

                  setActiveSearchIndex(null);
                }}
              >
                {decodeHtml(result.snippet.title)}
              </button>
            </li>
          ))}
        </StyledSearchResultList>
      )}
    </StyledFormSection>
  );
}
