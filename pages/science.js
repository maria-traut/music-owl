import { useState } from "react";
import useSWR from "swr";
import ScientificFindingList from "@/components/ScientificFindingList";
import ScienceFilter from "@/components/ScienceFilter";
import {
  StyledMain,
  StyledIntroSection,
  StyledH2,
  StyledDivider,
} from "../components/Global/Global.styles";

export default function Science() {
  const [scienceCategoryFilter, setScienceCategoryFilter] = useState("All");
  const { data: scientificFindings } = useSWR("/api/scientificFindings");

  const categories = scientificFindings
    ? [
        "All",
        ...new Set(
          scientificFindings.map(
            (scientificFinding) => scientificFinding.category
          )
        ),
      ]
    : ["All"];

  return (
    <StyledMain>
      <StyledIntroSection>
        <StyledH2>Scientific Findings</StyledH2>
        <p>
          The science behind Music Owl — why familiar songs can unlock memories
          when little else can.
        </p>
      </StyledIntroSection>
      <StyledDivider />
      <ScienceFilter
        categories={categories}
        scienceCategoryFilter={scienceCategoryFilter}
        onFilterChange={(category) => setScienceCategoryFilter(category)}
      />
      <ScientificFindingList scienceCategoryFilter={scienceCategoryFilter} />
    </StyledMain>
  );
}
