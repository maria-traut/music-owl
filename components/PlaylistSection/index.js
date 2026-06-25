import PlaylistForm from "../PlaylistForm";
import PlaylistList from "../PlaylistList";
import {
  StyledPlaylistSectionTitle,
  StyledPlaylistSectionHeader,
} from "./PlaylistSection.styled";
import { StyledButtonPrimary, StyledMessage } from "../Global/Global.styles";

export default function PlaylistSection({
  _id,
  color,
  activeMode,
  setActiveMode,
  playlistError,
  playlistCreateSuccess,
  playlistUpdateSuccess,
  playlistDeleteSuccess,
  playlistUpdateError,
  onPlaylistCreate,
  onPlaylistUpdate,
  onPlaylistDelete,
}) {
  return (
    <section>
      <StyledPlaylistSectionHeader>
        <StyledPlaylistSectionTitle>Playlists</StyledPlaylistSectionTitle>
        {activeMode !== "playlist form" && (
          <StyledButtonPrimary
            type="button"
            aria-label="Open Playlist Form"
            onClick={() => setActiveMode("playlist form")}
          >
            + New Playlist
          </StyledButtonPrimary>
        )}
      </StyledPlaylistSectionHeader>

      {activeMode === "playlist form" && (
        <PlaylistForm
          onSubmit={(data) => onPlaylistCreate(data)}
          onCancel={() => setActiveMode(null)}
        />
      )}

      {playlistCreateSuccess && (
        <StyledMessage>Playlist successfully created.</StyledMessage>
      )}
      {playlistUpdateSuccess && (
        <StyledMessage>Playlist successfully updated.</StyledMessage>
      )}
      {playlistDeleteSuccess && (
        <StyledMessage>Playlist successfully deleted.</StyledMessage>
      )}
      {playlistUpdateError && <p role="alert">{playlistUpdateError}</p>}
      {playlistError && <p role="alert">{playlistError}</p>}

      <PlaylistList
        personId={_id}
        color={color}
        onPlaylistDelete={onPlaylistDelete}
        onPlaylistUpdate={onPlaylistUpdate}
      />
    </section>
  );
}
