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

export const StyledErrorMessage = styled.p`
  color: salmon;
  font-weight: 600;
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
  border: 1px solid #2e5f8a;
  margin-top: 1rem;
`;

export const StyledLabel = styled.label`
  margin-top: 0.5rem;
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;

  &:focus {
    outline: none;
    border: 2px solid #1b3a5c;
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
  margin: 0;
  height: 1.2rem;
  padding: 13px;
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledButtonPrimary = styled(StyledButton)`
  color: white;
  background-color: #1b3a5c;
  border: 1px solid #1b3a5c;
`;

export const StyledButtonSecondary = styled(StyledButton)`
  color: #1b3a5c;
  background-color: #fafaf8;
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
