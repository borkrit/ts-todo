import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import {GlobalStyles} from "../styles/GlobalStyles.ts";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import type {RootState} from "../store.ts";

const Layouts = () => {
    const themeList = useSelector((state:RootState)=> state.themeList.theme)

    return (
        <>
            <ThemeProvider theme={themeList}>
                <GlobalStyles />
                <Header/>
                <Outlet/>
            </ThemeProvider>

        </>
    )
}
export default Layouts;