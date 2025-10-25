
import {configureStore} from "@reduxjs/toolkit";

import todoReducer from './feature/todoList.ts'
import themeReducer from './feature/themeList.ts'

const saveToLocalStorage = (state:RootState) => {
    try {
        localStorage.setItem('appState', JSON.stringify(state));

    }catch(e){
        console.warn(e)
    }
}

const loadFromLocalStorage = (key: string) => {


    try {
        const appState = localStorage.getItem(key);

        if (!appState) return undefined;

        return JSON.parse(appState);
    }catch(e){
        console.warn(e)
        return undefined;
    }
}

export const store = configureStore({
    reducer: {
        "todoList":todoReducer,
        "themeList":themeReducer
    },
    preloadedState:loadFromLocalStorage('appState')
});

store.subscribe(()=>{
    saveToLocalStorage(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch