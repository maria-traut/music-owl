import ScientificFindingList from "@/components/ScientificFindingList";
import {
  StyledMain,
  StyledIntroSection,
  StyledH2,
  StyledDivider,
} from "../components/Global/Global.styles";

export default function Science() {
  return (
    <StyledMain>
      <StyledIntroSection>
        <StyledH2>Scientific Findings</StyledH2>
        <p>Find out more about how music effects our brain.</p>
      </StyledIntroSection>
      <StyledDivider />
      <ScientificFindingList />
    </StyledMain>
  );
}
