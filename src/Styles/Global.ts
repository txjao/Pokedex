import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #E5E5E5;
    }

    span, p, strong{
        font-family: 'Inter', sans-serif;
    }
`