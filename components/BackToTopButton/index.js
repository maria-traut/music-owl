import { scrollToTop } from "../Global";
import { useEffect, useState } from "react";
import { StyledBackToTopButton } from "./BackToTopButton.styled";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <StyledBackToTopButton
      type="button"
      aria-label="Scroll back to top"
      onClick={scrollToTop}
    >
      TEST
    </StyledBackToTopButton>
  ) : null;
}
