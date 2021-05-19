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

    h1 {
        font-size: 1.4em;
    }

    h2 {
        font-size: 1.2em;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 0.8rem;
    }
`;

export default GlobalStyle;
