import { createGlobalStyle } from "styled-components";
import { Roboto, Merriweather } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }



  :root {

	--app-background: #fcfafd;

  --body-font-family: ${roboto.style.fontFamily};
  --headline-font-family: ${merriweather.style.fontFamily};

	--main-100: hsl(52.1, 92.2%, 89.8%);
	--main-200: hsl(52.1, 92.2%, 79.8%);
	--main-300: hsl(52.1, 92.2%, 69.8%);
	--main-400: hsl(52, 92%, 60%); 
	--main-500: hsl(52.1, 92.2%, 49.8%);
	--main-600: hsl(52.1, 92.2%, 39.8%);
	--main-700: hsl(52.1, 92.2%, 29.8%);
	--main-800: hsl(52.1, 92.2%, 19.8%);
	--main-900: hsl(52.1, 92.2%, 9.8%);
  }

  body {
    margin: 0;
    font-family: var(--body-font-family);
    background-color: var(--app-background);
  }

  h1, h2, h3, h4, h5, h6 {
  font-family: var(--headline-font-family);
}
`;
