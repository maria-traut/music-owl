import PersonList from "@/components/PersonList";
import styled from "styled-components";

export default function People() {
  return (
    <StyledMain>
      <StyledSection>
        <h2>My People</h2>
        <p>
          Every music list starts with a person. Add them here — a name, a year
          of birth, and optionally a photo.
        </p>
      </StyledSection>
      <PersonList />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 20px;
`;
const StyledSection = styled.section`
  border: 1px solid black;
  margin-bottom: 20px;
`;
