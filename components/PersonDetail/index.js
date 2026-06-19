import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";

import {
  StyledDetailCard,
  StyledDetailColoredArea,
  StyledDetailYear,
  StyledDetailName,
  StyledPlaylistSectionTitle,
  StyledMenuButton,
  StyledMenuWrapper,
  StyledMenu,
  StyledMenuItem,
} from "./PersonDetail.styled";
import PersonForm from "../PersonForm";
import {
  StyledMessageAndButtonWrapper,
  StyledButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledMessage,
} from "../Global/Global.styles";
import PlaylistList from "../PlaylistList";
import PlaylistForm from "../PlaylistForm";
import Image from "next/image";

export default function PersonDetail({ person }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { name, birth_year, _id, color } = person;
  const [activeMode, setActiveMode] = useState(null);

  const [personDeleteSuccess, setPersonDeleteSuccess] = useState(false);
  const [personUpdateError, setPersonUpdateError] = useState(null);
  const [personDeleteError, setPersonDeleteError] = useState(false);

  const [playlistCreateSuccess, setPlaylistCreateSuccess] = useState(false);
  const [playlistUpdateSuccess, setPlaylistUpdateSuccess] = useState(false);
  const [playlistError, setPlaylistError] = useState(null);
  const [playlistUpdateError, setPlaylistUpdateError] = useState(null);
  const [playlistDeleteSuccess, setPlaylistDeleteSuccess] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!personDeleteSuccess) return;
    const successMessageTimer = setTimeout(() => {
      setPersonDeleteSuccess(false);
      router.push("/people");
    }, 2000);
    return () => {
      clearTimeout(successMessageTimer);
    };
  }, [personDeleteSuccess]);

  async function handlePersonDelete() {
    const response = await fetch(`/api/people/${_id}`, { method: "DELETE" });
    if (response.ok) {
      setPersonDeleteSuccess(true);
      mutate("/api/people");
    } else {
      setPersonDeleteError(true);
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
      setPersonUpdateError(null);
    } else {
      setPersonUpdateError("Something went wrong. Please try again.");
    }
  }

  async function handlePlaylistCreate({ playlistTitle, songs }) {
    try {
      const response = await fetch("/api/playlists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playlist_title: playlistTitle,
          person_id: _id,
          songs,
        }),
      });

      if (response.ok) {
        mutate(`/api/playlists?personId=${_id}`);
        setPlaylistCreateSuccess(true);
        setTimeout(() => setPlaylistCreateSuccess(false), 2000);
        setActiveMode(null);
        return true;
      } else {
        setPlaylistError("Something went wrong. Please try again.");
        return false;
      }
    } catch {
      setPlaylistError("Something went wrong. Please try again.");
      return false;
    }
  }

  async function handlePlaylistDelete(playlistId) {
    const response = await fetch(`/api/playlists/${playlistId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/playlists?personId=${_id}`);
      setPlaylistDeleteSuccess(true);
      setTimeout(() => setPlaylistDeleteSuccess(false), 3000);
    } else {
      setPlaylistError("Something went wrong. Please try again.");
    }
  }

  async function handlePlaylistUpdate(playlistId, { playlistTitle, songs }) {
    const response = await fetch(`/api/playlists/${playlistId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playlist_title: playlistTitle, songs }),
    });
    if (response.ok) {
      mutate(`/api/playlists?personId=${_id}`);
      setPlaylistUpdateSuccess(true);
      setTimeout(() => setPlaylistUpdateSuccess(false), 3000);
      setPlaylistUpdateError(null);
      return true;
    } else {
      setPlaylistUpdateError("Something went wrong. Please try again.");
      return false;
    }
  }

  return (
    <>
      <StyledDetailCard>
        <StyledDetailColoredArea $color={color}>
          <StyledMenuWrapper>
            <StyledMenuButton
              type="button"
              aria-label="Further options"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <Image src="/kebab-menu.svg" alt="" width={24} height={24} />
            </StyledMenuButton>
            {showMenu && (
              <StyledMenu>
                <StyledMenuItem
                  type="button"
                  aria-label="Edit person"
                  onClick={() => {
                    setActiveMode("edit");
                    setShowMenu(false);
                  }}
                >
                  Edit person
                </StyledMenuItem>
                <StyledMenuItem
                  type="button"
                  aria-label="Delete person"
                  onClick={() => {
                    setActiveMode("delete");
                    setShowMenu(false);
                  }}
                >
                  Remove person
                </StyledMenuItem>
              </StyledMenu>
            )}
          </StyledMenuWrapper>
          <StyledDetailYear>{birth_year}</StyledDetailYear>
        </StyledDetailColoredArea>
        <StyledDetailName>{name}</StyledDetailName>
      </StyledDetailCard>

      {activeMode === "delete" && (
        <>
          {personDeleteSuccess ? (
            <StyledMessage>{name} was successfully deleted.</StyledMessage>
          ) : (
            <StyledMessageAndButtonWrapper>
              <StyledMessage>{`Remove ${name} and go back to 'People'?`}</StyledMessage>
              <StyledButtonWrapper>
                <StyledButtonSecondary
                  type="button"
                  aria-label="Cancel deletion"
                  onClick={() => {
                    setActiveMode(null);
                    setPersonDeleteError(false);
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
              {personDeleteError && (
                <span>An error occurred. Please try again.</span>
              )}
            </StyledMessageAndButtonWrapper>
          )}
        </>
      )}
      {activeMode === "edit" && (
        <PersonForm
          onSubmit={handlePersonUpdate}
          defaultValues={{ name, birth_year, color }}
          updateMode={true}
          setUpdateMode={() => setActiveMode(null)}
        />
      )}
      {personUpdateError && <p role="alert">{personUpdateError}</p>}
      {playlistError && <p role="alert">{playlistError}</p>}
      <section>
        <StyledPlaylistSectionTitle>Playlists</StyledPlaylistSectionTitle>
        {activeMode === "playlist form" ? (
          <PlaylistForm
            onSubmit={(data) => handlePlaylistCreate(data)}
            onCancel={() => setActiveMode(null)}
          />
        ) : (
          <StyledButtonWrapper>
            <StyledButtonSecondary
              type="button"
              aria-label="Open Playlist Form"
              onClick={() => setActiveMode("playlist form")}
            >
              + Add a Playlist
            </StyledButtonSecondary>
          </StyledButtonWrapper>
        )}
        {playlistCreateSuccess && (
          <StyledMessage>Playlist was successfully created.</StyledMessage>
        )}
        {playlistUpdateSuccess && (
          <StyledMessage>Playlist was successfully updated.</StyledMessage>
        )}
        {playlistDeleteSuccess && (
          <StyledMessage>Playlist was successfully deleted.</StyledMessage>
        )}
        {playlistUpdateError && <p role="alert">{playlistUpdateError}</p>}
        <PlaylistList
          personId={_id}
          color={color}
          handlePlaylistDelete={handlePlaylistDelete}
          handlePlaylistUpdate={handlePlaylistUpdate}
        />
      </section>
    </>
  );
}
