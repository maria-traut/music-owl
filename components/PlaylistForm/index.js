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

export default function PlaylistForm({ onSubmit }) {
  const [songs, setSongs] = useState([]);
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });
  const [playlistTitle, setPlaylistTitle] = useState("");

  function handleAddSong() {
    if (!currentSong.title || !currentSong.artist) return;
    setSongs([...songs, currentSong]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
  }

  function handlePlaylistFormClear() {
    setPlaylistTitle("");
    setSongs([]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
    setSongError(false);
  }

  function handleCollectPlaylistData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playlistTitle = formData.get("playlistTitle");
    const allSongs =
      currentSong.title && currentSong.artist ? [...songs, currentSong] : songs;
    if (allSongs.length === 0) {
      setSongError("Please enter at least one song.");
      return;
    }
    setSongError(null);
    onSubmit({ playlistTitle, songs: allSongs });
    handlePlaylistFormClear();
  }

  return (
    <fom onSubmit={handleCollectPlaylistData}>
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
          <StyledSongErrorMessage p role="alert">
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
              setCurrentSong({ ...currentSong, youtubeId: event.target.value })
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
          {songs.map((song, index) => (
            <li key={index}>
              {song.title} — {song.artist}
            </li>
          ))}
        </ol>
        <StyledFormButtonWrapper>
          <StyledButtonSecondary
            type="button"
            aria-label="Clear form"
            onClick={handlePlaylistFormClear}
          >
            Start Over
          </StyledButtonSecondary>
          <StyledButtonPrimary type="submit" aria-label="Add playlist">
            Create Playlist
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
      </StyledFieldset>
    </fom>
  );
}
