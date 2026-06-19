import { scrollToTop } from "../Global";
import { useEffect, useState } from "react";
import { StyledBackToTopButton } from "./BackToTopButton.styled";
import Image from "next/image";

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
      <Image src="/arrow-up.svg" alt="" width={24} height={24} />
    </StyledBackToTopButton>
  ) : null;
}
