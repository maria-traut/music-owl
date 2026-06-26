import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { StyledApp, StyledH1 } from "@/components/Global/Global.styles";
import NavBar from "@/components/NavBar";
import BackToTopButton from "@/components/BackToTopButton";
import { Toaster } from "react-hot-toast";

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("An error occurred while fetching.");
    return res.json();
  });

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          success: {
            icon: null,
            duration: 4000,
            style: {
              background: "#10b981",
              color: "white",
              borderRadius: "var(--radius-element)",
              boxShadow: "0 4px 12px rgba(27, 58, 92, 0.1)",
              fontWeight: "500",
              fontSize: "14px",
              padding: "16px 20px",
              textAlign: "center",
            },
          },
          error: {
            icon: null,
            duration: 4000,
            style: {
              background: "salmon",
              color: "white",
              borderRadius: "var(--radius-element)",
              boxShadow: "0 4px 12px rgba(27, 58, 92, 0.1)",
              fontWeight: "500",
              fontSize: "14px",
              padding: "16px 20px",
              textAlign: "center",
            },
          },
        }}
      />
      <SWRConfig value={{ fetcher }}>
        <StyledApp>
          <StyledH1>Music Owl</StyledH1>
          <NavBar />
          <BackToTopButton />
          <Component {...pageProps} />
        </StyledApp>
      </SWRConfig>
    </>
  );
}
