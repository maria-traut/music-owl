import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
} from "./PersonCard.styled";
import Link from "next/link";

export default function PersonCard({ person }) {
  const { name, birth_year, photo_url, _id } = person;
  return (
    <Link href={`/people/${_id}`}>
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
    </Link>
  );
}
