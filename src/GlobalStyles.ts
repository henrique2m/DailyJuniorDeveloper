import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
  --color-background: #292929;
  --color-container: #FFFFFF;
  --text-small-color: #404040;
  --color-border: #c4cdcd;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100vw;
  overflow-x: hidden;
}

body {
  background: var(--color-background);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

body,
input,
button,
textarea {
  color: var(--text-small-color);
  border: 0;
  box-shadow: 0 0 0 0;
  outline: 0;
}
`;
