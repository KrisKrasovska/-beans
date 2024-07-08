import { DefaultTheme, createGlobalStyle } from "styled-components";
import "modern-normalize";

interface Theme extends DefaultTheme {
  color: {
    primaryColor: string;
    bg: string;
	 bgMain: string;
	 secondaryColor: string;
  };
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: ${(p: { theme: Theme }) => p.theme.color.primaryColor};
	 min-height: 100vh;

  }
	 #root {
	 	 display:flex;
	 flex-direction:column;
	 min-height: 100vh;
	 }
	 main {
	 flex-grow: 1;
	 color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
	 background-color: ${(p: { theme: Theme }) => p.theme.color.bgMain};
	 }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
  cursor:pointer;
    text-decoration: none
  }
	 img {
	 width: 100%;
	 height: auto;
	 display:block;}
`;
