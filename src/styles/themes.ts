import type {Theme} from "../models/theme.ts";

const light: Theme = {
    name: 'light',
    color:{
        backgroundPrimary:'#4682b4',
        backgroundSecondary:'lightgrey',
    }
}

const dark: Theme = {
    name:'dark',
    color:{
        backgroundPrimary:'black',
        backgroundSecondary:'grey',
    }
}

export const theme:ThemeState = {light,dark}

interface ThemeState {
    [key:string]:Theme
}