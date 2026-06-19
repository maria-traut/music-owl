import styled from "styled-components";
import Link from "next/link";

export const StyledApp = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

export const StyledMain = styled.main`
  padding: 2px 25px 25px 25px;
`;

export const StyledDivider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 10px 0;
`;

export const StyledSongDivider = styled(StyledDivider)`
  border: none;
  border-top: 1px solid #1b3a5c;
  margin: 1rem 0 0 0;
`;

export const StyledSection = styled.section`
  padding: 5px 25px;
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const StyledH2 = styled.h2`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const StyledMessage = styled.p`
  display: inline-block;
  margin-top: 0.5rem;
`;

export const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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

export const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border: none;
  background-color: #ededeb;
  margin-top: 1rem;
`;

export const StyledLabel = styled.label`
  margin-top: 0.5rem;
`;

export const StyledVisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 12px 14px;
  min-height: 48px;
  border-radius: 15px;
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
    border-color: #1b3a5c;
    box-shadow: 0 0 0 3px rgba(27, 58, 92, 0.15);
  }

  &:hover {
    border-color: #bbb;
  }

  &:user-invalid {
    border: 2px solid salmon;
  }
`;

export const StyledFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 0.4rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`;

export const StyledMessageAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledActionButton = styled.button`
  background-color: transparent;
  height: 1.2rem;
  width: 2rem;
  padding: 13px;
  border-radius: 15px;
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

//people

export const StyledPeopleSection = styled(StyledSection)`
  background-color: #1b3a5c;
  color: white;
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;

  padding: 10px 12px;
  border-radius: 8px;

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
  background-color: #1b3a5c;
  &:hover {
    background: #2459c9;
  }
`;

export const StyledButtonSecondary = styled(StyledButton)`
  color: #1b3a5c;
  background-color: transparent;
  border: 1px solid #1b3a5c;
`;

// science

export const StyledScienceMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledScienceSection = styled(StyledSection)`
  background-color: #e8a838;
  color: white;
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: #00000022;

  width: 36px;
  height: 36px;

  border-radius: 8px;

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
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const StyledMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 160px;
  background: #fafaf8;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
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
  border: none;
  padding: 10px 12px;
  border-radius: 8px;
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
