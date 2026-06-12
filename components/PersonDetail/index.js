export default function PersonDetail() {
  const { name, birth_year, photo_url } = person;
  return (
    <>
      <Link href="/people">&#8592; Back to List</Link>
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
    </>
  );
}
