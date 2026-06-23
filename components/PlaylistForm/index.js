import { useState } from "react";
import {
  StyledFieldset,
  StyledFormSection,
  StyledInput,
  StyledFormButtonWrapper,
  StyledFormButtonWrapperLeft,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonTertiary,
  StyledMessageAndButtonWrapper,
  StyledButtonWrapper,
  StyledErrorMessage,
  StyledLabel,
  StyledMenuItem,
  StyledH4,
} from "../Global/Global.styles";
import {
  StyledUpdateForm,
  StyledSongBlock,
  StyledSearchResultList,
  StyledSongForm,
  StyledSongRow,
  StyledSongNumber,
  StyledSongInfo,
  StyledSongTitle,
  StyledSongArtist,
  StyledHint,
} from "./PlaylistForm.styled";
import KebabMenu from "../KebabMenu";

export default function PlaylistForm({
  onSubmit,
  onCancel,
  defaultValues,
  editPlaylistId,
}) {
  const [currentPlaylistTitle, setCurrentPlaylistTitle] = useState(
    defaultValues?.playlist_title ?? ""
  );

  const [songs, setSongs] = useState(defaultValues?.songs ?? []);
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });

  const [activeSongMenu, setActiveSongMenu] = useState(null);
  const [songEditMode, setSongEditMode] = useState(null);
  const [songDeleteMode, setSongDeleteMode] = useState(null);
  const [songAddMode, setSongAddMode] = useState(!defaultValues);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSearchIndex, setActiveSearchIndex] = useState(null);
  const [searchError, setSearchError] = useState(null);

  async function handleSongSearch(index = null) {
    if (!searchQuery) {
      setSearchError("Please enter a search term.");
      setTimeout(() => setSearchError(false), 3000);
      return;
    }
    const response = await fetch(
      `/api/youtube-search?query=${encodeURIComponent(searchQuery)}`
    );
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      setSearchResults([]);
      setSearchError("No results found. Try a different search term.");
      return;
    }
    setSearchError(null);
    setSearchResults(data.items);
    setActiveSearchIndex(index);
  }

  function handleSongSearchClear() {
    setSearchQuery("");
    setSearchResults([]);
  }

  function decodeHtml(html) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  }

  function isDuplicate(song) {
    return songs.some(
      (existingSong) =>
        existingSong.title.toLowerCase() === song.title.toLowerCase() &&
        existingSong.artist.toLowerCase() === song.artist.toLowerCase()
    );
  }

  function handleSongAdd() {
    if (!currentSong.title || !currentSong.artist) {
      setSongError("Please enter at least a title and an artist.");
      setTimeout(() => setSongError(false), 3000);
      return false;
    }
    if (isDuplicate(currentSong)) {
      setSongError("This song is already in the playlist.");
      return false;
    }
    if (songs.length >= 20) {
      setSongError("A playlist can contain a maximum of 20 songs.");
      return false;
    }
    setSongs([...songs, currentSong]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(null);
    return true;
  }

  function handleSongDelete(index) {
    const updated = songs.filter((song, i) => i !== index);
    setSongs(updated);
  }

  function handlePlaylistFormClear() {
    setCurrentPlaylistTitle("");
    setSongs([]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(false);
  }

  async function handlePlaylistDataCollect(event) {
    event.preventDefault();

    const invalidSong = songs.some((song) => !song.title || !song.artist);

    if (invalidSong) {
      setSongError("Every song needs at least a title and an artist.");

      return;
    }

    const formData = new FormData(event.target);
    const playlistTitle = formData.get("playlistTitle") || currentPlaylistTitle;
    const allSongs = (
      currentSong.title && currentSong.artist && !isDuplicate(currentSong)
        ? [...songs, currentSong]
        : songs
    ).map((song) => ({
      title: song.title,
      artist: song.artist,
      youtube_id: song.youtubeId || song.youtube_id || "",
      note: song.note,
    }));
    if (allSongs.length === 0) {
      setSongError("Please enter at least one song.");
      return;
    }
    setSongError(null);

    const success = await onSubmit({ playlistTitle, songs: allSongs });
    if (success) handlePlaylistFormClear();
  }

  return (
    <form onSubmit={handlePlaylistDataCollect}>
      <StyledFieldset>
        {!editPlaylistId ? (
          <legend>Create a Playlist</legend>
        ) : (
          <legend>Edit Playlist</legend>
        )}
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
        <StyledH4>Songs</StyledH4>
        {songError && (
          <StyledErrorMessage role="alert">{songError}</StyledErrorMessage>
        )}
        {defaultValues ? (
          songs.map((song, index) => (
            <StyledUpdateForm key={index}>
              <StyledSongBlock>
                {songEditMode === index ? (
                  <StyledSongForm>
                    <StyledFormSection>
                      <StyledLabel>
                        Title<span aria-hidden>*</span>
                      </StyledLabel>
                      <StyledInput
                        value={song.title}
                        aria-required="true"
                        onChange={(event) => {
                          const updated = songs.map((existingSong, i) =>
                            i === index
                              ? { ...existingSong, title: event.target.value }
                              : existingSong
                          );
                          setSongs(updated);
                        }}
                      />
                    </StyledFormSection>

                    <StyledFormSection>
                      <StyledLabel>
                        Artist<span aria-hidden>*</span>
                      </StyledLabel>
                      <StyledInput
                        value={song.artist}
                        aria-required="true"
                        onChange={(event) => {
                          const updated = songs.map((existingSong, i) =>
                            i === index
                              ? {
                                  ...existingSong,
                                  artist: event.target.value,
                                }
                              : existingSong
                          );
                          setSongs(updated);
                        }}
                      />
                    </StyledFormSection>

                    <StyledFormSection>
                      <StyledLabel>Search</StyledLabel>
                      <StyledInput
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Find on YouTube"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                      />
                      <StyledButtonWrapper>
                        <StyledButtonSecondary
                          type="button"
                          disabled={!searchQuery}
                          onClick={handleSongSearchClear}
                        >
                          Clear
                        </StyledButtonSecondary>
                        <StyledButtonSecondary
                          type="button"
                          onClick={() => {
                            setActiveSearchIndex(index);
                            handleSongSearch(index);
                          }}
                        >
                          Go
                        </StyledButtonSecondary>
                      </StyledButtonWrapper>
                      {activeSearchIndex === index && (
                        <StyledSearchResultList>
                          {searchResults.map((result) => (
                            <li key={result.id.videoId}>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = songs.map(
                                    (existingSong, i) =>
                                      i === activeSearchIndex
                                        ? {
                                            ...existingSong,
                                            youtube_id: result.id.videoId,
                                          }
                                        : existingSong
                                  );

                                  setSongs(updated);
                                  setSearchResults([]);
                                  setSearchQuery("");
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

                    <StyledFormSection>
                      <StyledLabel>
                        Youtube ID{" "}
                        <StyledHint>(from the URL after ?v=)</StyledHint>
                      </StyledLabel>
                      <StyledInput
                        maxLength={11}
                        pattern="^[a-zA-Z0-9_-]{11}$"
                        title="Youtube ID must be exactly 11 characters."
                        placeholder="e.g. CGj85pVzRJs"
                        value={song.youtubeId || song.youtube_id || ""}
                        onChange={(event) => {
                          const updated = songs.map((existingSong, i) =>
                            i === index
                              ? {
                                  ...existingSong,
                                  youtube_id: event.target.value,
                                }
                              : existingSong
                          );
                          setSongs(updated);
                        }}
                      />
                    </StyledFormSection>

                    <StyledFormSection>
                      <StyledLabel>Note</StyledLabel>
                      <StyledInput
                        value={song.note || ""}
                        onChange={(event) => {
                          const updated = songs.map((existingSong, i) =>
                            i === index
                              ? { ...existingSong, note: event.target.value }
                              : existingSong
                          );
                          setSongs(updated);
                        }}
                      />
                    </StyledFormSection>
                    <StyledFormButtonWrapperLeft>
                      <StyledButtonSecondary
                        onClick={() => setSongEditMode(null)}
                      >
                        Done
                      </StyledButtonSecondary>
                    </StyledFormButtonWrapperLeft>
                  </StyledSongForm>
                ) : (
                  <StyledSongRow>
                    <StyledSongNumber>{index + 1}</StyledSongNumber>
                    <StyledSongInfo>
                      <StyledSongTitle>{song.title}</StyledSongTitle>
                      <StyledSongArtist>{song.artist}</StyledSongArtist>
                    </StyledSongInfo>
                    <StyledMessageAndButtonWrapper>
                      <KebabMenu
                        isOpen={activeSongMenu === index}
                        onOpen={() => setActiveSongMenu(index)}
                        onClose={() => setActiveSongMenu(null)}
                      >
                        <StyledMenuItem
                          type="button"
                          aria-label="Edit song"
                          onClick={() => {
                            setSongEditMode(index);
                            setSongDeleteMode(null);
                            setActiveSongMenu(null);
                          }}
                        >
                          Edit song
                        </StyledMenuItem>

                        <StyledMenuItem
                          type="button"
                          aria-label="Delete song"
                          onClick={() => {
                            handleSongDelete(index);
                            setSongDeleteMode(null);
                            setSongEditMode(null);
                            setActiveSongMenu(null);
                          }}
                        >
                          Delete song
                        </StyledMenuItem>
                      </KebabMenu>
                    </StyledMessageAndButtonWrapper>
                  </StyledSongRow>
                )}
              </StyledSongBlock>
            </StyledUpdateForm>
          ))
        ) : (
          <ol>
            {songs.map((song) => (
              <li key={`${song.title}-${song.artist}`}>
                {song.title} — {song.artist}
              </li>
            ))}
          </ol>
        )}

        {!songAddMode ? (
          <StyledFormButtonWrapperLeft>
            <StyledButtonTertiary
              type="button"
              aria-label="Add song"
              onClick={() => {
                setSongAddMode(true);
                setSongError(null);
              }}
            >
              + New Song
            </StyledButtonTertiary>
          </StyledFormButtonWrapperLeft>
        ) : (
          <StyledSongForm>
            <StyledFormSection>
              <StyledLabel htmlFor="title">
                Title<span aria-hidden>*</span>
              </StyledLabel>
              <StyledInput
                type="text"
                id="title"
                name="title"
                aria-required="true"
                maxLength={30}
                title="Title must be between 1 and 30 characters."
                value={currentSong.title}
                onChange={(event) =>
                  setCurrentSong({ ...currentSong, title: event.target.value })
                }
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
                aria-required="true"
                maxLength={30}
                title="Artist must be between 1 and 30 characters."
                value={currentSong.artist}
                onChange={(event) =>
                  setCurrentSong({ ...currentSong, artist: event.target.value })
                }
              />
            </StyledFormSection>
            {searchError && (
              <StyledErrorMessage role="alert">
                {searchError}
              </StyledErrorMessage>
            )}
            <StyledFormSection>
              <StyledLabel htmlFor="search">Search</StyledLabel>
              <StyledInput
                type="text"
                id="search"
                name="search"
                placeholder="Find on YouTube"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <StyledButtonWrapper>
                <StyledButtonSecondary
                  type="button"
                  disabled={!searchQuery}
                  onClick={handleSongSearchClear}
                >
                  Clear
                </StyledButtonSecondary>
                <StyledButtonSecondary type="button" onClick={handleSongSearch}>
                  Go
                </StyledButtonSecondary>
              </StyledButtonWrapper>
              <StyledSearchResultList>
                {searchResults.map((result) => (
                  <li key={result.id.videoId}>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentSong({
                          ...currentSong,
                          youtubeId: result.id.videoId,
                        });
                        setSearchResults([]);
                        setSearchQuery("");
                      }}
                    >
                      {decodeHtml(result.snippet.title)}
                    </button>
                  </li>
                ))}
              </StyledSearchResultList>
            </StyledFormSection>
            <StyledFormSection>
              <StyledLabel>
                Youtube ID <StyledHint>(from the URL after ?v=)</StyledHint>
              </StyledLabel>
              <StyledInput
                type="text"
                id="youtubeId"
                name="youtubeId"
                placeholder="e.g. CGj85pVzRJs"
                maxLength={30}
                title="Youtube ID must be between 1 and 30 characters."
                value={currentSong.youtubeId}
                onChange={(event) =>
                  setCurrentSong({
                    ...currentSong,
                    youtubeId: event.target.value,
                  })
                }
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
                value={currentSong.note}
                onChange={(event) =>
                  setCurrentSong({ ...currentSong, note: event.target.value })
                }
              />
            </StyledFormSection>
            <StyledFormButtonWrapperLeft>
              <StyledButtonSecondary
                type="button"
                aria-label="Save song"
                onClick={() => {
                  const success = handleSongAdd();
                  if (success) setSongAddMode(false);
                }}
              >
                Add to playlist
              </StyledButtonSecondary>
            </StyledFormButtonWrapperLeft>
          </StyledSongForm>
        )}
        <StyledFormButtonWrapper>
          <StyledButtonSecondary
            type="button"
            aria-label="Cancel"
            onClick={onCancel}
          >
            Cancel
          </StyledButtonSecondary>
          <StyledButtonPrimary type="submit" aria-label="Add playlist">
            Save
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
      </StyledFieldset>
    </form>
  );
}
