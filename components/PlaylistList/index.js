import useSWR from "swr";
import { useState } from "react";
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
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledMessage,
  StyledButtonWrapper,
  StyledMessageAndButtonWrapper,
  StyledMenuItem,
  StyledMenuButtonDark,
  StyledMenu,
  StyledMenuWrapper,
} from "../Global/Global.styles";

import PlaylistForm from "../PlaylistForm";
import KebabMenuIcon from "../KebabMenuIcon";

export default function PlaylistList({
  personId,
  color,
  handlePlaylistDelete,
  handlePlaylistUpdate,
}) {
  const {
    data: playlists,
    isLoading,
    error,
  } = useSWR(`/api/playlists?personId=${personId}`);
  const [deletePlaylistId, setDeletePlaylistId] = useState(null);
  const [editPlaylistId, setEditPlaylistId] = useState(null);
  const [showMenuId, setShowMenuId] = useState(null);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!playlists) return <p>Playlists could not be loaded.</p>;
  if (playlists.length === 0) return <p>No playlists yet.</p>;

  return (
    <StyledPlaylistList>
      {playlists.map((playlist) => (
        <StyledPlaylist key={playlist._id} $color={color}>
          {editPlaylistId === playlist._id ? (
            <PlaylistForm
              defaultValues={playlist}
              onSubmit={async (data) => {
                const success = await handlePlaylistUpdate(playlist._id, data);
                if (success) setEditPlaylistId(null);
              }}
              onCancel={() => setEditPlaylistId(null)}
              editPlaylistId={editPlaylistId}
            />
          ) : (
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
                <StyledMenuWrapper>
                  <StyledMenuButtonDark
                    type="button"
                    aria-label="Further options"
                    onClick={() =>
                      setShowMenuId(
                        showMenuId === playlist._id ? null : playlist._id
                      )
                    }
                  >
                    <KebabMenuIcon />
                  </StyledMenuButtonDark>
                  {showMenuId === playlist._id && (
                    <StyledMenu>
                      <StyledMenuItem
                        type="button"
                        aria-label="Delete playlist"
                        onClick={() => {
                          setDeletePlaylistId(playlist._id);
                          setShowMenuId(null);
                        }}
                      >
                        Delete playlist
                      </StyledMenuItem>
                      <StyledMenuItem
                        type="button"
                        aria-label="Edit playlist"
                        onClick={() => {
                          setEditPlaylistId(playlist._id);
                          setShowMenuId(null);
                        }}
                      >
                        Edit playlist
                      </StyledMenuItem>
                    </StyledMenu>
                  )}
                </StyledMenuWrapper>
              )}

              <StyledPlaylistTitle>
                {playlist.playlist_title}
              </StyledPlaylistTitle>
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
            </>
          )}
        </StyledPlaylist>
      ))}
    </StyledPlaylistList>
  );
}
