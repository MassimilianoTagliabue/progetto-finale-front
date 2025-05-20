import { NavLink } from "react-router-dom";

function Header() {



    return (
        <>
            <nav className="navbar bg-dark p-3 "  data-bs-theme="dark">
                <div className="container-fluid mx-3">
                    <NavLink className="navbar-brand" to="/">Videogame</NavLink>
                    
                </div>
            </nav>
        </>
    );
}

export default Header;