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
        <p>
          The science behind Music Owl — why familiar songs can unlock memories
          when little else can.
        </p>
      </StyledIntroSection>
      <StyledDivider />
      <ScientificFindingList />
    </StyledMain>
  );
}
