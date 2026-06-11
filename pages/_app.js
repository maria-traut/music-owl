import GlobalStyle from "../styles";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledH1>Music Owl</StyledH1>
      <Component {...pageProps} />
    </>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
