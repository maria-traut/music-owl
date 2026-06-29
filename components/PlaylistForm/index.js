import { useState } from "react";
import {
  StyledPlaylistFieldset,
  StyledFormButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledErrorMessage,
  StyledH4,
} from "../Global/Global.styles";

import PlaylistDetails from "../PlaylistDetails";

import SongCreateForm from "../SongCreateForm";
import SongEditForm from "../SongEditForm";

export default function PlaylistForm({
  color,
  onSubmit,
  onCancel,
  defaultValues,
  editPlaylistId,
}) {
  const [currentPlaylistTitle, setCurrentPlaylistTitle] = useState(
    defaultValues?.playlist_title ?? ""
  );

  const [songs, setSongs] = useState(
    (defaultValues?.songs ?? []).map((song) => ({
      uid: song.uid || crypto.randomUUID(),
      ...song,
    }))
  );
  const [songError, setSongError] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    title: "",
    artist: "",
    youtubeId: "",
    note: "",
  });

  const [activeSongMenu, setActiveSongMenu] = useState(null);
  const [songEditMode, setSongEditMode] = useState(null);
  const [songAddMode, setSongAddMode] = useState(!defaultValues);

  const [songSearches, setSongSearches] = useState({});
  const [newSongSearchQuery, setNewSongSearchQuery] = useState("");
  const [newSongSearchResults, setNewSongSearchResults] = useState([]);

  const [activeSearchIndex, setActiveSearchIndex] = useState(null);
  const [searchError, setSearchError] = useState(null);

  async function handleSongSearch(songUid, index) {
    const query = songSearches[songUid]?.query?.trim();

    if (!query) {
      setSearchError("Please enter a search term.");
      setTimeout(() => setSearchError(null), 3000);
      return;
    }
    try {
      const response = await fetch(
        `/api/youtube-search?query=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        setSearchError("Something went wrong. Please try again.");
        return;
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setSongSearches((prev) => ({
          ...prev,
          [songUid]: {
            ...prev[songUid],
            results: data.items,
          },
        }));

        setSearchError("No results found. Try a different search term.");
        setActiveSearchIndex(index);

        return;
      }

      setSearchError(null);

      setSongSearches((prev) => ({
        ...prev,
        [songUid]: {
          ...prev[songUid],
          results: data.items,
        },
      }));
      setActiveSearchIndex(index);
    } catch (error) {
      setSearchError("Something went wrong. Please try again.");
    }
  }

  async function handleNewSongSearch() {
    if (!newSongSearchQuery.trim()) {
      setSearchError("Please enter a search term.");
      return;
    }
    try {
      const response = await fetch(
        `/api/youtube-search?query=${encodeURIComponent(newSongSearchQuery)}`
      );

      if (!response.ok) {
        setSearchError("Something went wrong. Please try again.");
        return;
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setNewSongSearchResults([]);
        setSearchError("No results found.");
        return;
      }

      setSearchError(null);
      setNewSongSearchResults(data.items);
    } catch (error) {
      setSearchError("Something went wrong. Please try again.");
    }
  }

  function handleSongSearchClear(songUid) {
    setSongSearches((prev) => ({
      ...prev,
      [songUid]: {
        query: "",
        results: [],
      },
    }));
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
    setSongs([
      ...songs,
      {
        uid: crypto.randomUUID(),
        ...currentSong,
      },
    ]);
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
      <StyledPlaylistFieldset $color={color}>
        {!editPlaylistId ? (
          <legend>Create a Playlist</legend>
        ) : (
          <legend>Edit Playlist</legend>
        )}
        <PlaylistDetails
          currentPlaylistTitle={currentPlaylistTitle}
          setCurrentPlaylistTitle={setCurrentPlaylistTitle}
        />
        <StyledH4>Songs</StyledH4>

        <SongEditForm
          defaultValues={defaultValues}
          songs={songs}
          setSongs={setSongs}
          songEditMode={songEditMode}
          setSongEditMode={setSongEditMode}
          activeSongMenu={activeSongMenu}
          setActiveSongMenu={setActiveSongMenu}
          activeSearchIndex={activeSearchIndex}
          setActiveSearchIndex={setActiveSearchIndex}
          songSearches={songSearches}
          setSongSearches={setSongSearches}
          decodeHtml={decodeHtml}
          onSongSearch={handleSongSearch}
          onSongSearchClear={handleSongSearchClear}
          onSongDelete={handleSongDelete}
        />

        <SongCreateForm
          songs={songs}
          songAddMode={songAddMode}
          setSongAddMode={setSongAddMode}
          setSongError={setSongError}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          newSongSearchQuery={newSongSearchQuery}
          setNewSongSearchQuery={setNewSongSearchQuery}
          newSongSearchResults={newSongSearchResults}
          setNewSongSearchResults={setNewSongSearchResults}
          onSongAdd={handleSongAdd}
          onNewSongSearch={handleNewSongSearch}
          decodeHtml={decodeHtml}
          searchError={searchError}
        />
        {songError && (
          <StyledErrorMessage role="alert">{songError}</StyledErrorMessage>
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
      </StyledPlaylistFieldset>
    </form>
  );
}
