import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "../components/AppCard";
import { Link } from "react-router-dom";
import VideogameDetail from "./VideogameDetail";

function Homepage() {
    const globalProviderValue = useContext(GlobalContext);
    const { videogame, setVideogame } = globalProviderValue;
    const [search, setSearch] = useState("")

    // Filtra i videogiochi in base alla ricerca
    const filter = videogame.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="mt-3 d-flex justify-content-end">
                <form className="d-flex col-4 mx-4" data-bs-theme="dark" role="search" onSubmit={(e) => e.preventDefault()} >
                    <input className="form-control me-2" type="text" name="title" placeholder="Search" aria-label="Search"
                        autoComplete="off" value={search} onChange={(event) => setSearch(event.target.value)} />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </div>

            <div className="col-10 mx-auto flex-wrap mt-5 d-flex justify-content-between">

                {filter.length > 0 ? (
                    <>

                        {filter.map((curVideogame) =>
                            <div key={curVideogame.id} className="mb-5" >

                                <AppCard

                                    videogame={curVideogame}
                                />


                            </div>

                        )}
                        <div className="col-3 " >


                        </div>

                    </>

                ) : (
                    <div class="alert alert-light" role="alert">
                        Nessun videogioco presente al momento
                    </div>
                )}
            </div>
        </>
    )
}

export default Homepage;