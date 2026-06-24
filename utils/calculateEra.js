export function calculateEra(birth_year) {
  const eraStart = birth_year + 12;
  const eraEnd = birth_year + 25;
  return { eraStart, eraEnd };
}
