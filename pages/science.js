import { useState } from "react";
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
        scienceCategoryFilter={scienceCategoryFilter}
        onChange={(category) => setScienceCategoryFilter(category)}
      />
      <ScientificFindingList />
    </StyledMain>
  );
}
