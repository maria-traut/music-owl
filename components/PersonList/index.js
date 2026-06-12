import useSWR from "swr";
import PersonCard from "../PersonCard";
import { StyledPersonList } from "./PersonList.styled";

export default function PersonList() {
  const { data: people, isLoading, error } = useSWR("/api/people");

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!people) return <p>People could not be loaded.</p>;

  return (
    <StyledPersonList>
      {people.map((person) => (
        <li key={person._id}>
          <PersonCard person={person} />
        </li>
      ))}
    </StyledPersonList>
  );
}
