import {createSlice} from "@reduxjs/toolkit";
import type {Theme} from "../models/theme.ts";
import {theme} from "../styles/themes.ts";

export interface ThemeState {
    theme:Theme
}

const initialState:ThemeState ={
    theme:theme['light'],
}

export const themeSlice = createSlice({
    name:'themeList',
    initialState:initialState,
    reducers:{
        toggleActionTheme:(state)=>{
            state.theme = state.theme.name === 'dark' ? theme['light'] : theme['dark'];
        },
    }
})
export const {toggleActionTheme} = themeSlice.actions
export default themeSlice.reducer