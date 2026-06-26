import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import { StyledDivider } from "../Global/Global.styles";
import PlaylistSection from "../PlaylistSection";
import PersonHeader from "../PersonHeader";
import PersonEditForm from "../PersonEditForm";
import PersonDeleteDialog from "../PersonDeleteDialog";
import MusicEraRecommendation from "../MusicEraRecommendation";
import toast from "react-hot-toast";

export default function PersonDetail({ person }) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { name, birth_year, _id, color } = person;
  const [activeMode, setActiveMode] = useState(null);

  const [personDeleteSuccess, setPersonDeleteSuccess] = useState(false);

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
      mutate("/api/people");
      toast.success("Person successfully removed.");
    } else {
      toast.error("Something went wrong. Please try again.");
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

      toast.success("Person successfully updated.");
    } else {
      toast.error("Something went wrong. Please try again.");
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
      />
      <MusicEraRecommendation person={person} />
      <PersonDeleteDialog
        name={name}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onPersonDelete={handlePersonDelete}
        personDeleteSuccess={personDeleteSuccess}
      />
      <PersonEditForm
        name={name}
        birth_year={birth_year}
        color={color}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onPersonUpdate={handlePersonUpdate}
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
        onPlaylistCreate={handlePlaylistCreate}
        onPlaylistUpdate={handlePlaylistUpdate}
        onPlaylistDelete={handlePlaylistDelete}
      />
    </>
  );
}
