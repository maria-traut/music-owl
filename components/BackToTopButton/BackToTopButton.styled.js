import styled from "styled-components";
import { StyledButton } from "../Global/Global.styles";

export const StyledBackToTopButton = styled(StyledButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 1.2rem;
  width: 45px;
  height: 45px;
  padding: 0;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
