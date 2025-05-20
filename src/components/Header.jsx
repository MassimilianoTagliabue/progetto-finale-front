import { NavLink } from "react-router-dom";

function Header() {



    return (
        <>
            <nav className="navbar bg-dark p-3 "  data-bs-theme="dark">
                <div className="container-fluid mx-3">
                    <NavLink className="navbar-brand" to="/">Videogame</NavLink>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Header;