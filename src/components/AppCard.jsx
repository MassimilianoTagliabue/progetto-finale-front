import VideogameDetail from "../pages/VideogameDetail";

const AppCard =({videogame}) =>{

    const Link = (id) => {

      window.location.href = "http://localhost:5173/videogame/" + id;
        
    }

    const printVideogame = () =>{

        return(
            <div >
                <div key={videogame.id} className="col-30">
                        <div className="relative ms-card" >
                            <div className="ms-info" onClick={() => Link(videogame.id)}>
                                <h1 >{videogame.title}</h1>
                                <h6>vai alle Info {'>'}</h6>
                            </div>
                            <img src={`${videogame.image}`} className="ms-img-card" />
                            <div className="bg-card card-position">
                               
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

    return (
        <>
            {printVideogame()}
        </>
    );
}

export default AppCard;