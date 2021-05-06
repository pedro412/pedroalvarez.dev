import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: sans-serif;
        font-size: 1.125rem;
        color: #08090a;
        background-color: #fff;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
