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
  StyledButtonWrapper,
  StyledButtonSecondary,
} from "@/components/Global/Global.styles";

export default function People() {
  const { mutate } = useSWR("/api/people");
  const [personFormMode, setPersonFormMode] = useState(null);
  const [personCreateSuccess, setPersonCreateSuccess] = useState(false);
  const [personCreateError, setPersonCreateError] = useState(false);

  useEffect(() => {
    if (!personCreateSuccess) return;
    const successMessageTimer = setTimeout(() => {
      setPersonCreateSuccess(false);
    }, 3000);
    return () => {
      clearTimeout(successMessageTimer);
    };
  }, [personCreateSuccess]);

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
        setPersonFormMode(false);
        setPersonCreateSuccess(true);
        setPersonCreateError(false);
      } else {
        setPersonCreateError(true);
        setPersonCreateSuccess(false);
      }
    } catch {
      setPersonCreateError(true);
      setPersonCreateSuccess(false);
    }
  }

  function handlePersonFormClear(event) {
    event.target.form.reset();
    setPersonCreateSuccess(false);
    setPersonCreateError(false);
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
      {personFormMode ? (
        <PersonForm
          onSubmit={handlePersonCreate}
          onPersonFormClear={handlePersonFormClear}
          setPersonFormMode={setPersonFormMode}
        />
      ) : (
        <StyledButtonWrapper>
          <StyledButtonSecondary
            type="button"
            aria-label="Open Person Form"
            onClick={() => setPersonFormMode(true)}
          >
            + Add a Person
          </StyledButtonSecondary>
        </StyledButtonWrapper>
      )}
      {personCreateSuccess && (
        <StyledMessage>Person successfully added!</StyledMessage>
      )}
      {personCreateError && (
        <StyledMessage>Something went wrong. Please try again.</StyledMessage>
      )}
      <PersonList />
    </StyledMain>
  );
}
