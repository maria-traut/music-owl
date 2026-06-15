import { useState, useEffect } from "react";
import useSWR from "swr";
import PersonForm from "@/components/PersonForm";
import PersonList from "@/components/PersonList";
import {
  StyledMain,
  StyledH2,
  StyledPeopleSection,
  StyledMessage,
  StyledDivider,
} from "@/components/Global/Global.styles";

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
      <StyledPeopleSection>
        <StyledH2>My People</StyledH2>
        <p>
          Every music playlist starts with a person. Add them here: a name, a
          year of birth and their favourite colour.
        </p>
      </StyledPeopleSection>
      <StyledDivider />
      <PersonForm
        onSubmit={handlePersonCreate}
        onPersonFormClear={handlePersonFormClear}
      />
      {success && <StyledMessage>Person successfully added!</StyledMessage>}
      {error && (
        <StyledMessage>Something went wrong. Please try again.</StyledMessage>
      )}
      <PersonList />
    </StyledMain>
  );
}
