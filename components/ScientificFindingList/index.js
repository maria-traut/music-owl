import useSWR from "swr";
import ScientificFindingCard from "../ScientificFindingCard";
import { StyledList } from "./ScientificFindingList.styled";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

export default function ScientificFindingList() {
  const {
    data: scientificFindings,
    isLoading,
    error,
  } = useSWR("/api/scientificFindings", fetcher);

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>An error occurred.</p>;

  if (!scientificFindings)
    return <p>Scientific findings could not be loaded.</p>;

  return (
    <StyledList>
      {scientificFindings.map((scientificFinding) => (
        <ScientificFindingCard
          key={scientificFinding._id}
          scientificFinding={scientificFinding}
        />
      ))}
    </StyledList>
  );
}
