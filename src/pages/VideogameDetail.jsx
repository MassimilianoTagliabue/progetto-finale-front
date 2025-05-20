import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function VideogameDetail () {

    const {id} = useParams();
    
    const [videogame, setVideogame] = useState();

    useEffect(() =>{
        getVideogame();
        
    },[]);


    const getVideogame = () =>{
        axios.get(`${apiUrl}/${id}`).then((resp) =>{
            console.log(resp.data);
            setVideogame(resp.data);
        })
    }
    
    

    return(
        <>
        <div class="col-6 mx-auto mt-4"  data-bs-theme="dark">  
        <h3 class="card-title my-3" >{videogame.title}</h3>
        <div class="card mb-3" >
            <div>
                <img src="" class="img-fluid rounded " alt="..." width="800px" />

                <div class="card-body">
                    
                    <div class="card-text mb-2" ></div>
                    <div class="card-text"><span class="text-body-secondary" >Editore: </span> </div>
                    <div class="card-text"><span class="text-body-secondary" >Download: </span> </div>
                    <div class="card-text" ><span class="text-body-secondary">Memoria: </span> </div>
                    <div class="card-text" ><span class="text-body-secondary">Classificazione per età per: </span> </div>
                    <div class="card-text"><span class="text-body-secondary">Data di rilascio: </span> </div>
                </div>
            </div>

        </div>

    </div>
        </>
    )
}

export default VideogameDetail;