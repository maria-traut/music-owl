import styled from "styled-components";

<<<<<<< HEAD
=======
export const StyledSongErrorMessage = styled.p`
  color: var(--color-danger-text);
  font-weight: 700;
`;

>>>>>>> main
export const StyledUpdateForm = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledSongForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.7rem;
`;

export const StyledSongBlock = styled(StyledSongForm)`
  background-color: white;
  border-radius: var(--radius-element);
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

export const StyledSongRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0 10px 10px;
`;

export const StyledSongNumber = styled.span`
  font-size: 1rem;
  min-width: 18px;
`;

export const StyledSongInfo = styled.div`
  flex: 1;
`;

export const StyledSongTitle = styled.p`
  margin: 0;
`;

export const StyledSongArtist = styled.p`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin: 0;
`;

export const StyledHint = styled.span`
  font-size: 11px;
  color: var(--color-text-secondary);
  font-weight: 400;
`;

export const StyledSearchResultList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
`;
