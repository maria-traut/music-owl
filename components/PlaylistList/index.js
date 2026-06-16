import useSWR from "swr";
import {
  StyledPlaylistList,
  StyledPlaylist,
  StyledPlaylistTitle,
  StyledSongList,
} from "./PlaylistList.styled";

export default function PlaylistList({ personId, color }) {
  const {
    data: playlists,
    isLoading,
    error,
  } = useSWR(`/api/playlists?personId=${personId}`);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!playlists) return <p>Playlists could not be loaded.</p>;
  if (playlists.length === 0) return <p>No playlists yet.</p>;

  return (
    <StyledPlaylistList>
      {playlists.map((playlist) => (
        <StyledPlaylist key={playlist.playlist_title} $color={color}>
          <StyledPlaylistTitle>{playlist.playlist_title}</StyledPlaylistTitle>
          <StyledSongList>
            {playlist.songs.map((song) => (
              <li key={song.title}>
                {song.title} by {song.artist}
              </li>
            ))}
          </StyledSongList>
        </StyledPlaylist>
      ))}
    </StyledPlaylistList>
  );
}
