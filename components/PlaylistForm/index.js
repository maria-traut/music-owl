import { useState } from "react";
import styled from "styled-components";
import {
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "../Global/Global.styles";

export default function PlaylistForm({ onSubmit }) {
  const [songs, setSongs] = useState([]);
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });

  function handleAddSong() {
    if (!currentSong.title || !currentSong.artist) return;
    setSongs([...songs, currentSong]);
    setCurrentSong({ title: "", artist: "", youtubeId: "", note: "" });
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
          <StyledButtonSecondary type="button" aria-label="Clear form">
            Clear
          </StyledButtonSecondary>
          <StyledButtonPrimary type="submit" aria-label="Add playlist">
            Create Playlist
          </StyledButtonPrimary>
        </StyledFormButtonWrapper>
      </StyledFieldset>
    </form>
  );
}

const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border: 1px solid #2e5f8a;
  margin-top: 1rem;
`;

const StyledLabel = styled.label`
  margin-top: 0.5rem;
`;

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  &:user-invalid {
    border: 1px solid salmon;
  }
`;

const StyledFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const StyledSongErrorMessage = styled.p`
  color: salmon;
`;
