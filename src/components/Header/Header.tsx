import {HeaderBlock, HeaderContainer, HeaderLink} from "./Header.style.ts";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton.tsx";

const Header = () => {

    return (
        <HeaderBlock >
            <HeaderContainer>
               <ToggleThemeButton />
                <HeaderLink  to={'/'}>home</HeaderLink>
                <HeaderLink to={'/todo'}>ToDo</HeaderLink>
            </HeaderContainer>
        </HeaderBlock>
    )
}
export default Header;