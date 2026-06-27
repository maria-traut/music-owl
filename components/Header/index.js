import { StyledHeader, StyledH1, StyledOwlIcon } from "./Header.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Music Owl</StyledH1>
      <Link href="/">
        <StyledOwlIcon src="/owl_1.png" width={30} height={30} alt="owl icon" />
      </Link>
    </StyledHeader>
  );
}
