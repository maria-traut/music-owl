import ScientificFindingList from "@/components/ScientificFindingList";
import {
  StyledMain,
  StyledScienceSection,
  StyledH2,
  StyledDivider,
} from "../components/Global/Global.styles";
import BackToTopButton from "@/components/BackToTopButton";

export default function Science() {
  return (
    <StyledMain>
      <StyledScienceSection>
        <StyledH2>Scientific Findings</StyledH2>
        <p>Find out more about how music effects our brain.</p>
      </StyledScienceSection>
      <StyledDivider />
      <BackToTopButton />
      <ScientificFindingList />
    </StyledMain>
  );
}
