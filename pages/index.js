import AppInfo from "@/components/AppInfo";
import {
  StyledMain,
  StyledNav,
  StyledNavLink,
} from "@/components/Global/Global.styles";

export default function HomePage() {
  return (
    <StyledMain>
      <StyledNav>
        <StyledNavLink href="/">Home</StyledNavLink>
        <StyledNavLink href="/people">People</StyledNavLink>
        <StyledNavLink href="/science">Science</StyledNavLink>
      </StyledNav>
      <AppInfo />
    </StyledMain>
  );
}
