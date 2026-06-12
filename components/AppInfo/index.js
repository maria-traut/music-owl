import {
  StyledMain,
  StyledIntroSection,
  StyledLinkWrapper,
  StyledLinkPeople,
  StyledLinkScience,
  StyledH2,
  StyledH3,
  StyledDivider,
  StyledNavbar,
} from "./AppInfo.styled";

export default function AppInfo() {
  return (
    <StyledMain>
      <StyledNavbar>
        <span>Home</span>
        <span>People</span>
        <span>Science</span>
      </StyledNavbar>
      <StyledDivider />
      <StyledIntroSection>
        <StyledH2>What Is Music Owl?</StyledH2>
        <p>
          Music Owl helps you collect the music that matters — for the people
          who matter most.
        </p>
        <p>Here is what you can do:</p>
        <StyledLinkWrapper>
          <StyledLinkPeople>
            <p>
              Add the people you want to create music lists for. All you need is
              a name and their year of birth.
            </p>
          </StyledLinkPeople>
          <StyledLinkScience>
            <p>
              Explore a curated collection of scientific findings on music,
              memory, and dementia — backed by research from neurology and
              psychology.
            </p>
          </StyledLinkScience>
        </StyledLinkWrapper>
      </StyledIntroSection>
      <StyledDivider />
      <section>
        <StyledH3>A Growing Challenge</StyledH3>
        <p>
          Today, over 57 million people worldwide are living with dementia or
          Alzheimer&apos;s — and that number is growing every year. As life
          expectancy rises, more and more families find themselves caring for a
          loved one affected by memory loss. In Germany alone, nearly 1.9
          million people are living with the diagnosis.
        </p>
      </section>
      <StyledDivider />
      <section>
        <StyledH3>When Memory Fades, Music Remains</StyledH3>
        <p>
          Behind every number is a person — with a life, a story, and a
          soundtrack worth remembering. Research shows that music can reach
          parts of the brain that remain intact even in advanced dementia —
          triggering memories, emotions, and moments of reconnection that
          nothing else can.
        </p>
      </section>
    </StyledMain>
  );
}
