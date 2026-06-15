import {
  StyledLink,
  StyledCard,
  StyledColoredArea,
  StyledContent,
} from "./PersonCard.styled";

export default function PersonCard({ person }) {
  const { name, birth_year, _id, color } = person;
  return (
    <StyledLink href={`/people/${_id}`}>
      <StyledCard>
        <StyledColoredArea color={color} />
        <StyledContent>
          {name}, {birth_year}
        </StyledContent>
      </StyledCard>
    </StyledLink>
  );
}
