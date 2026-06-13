import { useState } from "react";
import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
} from "./PersonDetail.styled";
import PersonForm from "../PersonForm";

export default function PersonDetail({ person }) {
  const { name, birth_year, photo_url } = person;
  const [updateMode, setUpdateMode] = useState(false);

  async function handlePersonUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personData = Object.fromEntries(formData);

    const response = await fetch(`/api/people/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });

    if (response.ok) {
      mutate();
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
        <button
          type="button"
          aria-label="Edit person"
          onClick={() => setUpdateMode(true)}
        >
          ✏️
        </button>
      )}
      {updateMode && (
        <>
          <PersonForm
            onPersonUpdate={handlePersonUpdate}
            defaultValues={{ name, birth_year }}
          />
          <button
            type="button"
            aria-label="Cancel edit person and close edit form"
            onClick={() => setUpdateMode(false)}
          >
            Cancel
          </button>
        </>
      )}
    </>
  );
}
