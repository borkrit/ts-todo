import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {

    const activeLinkClasses = ({isActive}:{isActive:boolean})=>{
        return isActive ? `${classes.active} ${classes.link}` : ` ${classes.link}`
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink  className={activeLinkClasses} to={'/'}>home</NavLink>
                <NavLink className={activeLinkClasses} to={'/todo'}>ToDo</NavLink>
            </div>
        </header>
    )
}
export default Header;