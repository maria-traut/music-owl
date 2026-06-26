import PlaylistForm from "../PlaylistForm";
import PlaylistList from "../PlaylistList";
import {
  StyledPlaylistSectionTitle,
  StyledPlaylistSectionHeader,
} from "./PlaylistSection.styled";
import { StyledButtonPrimary } from "../Global/Global.styles";

export default function PlaylistSection({
  _id,
  color,
  activeMode,
  setActiveMode,
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

      <PlaylistList
        personId={_id}
        color={color}
        onPlaylistDelete={onPlaylistDelete}
        onPlaylistUpdate={onPlaylistUpdate}
      />
    </section>
  );
}
