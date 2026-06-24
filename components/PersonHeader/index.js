import {
  StyledPersonHeaderMenuWrapper,
  StyledPersonHeader,
  StyledColorAvatar,
  StyledPersonName,
  StyledPersonYear,
} from "./PersonHeader.styled";

import KebabMenu from "../KebabMenu";
import { StyledMenuItem } from "../Global/Global.styles";

export default function PersonHeader({
  name,
  birth_year,
  color,
  showMenu,
  setShowMenu,
  setActiveMode,
}) {
  return (
    <>
      <StyledPersonHeader>
        <StyledColorAvatar $color={color} />
        <StyledPersonName>{name}</StyledPersonName>
        <StyledPersonYear>* {birth_year}</StyledPersonYear>
        <StyledPersonHeaderMenuWrapper>
          <KebabMenu
            isOpen={showMenu}
            onOpen={() => setShowMenu(true)}
            onClose={() => setShowMenu(false)}
          >
            <StyledMenuItem
              type="button"
              aria-label="Edit person"
              onClick={() => {
                setActiveMode("edit");
                setShowMenu(false);
              }}
            >
              Edit person
            </StyledMenuItem>
            <StyledMenuItem
              type="button"
              aria-label="Delete person"
              onClick={() => {
                setActiveMode("delete");
                setShowMenu(false);
              }}
            >
              Remove person
            </StyledMenuItem>
          </KebabMenu>
        </StyledPersonHeaderMenuWrapper>
      </StyledPersonHeader>
    </>
  );
}
