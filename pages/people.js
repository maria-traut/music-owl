import { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import PersonForm from "@/components/PersonForm";
import PersonList from "@/components/PersonList";
import { StyledMain, StyledSection } from "../components/Global/Global.styles";

export default function People() {
  const { mutate } = useSWR("/api/people");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!success) return;
    const successMessageTimer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => {
      clearTimeout(successMessageTimer);
    };
  }, [success]);

  async function handlePersonCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personData = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personData),
      });
      if (response.ok) {
        mutate();
        event.target.reset();
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch {
      setError(true);
      setSuccess(false);
    }
  }

  function handlePersonFormClear(event) {
    event.target.form.reset();
    setSuccess(false);
    setError(false);
  }

  return (
    <StyledMain>
      <Link href="/">&#8592; Back to Homepage</Link>
      <StyledSection>
        <h2>My People</h2>
        <p>
          Every music list starts with a person. Add them here — a name, a year
          of birth, and optionally a photo.
        </p>
      </StyledSection>
      <PersonForm
        onPersonCreate={handlePersonCreate}
        onPersonFormClear={handlePersonFormClear}
      />
      {success && <p>Person successfully added!</p>}
      {error && <p>Something went wrong. Please try again.</p>}
      <PersonList />
    </StyledMain>
  );
}
