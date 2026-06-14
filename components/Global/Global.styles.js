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

export const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

//people

export const StyledSection = styled.section`
  border: 1px solid black;
  margin-bottom: 20px;
`;

// science
export const StyledScienceMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
