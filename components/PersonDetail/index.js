import { useState } from "react";
import { useSWRConfig } from "swr";
import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
  StyledUpdateButton,
  StyledButtonWrapper,
} from "./PersonDetail.styled";
import PersonForm from "../PersonForm";

export default function PersonDetail({ person }) {
  const { mutate } = useSWRConfig();
  const { name, birth_year, photo_url, _id } = person;
  const [updateMode, setUpdateMode] = useState(false);
  const [updateError, setUpdateError] = useState(null);

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
