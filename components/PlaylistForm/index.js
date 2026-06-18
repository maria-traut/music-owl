import { useState } from "react";
import {
  StyledFieldset,
  StyledLabel,
  StyledFormSection,
  StyledInput,
  StyledFormButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "../Global/Global.styles";
import { StyledSongErrorMessage } from "./PlaylistForm.styled";

export default function PlaylistForm({ onSubmit, onCancel }) {
  const [songs, setSongs] = useState([]);
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });
  const [playlistTitle, setPlaylistTitle] = useState("");

  function isDuplicate(song) {
    return songs.some(
      (existingSong) =>
        existingSong.title.toLowerCase() === song.title.toLowerCase() &&
        existingSong.artist.toLowerCase() === song.artist.toLowerCase()
    );
  }

  function handleAddSong() {
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
    setPlaylistTitle("");
    setSongs([]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(false);
  }

  async function handleCollectPlaylistData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playlistTitle = formData.get("playlistTitle");
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
    <form onSubmit={handleCollectPlaylistData}>
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
            value={playlistTitle}
            onChange={(event) => setPlaylistTitle(event.target.value)}
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
            onClick={() => handleAddSong()}
          >
            Add Song
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
        <ol>
          {songs.map((song) => (
            <li key={`${song.title}-${song.artist}`}>
              {song.title} — {song.artist}
            </li>
          ))}
        </ol>
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
