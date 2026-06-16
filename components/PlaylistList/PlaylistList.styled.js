import styled from "styled-components";

export const StyledPlaylistList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledPlaylist = styled.li`
  list-style: none;

  width: 100%;
  padding: 0 1rem 1rem 1.5rem;
  border: 2px solid ${({ $color }) => $color}88;
  border-radius: 15px;
`;

export const StyledPlaylistTitle = styled.h4`
  text-align: left;
`;

export const StyledSongList = styled.ol`
  padding-left: 1rem;
  margin: 0;
`;
