import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function HomePage() {
  return (
    <StyledNav>
      <Link href="/people">People &#8594;</Link>
      <Link href="/science">Science &#8594;</Link>
    </StyledNav>
  );
}
