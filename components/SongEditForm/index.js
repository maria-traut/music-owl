import {
  StyledFormSection,
  StyledLabel,
  StyledInput,
  StyledMessageAndButtonWrapper,
  StyledFormButtonWrapperLeft,
  StyledButtonSecondary,
  StyledMenuItem,
  StyledHint,
  StyledSongForm,
  StyledSongBlock,
  StyledUpdateForm,
  StyledSongRow,
  StyledSongNumber,
  StyledSongInfo,
  StyledSongTitle,
  StyledSongArtist,
} from "../Global/Global.styles";

import YoutubeSearch from "../YoutubeSearch";
import KebabMenu from "../KebabMenu";

export default function SongEditForm({
  defaultValues,
  songs,
  setSongs,
  songEditMode,
  setSongEditMode,
  activeSongMenu,
  setActiveSongMenu,
  setSongDeleteMode,
  activeSearchIndex,
  setActiveSearchIndex,
  songSearches,
  setSongSearches,
  decodeHtml,
  onSongSearch,
  onSongSearchClear,
  onSongDelete,
}) {
  return (
    <>
      {defaultValues ? (
        songs.map((song, index) => (
          <StyledUpdateForm key={song.uid}>
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

                  <YoutubeSearch
                    song={song}
                    songs={songs}
                    setSongs={setSongs}
                    index={index}
                    activeSearchIndex={activeSearchIndex}
                    setActiveSearchIndex={setActiveSearchIndex}
                    songSearches={songSearches}
                    setSongSearches={setSongSearches}
                    decodeHtml={decodeHtml}
                    onSongSearch={onSongSearch}
                    onSongSearchClear={onSongSearchClear}
                  />

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
                          onSongDelete(index);
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
    </>
  );
}
