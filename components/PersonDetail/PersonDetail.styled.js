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

export const StyledPlaylistSectionTitle = styled.h3`
  text-align: center;
  margin: 2.5rem 0 1rem 0;
`;
