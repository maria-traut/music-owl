import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <h1>Music Owl (working title)</h1>
      <Component {...pageProps} />
    </>
  );
}
