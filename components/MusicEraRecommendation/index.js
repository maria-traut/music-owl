import { StyledSummary, StyledMusicEra } from "./MusicEraRecommendation.styled";

export default function MusicEraRecommendation({ person }) {
  const { eraStart, eraEnd } = handleCalculateEra();

  function handleCalculateEra() {
    const eraStart = person.birth_year + 12;
    const eraEnd = person.birth_year + 25;
    return { eraStart, eraEnd };
  }

  const currentAge = new Date().getFullYear() - person.birth_year;

  let eraText;
  if (currentAge <= 11) {
    eraText = (
      <p>
        Born in {person.birth_year}, {person.name} is still very young.{" "}
        <StyledMusicEra>
          Music from the years {eraStart} to {eraEnd}
        </StyledMusicEra>{" "}
        will be the right era, when {person.name} is between 12 and 25 years
        old.
      </p>
    );
  } else if (currentAge > 11 && currentAge <= 25) {
    eraText = (
      <p>
        Born in {person.birth_year}, look for{" "}
        <StyledMusicEra>
          music from {eraStart} to {eraEnd},
        </StyledMusicEra>{" "}
        when {person.name} is between 12 and 25 years old.
      </p>
    );
  } else {
    eraText = (
      <p>
        Born in {person.birth_year}, look for{" "}
        <StyledMusicEra>
          music from {eraStart} to {eraEnd},
        </StyledMusicEra>{" "}
        when {person.name} was between 12 and 25 years old.
      </p>
    );
  }

  return (
    <details>
      <StyledSummary>Find the Right Era</StyledSummary>
      {eraText}
      <p>
        Music from this time has a special significance, as it triggers stronger
        emotional responses than music from other phases of life.
      </p>
    </details>
  );
}
