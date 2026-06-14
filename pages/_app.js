import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import styled from "styled-components";
import NavBar from "@/components/NavBar";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

const StyledH1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <StyledH1>Music Owl</StyledH1>
      <NavBar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
