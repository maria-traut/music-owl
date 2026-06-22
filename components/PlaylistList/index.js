import useSWR from "swr";
import { useState } from "react";
import {
  StyledPlaylistList,
  StyledPlaylist,
  StyledPlaylistTitle,
  StyledSongList,
  StyledPlaylistSongTitle,
  StyledPlaylistSongArtist,
  StyledPlaylistSongNumber,
  StyledYoutubeLink,
  StyledPlaylistSongInfo,
  StyledPlaylistNote,
  StyledLinkNoteWrapper,
  StyledPlaylistSongWrapper,
  StyledPlaylistHeader,
} from "./PlaylistList.styled";
import {
  StyledButtonDanger,
  StyledButtonSecondary,
  StyledMessage,
  StyledButtonWrapper,
  StyledMessageAndButtonWrapper,
  StyledMenuItem,
  StyledMenuWrapper,
} from "../Global/Global.styles";

import PlaylistForm from "../PlaylistForm";
import KebabMenu from "../KebabMenu";

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
      {playlists.map((playlist) =>
        editPlaylistId === playlist._id ? (
          <PlaylistForm
            key={playlist._id}
            defaultValues={playlist}
            onSubmit={async (data) => {
              const success = await handlePlaylistUpdate(playlist._id, data);
              if (success) setEditPlaylistId(null);
            }}
            onCancel={() => setEditPlaylistId(null)}
            editPlaylistId={editPlaylistId}
          />
        ) : (
          <StyledPlaylist key={playlist._id} $color={color}>
            <StyledPlaylistHeader>
              <StyledPlaylistTitle>
                {playlist.playlist_title}
              </StyledPlaylistTitle>
              {deletePlaylistId === playlist._id ? null : (
                <StyledMenuWrapper>
                  <KebabMenu
                    isOpen={showMenuId === playlist._id}
                    onOpen={() => setShowMenuId(playlist._id)}
                    onClose={() => setShowMenuId(null)}
                  >
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
                  </KebabMenu>
                </StyledMenuWrapper>
              )}
            </StyledPlaylistHeader>

            {deletePlaylistId === playlist._id && (
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
                  <StyledButtonDanger
                    type="button"
                    aria-label="Confirm deletion"
                    onClick={() => handlePlaylistDelete(playlist._id)}
                  >
                    Yes
                  </StyledButtonDanger>
                </StyledButtonWrapper>
              </StyledMessageAndButtonWrapper>
            )}

            <StyledSongList>
              {playlist.songs.map((song, index) => (
                <li key={song.title}>
                  <StyledPlaylistSongWrapper>
                    <StyledPlaylistSongNumber>
                      {index + 1}
                    </StyledPlaylistSongNumber>
                    <StyledPlaylistSongInfo>
                      <StyledPlaylistSongTitle>
                        {song.title}
                      </StyledPlaylistSongTitle>
                      <StyledPlaylistSongArtist>
                        {song.artist}
                      </StyledPlaylistSongArtist>
                      <StyledLinkNoteWrapper>
                        {song.youtube_id && (
                          <StyledYoutubeLink
                            href={`https://www.youtube.com/watch?v=${song.youtube_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ▶
                          </StyledYoutubeLink>
                        )}
                        {song.note && (
                          <StyledPlaylistNote>{song.note}</StyledPlaylistNote>
                        )}
                      </StyledLinkNoteWrapper>
                    </StyledPlaylistSongInfo>
                  </StyledPlaylistSongWrapper>
                </li>
              ))}
            </StyledSongList>
          </StyledPlaylist>
        )
      )}
    </StyledPlaylistList>
  );
}
