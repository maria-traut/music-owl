import styled from "styled-components";

export const StyledPlaylistList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

export const StyledPlaylist = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem 1rem 1rem 1.5rem;
  border: 3px solid ${({ $color }) => $color}88;
  border-radius: var(--radius-card);
  position: relative;
`;

export const StyledPlaylistHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.7rem;
`;

export const StyledPlaylistTitle = styled.h4`
  text-align: left;
`;

export const StyledSongList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.7rem;
  padding: 0;
  margin: 0;
`;

export const StyledLinkNoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 2rem;
  gap: 0.5rem;
  padding-right: 0.5rem;
`;

export const StyledYoutubeLink = styled.a`
  text-decoration: none;
  color: inherit;
  background-color: lightgrey;
  border-radius: 50%;
  padding-left: 3px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const StyledPlaylistNote = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: var(--color-text-tertiary);
`;

export const StyledPlaylistSongTitle = styled.p`
  margin: 0;
`;

export const StyledPlaylistSongArtist = styled.p`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin: 0;
`;

export const StyledPlaylistSongNumber = styled.span`
  font-size: 1rem;
  min-width: 18px;
`;

export const StyledPlaylistSongWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const StyledPlaylistSongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
