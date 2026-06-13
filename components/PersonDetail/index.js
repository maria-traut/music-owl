import { useRouter } from "next/router";
import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
} from "./PersonDetail.styled";
import { useSWRConfig } from "swr";

export default function PersonDetail({ person }) {
  const router = useRouter;
  const { mutate } = useSWRConfig();
  const { name, birth_year, photo_url, _id } = person;

  async function handlePersonDelete() {
    const response = await fetch(`/api/people/${_id}`, { method: "DELETE" });
    if (response.ok) {
      mutate("/api/people");
      router.push("/people");
    }
  }
  return (
    <>
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
      <button
        type="button"
        aria-label="Remove person"
        onClick={handlePersonDelete}
      >
        ❌
      </button>
    </>
  );
}
