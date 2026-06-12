import ScientificFindingList from "@/components/ScientificFindingList";
import Link from "next/link";
import { StyledScienceMain } from "../components/Global/Global.styles";

export default function Science() {
  return (
    <StyledScienceMain>
      <Link href="/">&#8592; Back to Homepage</Link>
      <ScientificFindingList />
    </StyledScienceMain>
  );
}
