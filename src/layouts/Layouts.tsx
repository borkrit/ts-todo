import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";

const Layouts = ()=>{
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}
export default Layouts;