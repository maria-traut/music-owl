import { useEffect, useRef } from "react";
import KebabMenuIcon from "../KebabMenuIcon";
import { StyledMenuButton, StyledMenu } from "../Global/Global.styles";

export default function KebabMenu({ isOpen, onOpen, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={ref}>
      <StyledMenuButton
        type="button"
        aria-label="Further options"
        onClick={onOpen}
      >
        <KebabMenuIcon />
      </StyledMenuButton>
      {isOpen && <StyledMenu>{children}</StyledMenu>}
    </div>
  );
}
