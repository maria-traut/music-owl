import {
  StyledCard,
  StyledCategory,
  StyledCardTitle,
  StyledTagWrapper,
  StyledTag,
  StyledReference,
} from "./ScientificFindingCard.styled";

const CATEGORY_COLORS = {
  Neurology: "#fde5bb",
  Psychology: "#fbd5d5",
  "Clinical Research": "#d5e8fb",
};

export default function ScientificFindingCard({ scientificFinding }) {
  const {
    title_en,
    category,
    finding_en,
    authors,
    year,
    study_title,
    publisher,
    tags,
  } = scientificFinding;

  return (
    <StyledCard $color={CATEGORY_COLORS[category] ?? "#fde5bb"}>
      <StyledCategory>{category}</StyledCategory>
      <StyledCardTitle>{title_en}</StyledCardTitle>
      <p>{finding_en}</p>
      <StyledReference>
        {authors.join(", ")} ({year}). {study_title}. {publisher}.
      </StyledReference>
      <StyledTagWrapper>
        {tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTagWrapper>
    </StyledCard>
  );
}
