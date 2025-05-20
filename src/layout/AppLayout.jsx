import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import AppCard from "../components/AppCard";

function AppLayout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <footer>
            
        </footer>
        </>
    )
}

export default AppLayout;