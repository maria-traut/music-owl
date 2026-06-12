import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <h1>Music Owl (working title)</h1>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
