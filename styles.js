import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
	--app-background: #FAFAF8;
  --text-color: #1B3A5C;
  }

  body {
    margin: 0;
    font-family: ${inter.style.fontFamily}, sans-serif;
    color: var(--text-color);
    background-color: var(--app-background);
  }

 
  h1, h2, h3, h4, h5, h6 {
  font-family: ${inter.style.fontFamily}, sans-serif;
  font-weight: bold;
  color: var(--text-color);
}
`;
