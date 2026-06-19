import { useState } from "react";
import {
  StyledFieldset,
  StyledLabel,
  StyledFormSection,
  StyledInput,
  StyledFormButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledMessageAndButtonWrapper,
  StyledSongDivider,
  StyledMessage,
} from "../Global/Global.styles";
import {
  StyledSongErrorMessage,
  StyledUpdateForm,
  StyledSongBlock,
} from "./PlaylistForm.styled";

export default function PlaylistForm({
  onSubmit,
  onCancel,
  defaultValues,
  editPlaylistId,
}) {
  const [currentPlaylistTitle, setCurrentPlaylistTitle] = useState(
    defaultValues?.playlist_title ?? ""
  );
  const [songDeleteMode, setSongDeleteMode] = useState(null);
  const [songs, setSongs] = useState(defaultValues?.songs ?? []);
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });

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
      return;
    }
    if (isDuplicate(currentSong)) {
      setSongError("This song is already in the playlist.");
      return;
    }
    if (songs.length >= 20) {
      setSongError("A playlist can contain a maximum of 20 songs.");
      return;
    }
    setSongs([...songs, currentSong]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(null);
  }

  function handlePlaylistFormClear() {
    setCurrentPlaylistTitle("");
    setSongs([]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(false);
  }

  function handleSongDelete(index) {
    const updated = songs.filter((song, i) => i !== index);
    setSongs(updated);
  }

  async function handlePlaylistDataCollect(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playlistTitle = formData.get("playlistTitle") ?? currentPlaylistTitle;
    const allSongs =
      currentSong.title && currentSong.artist && !isDuplicate(currentSong)
        ? [...songs, currentSong]
        : songs;
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
          <legend>Add a Playlist</legend>
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
        <p>Add up to 20 Songs</p>
        {songError && (
          <StyledSongErrorMessage role="alert">
            {songError}
          </StyledSongErrorMessage>
        )}
        <StyledFormSection>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <StyledInput
            type="text"
            id="title"
            name="title"
            maxLength={30}
            title="Title must be between 1 and 30 characters."
            value={currentSong.title}
            onChange={(event) =>
              setCurrentSong({ ...currentSong, title: event.target.value })
            }
          />
        </StyledFormSection>
        <StyledFormSection>
          <StyledLabel htmlFor="artist">Artist</StyledLabel>
          <StyledInput
            type="text"
            id="artist"
            name="artist"
            maxLength={30}
            title="Artist must be between 1 and 30 characters."
            value={currentSong.artist}
            onChange={(event) =>
              setCurrentSong({ ...currentSong, artist: event.target.value })
            }
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
        <StyledFormButtonWrapper>
          <StyledButtonPrimary
            type="button"
            aria-label="Add song"
            onClick={() => handleSongAdd()}
          >
            Add Song
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
        <StyledSongDivider />
        {defaultValues ? (
          songs.map((song, index) => (
  <StyledUpdateForm key={`${song.title}-${song.artist}`}>
              {songDeleteMode === `${song.title}-${song.artist}` ? (
                <StyledMessageAndButtonWrapper>
                  <StyledMessage>Delete this song?</StyledMessage>

                  <StyledButtonSecondary
                    type="button"
                    aria-label="Cancel song deletion"
                    onClick={() => setSongDeleteMode(null)}
                  >
                    No
                  </StyledButtonSecondary>
                  <StyledButtonPrimary
                    type="button"
                    aria-label="Confirm song deletion"
                    onClick={() => {
                      handleSongDelete(index);
                      setSongDeleteMode(null);
                    }}
                  >
                    Yes
                  </StyledButtonPrimary>
                </StyledMessageAndButtonWrapper>
              ) : (
                <StyledMessageAndButtonWrapper>
                  <h4>Song {index + 1}</h4>
                  <StyledButtonSecondary
                    type="button"
                    aria-label="Delete song"
                    onClick={() =>
                      setSongDeleteMode(`${song.title}-${song.artist}`)
                    }
                  >
                    Delete Song
                  </StyledButtonSecondary>
                </StyledMessageAndButtonWrapper>
              )}
              <StyledSongBlock>
                <StyledFormSection>
                  <StyledLabel>Title</StyledLabel>
                  <StyledInput
                    value={song.title}
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
                  <StyledLabel>Artist</StyledLabel>
                  <StyledInput
                    value={song.artist}
                    onChange={(event) => {
                      const updated = songs.map((existingSong, i) =>
                        i === index
                          ? { ...existingSong, artist: event.target.value }
                          : existingSong
                      );
                      setSongs(updated);
                    }}
                  />
                </StyledFormSection>
                <StyledFormSection>
                  <StyledLabel>Youtube ID</StyledLabel>
                  <StyledInput
                    value={song.youtubeId || song.youtube_id || ""}
                    onChange={(event) => {
                      const updated = songs.map((existingSong, i) =>
                        i === index
                          ? { ...existingSong, youtube_id: event.target.value }
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
              </StyledSongBlock>
              <StyledSongDivider />
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
        <StyledFormButtonWrapper>
          <StyledButtonSecondary
            type="button"
            aria-label="Cancel"
            onClick={onCancel}
          >
            Cancel
          </StyledButtonSecondary>
          <StyledButtonSecondary
            type="button"
            aria-label="Clear form"
            onClick={handlePlaylistFormClear}
          >
            Start Over
          </StyledButtonSecondary>
          <StyledButtonPrimary type="submit" aria-label="Add playlist">
            Save
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
      </StyledFieldset>
    </form>
  );
}
