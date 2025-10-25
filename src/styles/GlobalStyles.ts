import {createGlobalStyle} from 'styled-components';
import type {Theme} from "../models/theme.ts";

export const GlobalStyles = createGlobalStyle<{theme:Theme}>`
    * {
        box-sizing: border-box;
    }

    body {
        transition: background-color .2s ease-in-out;
        background-color: ${({theme})=>theme.color.backgroundSecondary};
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`