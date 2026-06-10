import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <h1>Title To Be Defined</h1>
      <Component {...pageProps} />
    </>
  );
}
