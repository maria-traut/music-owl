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
  onPlaylistDelete,
  onPlaylistUpdate,
}) {
  const {
    data: playlists,
    isLoading,
    error,
  } = useSWR(`/api/playlists?personId=${personId}`);
  const [deletePlaylistId, setDeletePlaylistId] = useState(null);
  const [editPlaylistId, setEditPlaylistId] = useState(null);
  const [showMenuId, setShowMenuId] = useState(null);

  if (isLoading) return <StyledMessage>Loading ...</StyledMessage>;
  if (error) return <StyledMessage>An error occurred.</StyledMessage>;
  if (!playlists)
    return <StyledMessage>Playlists could not be loaded.</StyledMessage>;
  if (playlists.length === 0)
    return (
      <StyledMessage>
        No playlists yet. Start creating one to bring music and memories
        together.
      </StyledMessage>
    );

  return (
    <StyledPlaylistList>
      {playlists.map((playlist) =>
        editPlaylistId === playlist._id ? (
          <PlaylistForm
            color={color}
            key={playlist._id}
            defaultValues={playlist}
            onSubmit={async (data) => {
              const success = await onPlaylistUpdate(playlist._id, data);
              if (success) setEditPlaylistId(null);
            }}
            onCancel={() => setEditPlaylistId(null)}
            editPlaylistId={editPlaylistId}
          />
        ) : (
          <StyledPlaylist key={playlist._id} $color={color}>
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
                    onClick={() => onPlaylistDelete(playlist._id)}
                  >
                    Yes
                  </StyledButtonDanger>
                </StyledButtonWrapper>
              </StyledMessageAndButtonWrapper>
            )}
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
