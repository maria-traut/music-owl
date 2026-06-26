import {
  StyledFilterButtonWrapper,
  StyledFilterButton,
} from "./ScienceFilter.styled";

const categories = ["All", "Neurology", "Psychology", "Clinical Research"];

export default function ScienceFilter({
  onFilterChange,
  scienceCategoryFilter,
}) {
  return (
    <StyledFilterButtonWrapper>
      {categories.map((category) => (
        <StyledFilterButton
          key={category}
          type="button"
          aria-label={`filter category ${category.toLowerCase()}`}
          aria-pressed={scienceCategoryFilter === category}
          onClick={() => onFilterChange(category)}
          $isActive={scienceCategoryFilter === category}
        >
          {category}
        </StyledFilterButton>
      ))}
    </StyledFilterButtonWrapper>
  );
}
