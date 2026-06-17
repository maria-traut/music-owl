import styled from "styled-components";
import { StyledButton } from "../Global/Global.styles";

export const StyledDetailCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  background-color: #fafaf8;
  overflow: hidden;
`;

export const StyledDetailColoredArea = styled.div`
  position: relative;
  height: 5rem;
  background-color: ${({ $color }) => $color};
`;

export const StyledDetailYear = styled.div`
  position: absolute;
  font-size: 0.65rem;
  color: white;
  background-color: #00000022;
  border-radius: 15px;
  padding: 2px 6px;
  right: 0.5rem;
  bottom: 0.5rem;
`;

export const StyledDetailName = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  justify-content: center;
  margin: 0.5rem;
`;

const StyledPersonDetailButton = styled.button`
  background-color: transparent;
  height: 1.2rem;
  width: 2rem;
  padding: 13px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
`;

export const StyledUpdateButton = styled(StyledPersonDetailButton)`
  transform: scaleX(-1);

  &:hover {
    background-color: #b4d4f7;
  }

  &:active {
    background-color: #b4d4f7;
  }
`;

export const StyledDeleteButton = styled(StyledPersonDetailButton)`
  &:hover {
    background-color: #e7a5a5;
  }

  &:active {
    background-color: #e7a5a5;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  gap: 0.7rem;
`;

export const StyledMessageAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledPlaylistSectionTitle = styled.h3`
  text-align: center;
  margin: 2.5rem 0 1rem 0;
`;
