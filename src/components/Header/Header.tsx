import {HeaderBlock, HeaderContainer, HeaderLink} from "./Header.style.ts";

const Header = () => {


    return (
        <HeaderBlock >
            <HeaderContainer>
                <HeaderLink  to={'/'}>home</HeaderLink>
                <HeaderLink to={'/todo'}>ToDo</HeaderLink>
            </HeaderContainer>
        </HeaderBlock>
    )
}
export default Header;