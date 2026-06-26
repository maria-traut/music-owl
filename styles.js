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
  --color-text-primary: #1B3A5C;
  --color-text-secondary: #1b3a5c99;
  --color-text-tertiary: #1B3A5C66; 
  --color-primary: #1B3A5C;
  --color-primary-hover: #16304d;
  --color-secondary: #4A6FA5;
  --color-danger-text: #fa8072;
  --color-danger: #b85450;
  --color-background: #f5f5f5;
  --color-border: #cccccc;
  --color-divider: #e0e0e0;
  --radius-card: 15px;
  --radius-element: 8px;
  --color-error: #fa8072;
  --color-success: #4a9b8e;
  }

  body {
    margin: 0;
    font-family: ${inter.style.fontFamily}, sans-serif;
    color: var(--color-text-primary);
    background-color: var(--app-background);
  }

 
  h1, h2, h3, h4, h5, h6 {
  font-family: ${inter.style.fontFamily}, sans-serif;
  font-weight: bold;
  color: var(--color-text-primary);
}
`;
