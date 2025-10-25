import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store.ts";
import {toggleActionTheme} from "../../feature/themeList.ts";
import {ToggleButton} from "./ToggleButton.ts";

const ToggleThemeButton = () => {
    const themeList = useSelector((state:RootState)=> state.themeList.theme)
    const dispatch = useDispatch();


    const toggleTheme = () => {
        dispatch(toggleActionTheme())
    }

    return (
        <ToggleButton onClick={toggleTheme}>{themeList.name}</ToggleButton>
    )
}
export default ToggleThemeButton;