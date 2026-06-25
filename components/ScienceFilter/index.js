import {
  StyledFilterButtonWrapper,
  StyledFilterButton,
} from "./ScienceFilter.styled";

export default function ScienceFilter({
  onFilterChange,
  scienceCategoryFilter,
}) {
  return (
    <StyledFilterButtonWrapper>
      <StyledFilterButton
        type="button"
        aria-label="filter category all"
        onClick={() => onFilterChange("All")}
        $isActive={scienceCategoryFilter === "All"}
      >
        All
      </StyledFilterButton>
      <StyledFilterButton
        type="button"
        aria-label="filter category neurology"
        onClick={() => onFilterChange("Neurology")}
        $isActive={scienceCategoryFilter === "Neurology"}
      >
        Neurology
      </StyledFilterButton>
      <StyledFilterButton
        type="button"
        aria-label="filter category psychology"
        onClick={() => onFilterChange("Psychology")}
        $isActive={scienceCategoryFilter === "Psychology"}
      >
        Psychology
      </StyledFilterButton>
      <StyledFilterButton
        type="button"
        aria-label="filter category clinical research"
        onClick={() => onFilterChange("Clinical Research")}
        $isActive={scienceCategoryFilter === "Clinical Research"}
      >
        Clinical Research
      </StyledFilterButton>
    </StyledFilterButtonWrapper>
  );
}
