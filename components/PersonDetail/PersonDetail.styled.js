import styled from "styled-components";
import keyframes from "styled-components";

export const StyledDetailCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  background-color: #fafaf8;
  overflow: visible;
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
  text-align: left;
  margin: 2.5rem 0 1rem 0;
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: transparent;

  width: 36px;
  height: 36px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background 120ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const StyledMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  min-width: 160px;

  background: #fafaf8;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;

  padding: 6px;

  z-index: 9999;

  animation: fadeIn 120ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledMenuItem = styled.button`
  background: transparent;
  border: none;

  padding: 10px 12px;
  border-radius: 8px;

  text-align: left;
  font-size: 0.95rem;

  cursor: pointer;

  width: 100%;

  transition: background 120ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;
