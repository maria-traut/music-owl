import { useState, useEffect } from "react";
import useSWR from "swr";
import PersonForm from "@/components/PersonForm";
import PersonList from "@/components/PersonList";
import {
  StyledMain,
  StyledIntroSection,
  StyledMessage,
  StyledDivider,
  StyledButtonWrapper,
  StyledButtonPrimary,
  StyledH2,
} from "@/components/Global/Global.styles";
import toast from "react-hot-toast";

export default function People() {
  const { mutate } = useSWR("/api/people");
  const [personFormMode, setPersonFormMode] = useState(false);

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
        toast.success("Person successfully added.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <StyledMain>
      <StyledIntroSection>
        <StyledH2>My People</StyledH2>
        <p>
          Every music playlist starts with a person. Add them here: a name, a
          year of birth and their favourite colour.
        </p>
      </StyledIntroSection>
      <StyledDivider />
      {personFormMode ? (
        <PersonForm
          onSubmit={handlePersonCreate}
          setPersonFormMode={setPersonFormMode}
        />
      ) : (
        <StyledButtonWrapper>
          <StyledButtonPrimary
            type="button"
            aria-label="Open Person Form"
            onClick={() => setPersonFormMode(true)}
          >
            + New Person
          </StyledButtonPrimary>
        </StyledButtonWrapper>
      )}

      <PersonList />
    </StyledMain>
  );
}
