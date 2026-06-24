export default function MusicEraRecommendation({ person }) {
  const { eraStart, eraEnd } = handleCalculateEra();

  function handleCalculateEra() {
    const eraStart = person.birth_year + 12;
    const eraEnd = person.birth_year + 25;
    return { eraStart, eraEnd };
  }

  return (
    <details>
      <summary>Music Picking Hints</summary>
      <p>
        Born in {person.birth_year}, look for music from {eraStart} to {eraEnd},
        when {person.name} was between 12 and 25 years old. Music from this time
        has a special significance, as it triggers stronger emotional responses
        than music from other phases of life.
      </p>
    </details>
  );
}
