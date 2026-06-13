import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
  StyledButtonWrapper,
  StyledMessageAndButtonWrapper,
} from "./PersonDetail.styled";

export default function PersonDetail({ person }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { name, birth_year, photo_url, _id } = person;
  const [confirmDeleteMode, setConfirmDeleteMode] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!success) return;
    const successMessageTimer = setTimeout(() => {
      setSuccess(false);
      router.push("/people");
    }, 2000);
    return () => {
      clearTimeout(successMessageTimer);
    };
  }, [success]);

  async function handlePersonDelete() {
    const response = await fetch(`/api/people/${_id}`, { method: "DELETE" });
    if (response.ok) {
      setSuccess(true);
      mutate("/api/people");
    }
    if (!response.ok) {
      setError(true);
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
      {!confirmDeleteMode && (
        <StyledButtonWrapper>
          <button
            type="button"
            aria-label="Delete person"
            onClick={() => setConfirmDeleteMode(true)}
          >
            ✗
          </button>
        </StyledButtonWrapper>
      )}

      {confirmDeleteMode && (
        <>
          {success ? (
            <span>{name} was successfully deleted.</span>
          ) : (
            <StyledMessageAndButtonWrapper>
              <span>{`Do you really want to delete ${name}?`}</span>
              <StyledButtonWrapper>
                <button
                  type="button"
                  aria-label="Cancel deletion"
                  onClick={() => setConfirmDeleteMode(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  aria-label="Confirm deletion"
                  onClick={handlePersonDelete}
                >
                  Yes
                </button>
              </StyledButtonWrapper>
              {error && <span>An error occurred. Please try again.</span>}
            </StyledMessageAndButtonWrapper>
          )}
        </>
      )}
    </>
  );
}
