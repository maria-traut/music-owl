import useSWR from "swr";
import PersonCard from "../PersonCard";
import { StyledPersonList } from "./PersonList.styled";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

export default function PersonList() {
  const { data: people, isLoading, error } = useSWR("/api/people", fetcher);

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
