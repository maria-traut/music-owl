import useSWR from "swr";
import ScientificFindingCard from "../ScientificFindingCard";
import { StyledList } from "./ScientificFindingList.styled";

export default function ScientificFindingList() {
  const {
    data: scientificFindings,
    isLoading,
    error,
  } = useSWR("/api/scientificFindings");

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
