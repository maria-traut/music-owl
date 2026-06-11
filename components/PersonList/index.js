import useSWR from "swr";
import PersonCard from "../PersonCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PersonList() {
  const { data: people, isLoading, error } = useSWR("/api/people", fetcher);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occured.</p>;
  if (!people) return <p>People could not be loaded.</p>;

  return (
    <ul>
      {people.map((person) => (
        <PersonCard key={person._id} person={person} />
      ))}
    </ul>
  );
}
