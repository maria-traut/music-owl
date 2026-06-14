import ScientificFindingList from "@/components/ScientificFindingList";
import { StyledMain, StyledSection } from "../components/Global/Global.styles";

export default function Science() {
  return (
    <StyledMain>
      <StyledSection>
        <h2>Scientific Findings</h2>
        <p>Find out more about how music effects our brain.</p>
      </StyledSection>
      <ScientificFindingList />
    </StyledMain>
  );
}
