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
  padding: 1rem 1rem 1rem 1.5rem;
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

export const StyledLinkNoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 2rem;
  gap: 0.7rem;
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

export const StyledNote = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: #8d99a5;
`;
