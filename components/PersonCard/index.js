import {
  StyledLink,
  StyledColoredArea,
  StyledYear,
  StyledName,
  StyledNameYearWrapper,
} from "./PersonCard.styled";

export default function PersonCard({ person }) {
  const { name, birth_year, _id, color } = person;
  return (
    <StyledLink href={`/people/${_id}`}>
      <StyledColoredArea $color={color} />
      <StyledNameYearWrapper>
        <StyledName>{name}</StyledName>
        <StyledYear>* {birth_year}</StyledYear>
      </StyledNameYearWrapper>
    </StyledLink>
  );
}
