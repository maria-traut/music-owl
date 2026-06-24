import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import { StyledDivider } from "../Global/Global.styles";
import PlaylistSection from "../PlaylistSection";
import PersonHeader from "../PersonHeader";
import PersonEditForm from "../PersonEditForm";
import PersonDeleteDialog from "../PersonDeleteDialog";
import MusicEraRecommendation from "../MusicEraRecommendation";

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
      <PersonHeader
        name={name}
        color={color}
        birth_year={birth_year}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setActiveMode={setActiveMode}
        onPersonDelete={handlePersonDelete}
      />
      <MusicEraRecommendation person={person} />
      <PersonDeleteDialog
        name={name}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onPersonDelete={handlePersonDelete}
        personDeleteSuccess={personDeleteSuccess}
        personDeleteError={personDeleteError}
        setPersonDeleteError={setPersonDeleteError}
      />
      <PersonEditForm
        name={name}
        birth_year={birth_year}
        color={color}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        handlePersonUpdate={handlePersonUpdate}
        personUpdateError={personUpdateError}
      />
      <StyledDivider />
      <PlaylistSection
        _id={_id}
        color={color}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        playlistCreateSuccess={playlistCreateSuccess}
        playlistUpdateSuccess={playlistUpdateSuccess}
        playlistDeleteSuccess={playlistDeleteSuccess}
        playlistUpdateError={playlistUpdateError}
        playlistError={playlistError}
        handlePlaylistCreate={handlePlaylistCreate}
        handlePlaylistUpdate={handlePlaylistUpdate}
        handlePlaylistDelete={handlePlaylistDelete}
      />
    </>
  );
}
