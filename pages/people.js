import useSWR from "swr";
import { useLocalStorageState } from "react";
import styled from "styled-components";
import Link from "next/link";
import PersonForm from "@/components/PersonForm";
import PersonList from "@/components/PersonList";

const StyledMain = styled.main`
  padding: 20px;
`;

const StyledSection = styled.section`
  border: 1px solid black;
  margin-bottom: 20px;
`;

export default function People() {
  const { mutate } = useSWR("/api/people");

  async function handlePersonCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personData = Object.fromEntries(formData);
    const response = await fetch("/api/people", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });
    if (response.ok) {
      mutate();
      event.target.reset();
    }
  }

  function handlePersonFormClear() {
    event.target.form.reset();
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
      <PersonList />
    </StyledMain>
  );
}
