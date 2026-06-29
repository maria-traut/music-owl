import { useState } from "react";
import {
  StyledFormButtonWrapperLeft,
  StyledButtonSecondary,
  StyledButtonTertiary,
  StyledFormSection,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledSongMaxErrorMessage,
  StyledSongForm,
  StyledHint,
  StyledYoutubeDetailsBox,
  StyledYoutubeDetailsSection,
} from "../Global/Global.styles";

import NewSongSearch from "../NewSongSearch";

export default function SongCreateForm({
  songs,
  songAddMode,
  setSongAddMode,
  setSongError,
  currentSong,
  setCurrentSong,
  newSongSearchQuery,
  setNewSongSearchQuery,
  newSongSearchResults,
  setNewSongSearchResults,
  onSongAdd,
  onNewSongSearch,
  decodeHtml,
  searchError,
}) {
  const [userTriedToAddMax, setUserTriedToAddMax] = useState(false);

  const handleAddSongClick = () => {
    if (songs.length >= 20) {
      setUserTriedToAddMax(true);
      return;
    }
    setSongAddMode(true);
    setSongError(null);
  };
  return (
    <>
      {!songAddMode ? (
        <>
          {userTriedToAddMax && (
            <StyledSongMaxErrorMessage>
              A playlist can contain a maximum of 20 songs.
            </StyledSongMaxErrorMessage>
          )}
          <StyledFormButtonWrapperLeft>
            <StyledButtonTertiary
              type="button"
              aria-label="Add song"
              onClick={handleAddSongClick}
            >
              + New Song
            </StyledButtonTertiary>
          </StyledFormButtonWrapperLeft>
        </>
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

          {searchError && (
            <StyledErrorMessage role="alert">{searchError}</StyledErrorMessage>
          )}
          <StyledYoutubeDetailsSection>
            <summary>YouTube details</summary>
            <StyledYoutubeDetailsBox>
              <NewSongSearch
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                newSongSearchQuery={newSongSearchQuery}
                setNewSongSearchQuery={setNewSongSearchQuery}
                newSongSearchResults={newSongSearchResults}
                setNewSongSearchResults={setNewSongSearchResults}
                onNewSongSearch={onNewSongSearch}
                decodeHtml={decodeHtml}
              />

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
            </StyledYoutubeDetailsBox>
          </StyledYoutubeDetailsSection>
          <StyledFormButtonWrapperLeft>
            <StyledButtonSecondary
              type="button"
              aria-label="Save song"
              onClick={() => {
                const success = onSongAdd();
                if (success) setSongAddMode(false);
              }}
              disabled={songs.length >= 20}
            >
              Add to playlist
            </StyledButtonSecondary>
          </StyledFormButtonWrapperLeft>
        </StyledSongForm>
      )}
    </>
  );
}
