import Image from "next/image";
import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
} from "./PersonCard.styled";

export default function PersonCard({ person }) {
  const { name, birth_year, photo_url } = person;
  return (
    <StyledFigure>
      <StyledImageWrapper>
        <Image
          src={photo_url ? photo_url : "/placeholder.jpg"}
          alt={`Picture showing ${name}`}
          width={100}
          height={100}
          style={{ width: "100px", height: "auto" }}
          priority
        />
      </StyledImageWrapper>
      <StyledFigcaption>
        <p>
          {name}, {birth_year}
        </p>
      </StyledFigcaption>
    </StyledFigure>
  );
}
