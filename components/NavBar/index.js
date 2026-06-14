import { useRouter } from "next/router";
import { StyledNavDivider } from "./NavBar.styled";
import { StyledNav, StyledNavLink } from "./NavBar.styled";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <StyledNav>
        <StyledNavLink href="/" $isActive={router.pathname === "/"}>
          Home
        </StyledNavLink>
        <StyledNavLink href="/people" $isActive={router.pathname === "/people"}>
          People
        </StyledNavLink>
        <StyledNavLink
          href="/science"
          $isActive={router.pathname === "/science"}
        >
          Science
        </StyledNavLink>
      </StyledNav>
      <StyledNavDivider />
    </>
  );
}
