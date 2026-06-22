import {
  StyledLinkWrapper,
  StyledLinkPeople,
  StyledLinkScience,
  StyledLinkPlaylists,
  StyledH3,
} from "./AppInfo.styled";
import {
  StyledDivider,
  StyledIntroSection,
  StyledH2,
} from "../Global/Global.styles";

export default function AppInfo() {
  return (
    <>
      <StyledIntroSection>
        <StyledH2>What Is Music Owl?</StyledH2>
        <p>
          Music has the power to reach people even when words no longer can.
          Music Owl helps you build playlists for people living with memory loss
          — so the songs that shaped their life can bring them back, even just
          for a moment.
        </p>
        <p>Here is what you can do:</p>
        <StyledLinkWrapper>
          <StyledLinkPeople href="/people">
            <p>
              Add the people you want to create music lists for. All you need is
              a name, a year of birth, and a colour that feels like them.
            </p>
          </StyledLinkPeople>
          <StyledLinkPlaylists href="/people">
            <p>
              Create personalized playlists for each person — filled with the
              songs that once made them dance, laugh, or dream.
            </p>
          </StyledLinkPlaylists>
          <StyledLinkScience href="/science">
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
    </>
  );
}
