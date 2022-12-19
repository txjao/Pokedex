import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body{
        background-color: #E5E5E5;
        display: flex;
        justify-content: center;
    }

    span, p, strong{
        font-family: 'Inter', sans-serif;
    }
`