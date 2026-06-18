import useSWR from "swr";
import {
  StyledPlaylistList,
  StyledPlaylist,
  StyledPlaylistTitle,
  StyledSongList,
  StyledYoutubeLink,
  StyledNote,
  StyledLinkNoteWrapper,
} from "./PlaylistList.styled";
import {
  StyledButton,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledMessage,
  StyledButtonWrapper,
  StyledMessageAndButtonWrapper,
} from "../Global/Global.styles";
import { useState } from "react";
import PlaylistForm from "../PlaylistForm";

export default function PlaylistList({
  personId,
  color,
  handlePlaylistDelete,
}) {
  const {
    data: playlists,
    isLoading,
    error,
  } = useSWR(`/api/playlists?personId=${personId}`);
  const [deletePlaylistId, setDeletePlaylistId] = useState(null);
  const [playlistEditFormMode, setPlaylistEditFormMode] = useState(false);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!playlists) return <p>Playlists could not be loaded.</p>;
  if (playlists.length === 0) return <p>No playlists yet.</p>;

  return (
    <StyledPlaylistList>
      {playlists.map((playlist) => (
        <StyledPlaylist key={playlist._id} $color={color}>
          {!playlistEditFormMode ? (
            <>
              {deletePlaylistId === playlist._id ? (
                <StyledMessageAndButtonWrapper>
                  <StyledMessage>Delete this playlist?</StyledMessage>
                  <StyledButtonWrapper>
                    <StyledButtonSecondary
                      type="button"
                      aria-label="Cancel deletion"
                      onClick={() => setDeletePlaylistId(null)}
                    >
                      No
                    </StyledButtonSecondary>
                    <StyledButtonPrimary
                      type="button"
                      aria-label="Confirm deletion"
                      onClick={() => handlePlaylistDelete(playlist._id)}
                    >
                      Yes
                    </StyledButtonPrimary>
                  </StyledButtonWrapper>
                </StyledMessageAndButtonWrapper>
              ) : (
                <>
                  <StyledButtonWrapper>
                    <StyledButton
                      type="button"
                      aria-label="Delete playlist"
                      onClick={() => setDeletePlaylistId(playlist._id)}
                    >
                      x
                    </StyledButton>
                    <StyledButton
                      type="button"
                      aria-label="Edit playlist"
                      onClick={() => setPlaylistEditFormMode(true)}
                    >
                      &#9998;
                    </StyledButton>
                  </StyledButtonWrapper>
                </>
              )}
            </>
          ) : (
            <PlaylistForm
              defaultValues={playlist}
              onSubmit={(data) => handlePlaylistUpdate(playlist._id, data)}
              playlistEditFormMode={playlistEditFormMode}
              onCancelEdit={() => setPlaylistEditFormMode(false)}
            />
          )}
          <StyledPlaylistTitle>{playlist.playlist_title}</StyledPlaylistTitle>
          <StyledSongList>
            {playlist.songs.map((song) => (
              <li key={song.title}>
                {song.title} — {song.artist}{" "}
                <StyledLinkNoteWrapper>
                  <StyledYoutubeLink
                    href={`https://www.youtube.com/watch?v=${song.youtube_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▶
                  </StyledYoutubeLink>
                  {song.note && <StyledNote>{song.note}</StyledNote>}
                </StyledLinkNoteWrapper>
              </li>
            ))}
          </StyledSongList>
        </StyledPlaylist>
      ))}
    </StyledPlaylistList>
  );
}
