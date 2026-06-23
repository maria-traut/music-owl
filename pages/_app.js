import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { StyledApp, StyledH1 } from "@/components/Global/Global.styles";
import NavBar from "@/components/NavBar";
import BackToTopButton from "@/components/BackToTopButton";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <StyledApp>
        <StyledH1>Music Owl</StyledH1>
        <NavBar />
        <BackToTopButton />
        <Component {...pageProps} />
      </StyledApp>
    </SWRConfig>
  );
}
