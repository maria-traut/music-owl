import styled from "styled-components";
import Link from "next/link";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 480px;
  margin: 1rem auto 2.3rem;
`;

export const StyledMain = styled.main`
  padding: 2px 25px 25px 25px;
`;

export const StyledDivider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 1.7rem 0;
`;

export const StyledH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const StyledH4 = styled.h4`
  margin: 1.5rem 0 0 0;
  font-weight: 500;
`;

export const StyledMessage = styled.p`
  display: block;
  text-align: center;
  margin: 2rem auto 0;
  padding: 2rem 1rem;
  max-width: 400px;
`;

export const StyledConfirmMessage = styled.p`
  display: block;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

export const StyledErrorMessage = styled.p`
  color: salmon;
  display: inline-block;
  margin-top: 2rem;
`;

export const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text-secondary);
  text-decoration: none;
  display: inline-block;
  padding: 1rem 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

// form

export const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border: 1px solid #1b3a5c;
  background-color: transparent;
  margin-top: 1rem;
  padding: 1rem 0.7rem 0.7rem 0.7rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 11px;
  color: var(--color-text-secondary);
  margin-bottom: 2px;
  margin-left: 4px;
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 10px 14px;
  min-height: 40px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  -webkit-appearance: none;
  appearance: none;

  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: #aaa;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: var(--color-text-primary);
    box-shadow: 0 0 0 3px rgba(27, 58, 92, 0.15);
  }

  &:hover {
    border-color: #bbb;
  }

  &:user-invalid {
    border: 2px solid #fa8072;
  }
`;

export const StyledFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 0.4rem;
`;

export const StyledFormButtonWrapperLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  gap: 0.4rem;
`;

// buttons

export const StyledMessageAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`;

export const StyledActionButton = styled.button`
  background-color: transparent;
  height: 1.2rem;
  width: 2rem;
  padding: 13px;
  border-radius: var(--radius-element);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
`;

export const StyledUpdateButton = styled(StyledActionButton)`
  transform: scaleX(-1);

  &:hover {
    background-color: #b4d4f7;
  }

  &:active {
    background-color: #b4d4f7;
  }
`;

export const StyledDeleteButton = styled(StyledActionButton)`
  &:hover {
    background-color: #e7a5a5;
  }

  &:active {
    background-color: #e7a5a5;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;

  padding: 10px 12px;
  border-radius: var(--radius-element);

  text-align: left;
  font-size: 0.95rem;

  cursor: pointer;

  width: 100%;

  transition: background 120ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledButtonPrimary = styled(StyledButton)`
  color: white;
  background-color: var(--color-primary);
  width: auto;
  &:hover {
    background: #27507b;
  }
`;

export const StyledButtonSecondary = styled(StyledButton)`
  color: var(--color-text-primary);
  background-color: transparent;
  border: 1px solid #1b3a5c;
  width: auto;
`;

export const StyledButtonTertiary = styled(StyledButton)`
  color: white;
  background-color: var(--color-secondary);
  width: auto;
  &:hover {
    background: #5985c7;
  }
`;

export const StyledButtonDanger = styled(StyledButton)`
  color: white;
  background-color: var(--color-danger);
  &:hover {
    background: #8b3d3a;
  }
`;

//

export const StyledSection = styled.section`
  padding: 5px 25px;
  border-radius: 15px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const StyledPeopleSection = styled(StyledSection)`
  background-color: var(--color-primary);
  color: white;
`;

export const StyledScienceMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledScienceSection = styled(StyledSection)`
  background-color: #e8a838;
  color: white;
`;

export const StyledIntroSection = styled.section`
  all: unset;
  background: transparent;
  padding: 0;
  margin: 0;
`;

// menu

export const StyledMenuButton = styled.button`
  border: none;
  background: transparent;
  color: var(--color-text-primary);

  width: 36px;
  height: 36px;

  border-radius: var(--radius-element);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background 120ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const StyledMenuWrapper = styled.div`
  position: relative;
`;

export const StyledMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border: 0.5px solid #1b3a5c22;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 6px;
  z-index: 9999;
  animation: fadeIn 120ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledMenuItem = styled.button`
  background: transparent;
  color: var(--color-text-primary);
  border: none;
  padding: 10px 12px;
  border-radius: 8px;
  text-align: left;
  font-size: 0.95;
  cursor: pointer;
  width: 100%;
  transition: background 120ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

// songs

export const StyledSongForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.7rem;
`;

export const StyledHint = styled.span`
  font-size: 11px;
  color: var(--color-text-secondary);
  font-weight: 400;
`;

export const StyledUpdateForm = styled.div`
  margin: 0;
  padding: 0;
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

export const StyledSearchResultList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
`;

export const StyledConfirmDialog = styled.div`
  background-color: #fefdfb;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
`;
