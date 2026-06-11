import ScientificFindingList from "@/components/ScientificFindingList";
import Link from "next/link";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

export default function Science() {
  return (
    <StyledMain>
      <Link href="/">&#8592; Back to Homepage</Link>
      <ScientificFindingList />
    </StyledMain>
  );
}
