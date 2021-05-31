import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



:root {
  --violeta: #c3bce4;
  --magenta: #f0c4f3;
  --verde: #bce6c5;
  --amarillo: #c8f22f;
  --mostaza: #e6cccc;
}

* {
  outline: none;
}

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: "Poppins";
  font-weight: normal;
  letter-spacing: 0.2px;
  color: #545e6f;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
}

/* scrollbar */

::-webkit-scrollbar {
  -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
  width: 10px;
}

::-webkit-scrollbar-button:increment,
::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar:horizontal {
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

`;
export default GlobalStyle;
