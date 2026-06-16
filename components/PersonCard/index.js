import {
  StyledLink,
  StyledCard,
  StyledColoredArea,
  StyledYear,
  StyledName,
} from "./PersonCard.styled";

export default function PersonCard({ person }) {
  const { name, birth_year, _id, color } = person;
  return (
    <StyledLink href={`/people/${_id}`}>
      <StyledCard>
        <StyledColoredArea $color={color}>
          <StyledYear>{birth_year}</StyledYear>
        </StyledColoredArea>
        <StyledName>{name}</StyledName>
      </StyledCard>
    </StyledLink>
  );
}
