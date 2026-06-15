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
  StyledMessage,
  StyledUpdateButton,
  StyledButtonWrapper,
} from "./PersonDetail.styled";
import PersonForm from "../PersonForm";

export default function PersonDetail({ person }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { name, birth_year, photo_url, _id } = person;
  const [confirmDeleteMode, setConfirmDeleteMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [updateError, setUpdateError] = useState(null);
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

  async function handlePersonUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personData = Object.fromEntries(formData);

    const response = await fetch(`/api/people/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });

    if (response.ok) {
      mutate("/api/people");
      mutate(`/api/people/${_id}`);
      setUpdateMode(false);
      setUpdateError(null);
    } else {
      setUpdateError("Something went wrong. Please try again.");
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
            <StyledMessage>{name} was successfully deleted.</StyledMessage>
          ) : (
            <StyledMessageAndButtonWrapper>
              <StyledMessage>{`Do you really want to delete ${name}?`}</StyledMessage>
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
      {!updateMode && (
        <StyledButtonWrapper>
          <StyledUpdateButton
            type="button"
            aria-label="Edit person"
            onClick={() => setUpdateMode(true)}
          >
            &#9998;
          </StyledUpdateButton>
        </StyledButtonWrapper>
      )}
      {updateMode && (
        <PersonForm
          onSubmit={handlePersonUpdate}
          defaultValues={{ name, birth_year }}
          updateMode={true}
          setUpdateMode={setUpdateMode}
        />
      )}
      {updateError && <p role="alert">{updateError}</p>}
    </>
  );
}
