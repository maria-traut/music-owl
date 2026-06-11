import PersonList from "@/components/PersonList";
import styled from "styled-components";
import Link from "next/link";

export default function People() {
  return (
    <StyledMain>
      <Link href="/">&#8592; Back to Homepage</Link>
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
