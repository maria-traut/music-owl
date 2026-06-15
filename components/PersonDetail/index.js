import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import useSWR from "swr";

import {
  StyledFigure,
  StyledImageWrapper,
  StyledFigcaption,
  StyledImage,
  StyledButtonWrapper,
  StyledMessageAndButtonWrapper,
  StyledUpdateButton,
  StyledDeleteButton,
} from "./PersonDetail.styled";
import PersonForm from "../PersonForm";
import {
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledMessage,
} from "../Global/Global.styles";

export default function PersonDetail({ person }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { name, birth_year, photo_url, _id } = person;
  const [activeMode, setActiveMode] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [deleteError, setDeleteError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    data: playlists,
    isLoading,
    error,
  } = useSWR(`/api/playlists?personId=${_id}`);

  console.log("PersonID:", _id);
  console.log("URL:", `/api/playlists?personId=${_id}`);
  console.log("Playlists data:", playlists);
  console.log("Error:", error);

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

  if (isLoading) return <p>Loading playlists...</p>;
  if (error) return <p>Error loading playlists.</p>;
  if (!playlists || playlists.length === 0) return <p>No playlists yet.</p>;

  async function handlePersonDelete() {
    const response = await fetch(`/api/people/${_id}`, { method: "DELETE" });
    if (response.ok) {
      setSuccess(true);
      mutate("/api/people");
    } else {
      setDeleteError(true);
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
      setActiveMode(null);
      setUpdateError(null);
    } else {
      setUpdateError("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div>
        {playlists.map((playlist) => (
          <div key={playlist._id}>
            <h3>{playlist.playlist_title}</h3>
            {playlist.songs.map((song, index) => (
              <p key={index}>
                {index + 1}. {song.title} — {song.artist}
              </p>
            ))}
          </div>
        ))}
      </div>
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

      {!activeMode && (
        <StyledButtonWrapper>
          <StyledDeleteButton
            type="button"
            aria-label="Delete person"
            onClick={() => setActiveMode("delete")}
          >
            ✗
          </StyledDeleteButton>
          <StyledUpdateButton
            type="button"
            aria-label="Edit person"
            onClick={() => setActiveMode("edit")}
          >
            &#9998;
          </StyledUpdateButton>
        </StyledButtonWrapper>
      )}

      {activeMode === "delete" && (
        <>
          {success ? (
            <StyledMessage>{name} was successfully deleted.</StyledMessage>
          ) : (
            <StyledMessageAndButtonWrapper>
              <StyledMessage>{`Do you really want to delete ${name}?`}</StyledMessage>
              <StyledButtonWrapper>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel deletion"
                  onClick={() => {
                    setActiveMode(null);
                    setDeleteError(false);
                  }}
                >
                  No
                </StyledButtonSecondary>
                <StyledButtonPrimary
                  type="button"
                  aria-label="Confirm deletion"
                  onClick={handlePersonDelete}
                >
                  Yes
                </StyledButtonPrimary>
              </StyledButtonWrapper>
              {deleteError && <span>An error occurred. Please try again.</span>}
            </StyledMessageAndButtonWrapper>
          )}
        </>
      )}

      {activeMode === "edit" && (
        <PersonForm
          onSubmit={handlePersonUpdate}
          defaultValues={{ name, birth_year }}
          updateMode={true}
          setUpdateMode={() => setActiveMode(null)}
        />
      )}
      {updateError && <p role="alert">{updateError}</p>}
    </>
  );
}
