import styled from "styled-components";

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

export const StyledSection = styled.section`
  padding: 5px 25px;
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
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

//people

export const StyledPeopleSection = styled(StyledSection)`
  background-color: #1b3a5c;
  color: white;
`;

export const StyledMessage = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
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
`;

export const StyledButtonPrimary = styled(StyledButton)`
  color: white;
  background-color: #1b3a5c;
  border: none;
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
