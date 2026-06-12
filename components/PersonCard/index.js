import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
} from "./PersonCard.styled";

export default function PersonCard({ person }) {
  const { name, birth_year, photo_url } = person;
  return (
    <StyledFigure>
      <StyledImageWrapper>
        <StyledImage
          src={photo_url ?? "/placeholder.jpg"}
          alt={`Picture showing ${name}`}
          fill
        />
      </StyledImageWrapper>
      <StyledFigcaption>
        {name}, {birth_year}
      </StyledFigcaption>
    </StyledFigure>
  );
}
