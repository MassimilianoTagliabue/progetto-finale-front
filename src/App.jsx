import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AppLayout from "./layout/AppLayout"
import GlobalContext from "./contexts/GlobalContext"
import { useEffect, useState } from "react"
import axios from "axios"
import VideogameDetail from "./pages/VideogameDetail"


const apiUrl = import.meta.env.VITE_API_URL;

function App() {


  const [videogame, setVideogame] = useState([]) //array di videogame

  useEffect(() =>{
    getVideogame();
  
  }, []);

  const getVideogame = () =>{
    axios.get(`${apiUrl}`).then((resp) =>{
      //console.log(resp.data);
      setVideogame(resp.data)

    })
  }


  const globalProviderValue = {
    videogame,
    setVideogame

  }

  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/videogame">
                <Route path=":id" element={<VideogameDetail/>}/>

              </Route>
            </Route>  
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
