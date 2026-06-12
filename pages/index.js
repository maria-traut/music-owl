import Link from "next/link";
import { StyledNav } from "../components/Global/Global.styles";

export default function HomePage() {
  return (
    <StyledNav>
      <Link href="/people">People &#8594;</Link>
      <Link href="/science">Science &#8594;</Link>
    </StyledNav>
  );
}
