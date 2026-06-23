import styled from "styled-components";
import { StyledButton } from "../Global/Global.styles";

export const StyledBackToTopButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  width: 45px;
  height: 45px;
  padding: 0;
  overflow: visible;
  z-index: 10;
  background-color: #eaeae9;
`;
