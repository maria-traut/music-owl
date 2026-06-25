import useSWR from "swr";
import ScientificFindingCard from "../ScientificFindingCard";
import { StyledList } from "./ScientificFindingList.styled";

export default function ScientificFindingList({ scienceCategoryFilter }) {
  const {
    data: scientificFindings,
    isLoading,
    error,
  } = useSWR("/api/scientificFindings");

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>An error occurred.</p>;

  if (!scientificFindings)
    return <p>Scientific findings could not be loaded.</p>;

  const filteredFindings =
    scienceCategoryFilter === "All"
      ? scientificFindings
      : scientificFindings.filter((scientificFinding) => {
          return scientificFinding.category === scienceCategoryFilter;
        });

  return (
    <StyledList>
      {filteredFindings.map((filteredFinding) => (
        <ScientificFindingCard
          key={filteredFinding._id}
          scientificFinding={filteredFinding}
        />
      ))}
    </StyledList>
  );
}
