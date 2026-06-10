import {
  StyledCard,
  StyledCategory,
  StyledCardTitle,
  StyledTagWrapper,
  StyledTag,
  StyledReference,
} from "./ScientificFindingCard.styled";

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
    <StyledCard>
      <StyledCategory>{category}</StyledCategory>
      <StyledCardTitle>{title_en}</StyledCardTitle>
      <article>{finding_en}</article>
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
