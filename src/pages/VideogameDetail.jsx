import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function VideogameDetail() {


    const { id } = useParams();
    const [videogame, setVideogame] = useState();

    useEffect(() => {
        getVideogame();

    }, []);


    const getVideogame = () => {
        axios.get(`${apiUrl}/${id}`).then((resp) => {
            console.log(resp.data);
            setVideogame(resp.data);
        }).catch(err => {
            window.location.href = "http://localhost:5173/notfound";

        })
    }

    if (!videogame) return <div className="text-center mt-5">Caricamento in corso...</div>;

    return (
        <>
            <div className="col-6 mx-auto mt-4" data-bs-theme="dark">
                <h3 className="card-title my-3" >{videogame.title}</h3>
                <div className="card mb-3" >
                    <div>
                        <img src={videogame.image} className="img-fluid rounded " alt="..." width="800px" />

                        <div className="card-body">

                            <div className="card-text mb-2" >{videogame.description}</div>
                            <div className="card-text"><span className="text-body-secondary" >Editore: </span>{videogame.publisherName}</div>
                            <div className="card-text"><span className="text-body-secondary" >Download: </span>{videogame.download}</div>
                            <div className="card-text" ><span className="text-body-secondary">Memoria: </span> {videogame.sizeGB}</div>
                            <div className="card-text" ><span className="text-body-secondary">classificazione per età per: </span> {videogame.ageRating}</div>
                            <div className="card-text"><span className="text-body-secondary">Data di rilascio: </span>{videogame.releaseDate} </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex flex-wrap justify-content-start">
                                {videogame.categories.map((curCategories) => {

                                    return(
                                        <span key={curCategories.id} className="badge text-bg-primary mx-2 mb-3" >
                                            {curCategories.name}</span>
                                    )
                                })}

                            </li>   
                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}

export default VideogameDetail;