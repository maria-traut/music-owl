import styled from "styled-components";
import { StyledMenuWrapper } from "../Global/Global.styles";

export const StyledPersonHeaderMenuWrapper = styled(StyledMenuWrapper)`
  position: relative;
  top: auto;
  right: auto;
  margin-left: auto;
`;

export const StyledPersonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 1rem 0 1.5rem 0;
`;

export const StyledColorAvatar = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const StyledPersonName = styled.h3`
  font-weight: 500;
  margin: 0;
`;

export const StyledPersonYear = styled.p`
  font-size: 12px;
  margin: 0;
  white-space: nowrap;
`;

export const StyledPlaylistSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

export const StyledPlaylistSectionTitle = styled.h2`
  text-align: left;
  margin: 0;
`;
