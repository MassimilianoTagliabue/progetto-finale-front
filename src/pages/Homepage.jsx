import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "../components/AppCard";
import { Link } from "react-router-dom";
import VideogameDetail from "./VideogameDetail";

function Homepage() {
    const globalProviderValue = useContext(GlobalContext);
    const { videogame, setVideogame } = globalProviderValue;

    return (
        <>
            <div className="col-10 mx-auto flex-wrap mt-5 d-flex justify-content-between">
                {videogame.length > 0 ? (
                    <>

                    {videogame.map((curVideogame) =>
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
                    <p>
                        nessun videogame presente
                    </p>
                )}
            </div>
        </>
    )
}

export default Homepage;