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
          width={200}
          height={200}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </StyledImageWrapper>
      <StyledFigcaption>
        {name}, {birth_year}
      </StyledFigcaption>
    </StyledFigure>
  );
}
