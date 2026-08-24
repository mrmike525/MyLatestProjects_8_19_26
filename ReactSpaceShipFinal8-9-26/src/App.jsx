import {useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect} from "react";
import styles from "./App.module.css";
import {LoadingContext} from "./context/LoadingProvider.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import AppRoute from "./routes/AppRoute.jsx";
import Motto from "./components/Motto/Motto.jsx";
import Loading from "./components/Loading/Loading.jsx";
import SpaceTravelApi from "./services/SpaceTravelApi.js";

function App()
{
  const [allPlanets, setAllPlanets] = useState(null)
  const {isLoading, enableLoading, disableLoading} = useContext(LoadingContext);
  console.log(isLoading)

  useEffect(() => {
  const getPlanets = async () => {
    const response = await SpaceTravelApi.getPlanets();
    setAllPlanets(response.data);
    const  responseSpaceCrafts = await SpaceTravelApi.getSpacecrafts();
    console.log(responseSpaceCrafts.data)
  };

  getPlanets();
}, []);
  
 
  return (
    <>
      
        <div className={styles["app"]}>
        <BrowserRouter>  
        <header className={styles["app__header"]}>
            <NavigationBar/>
          </header>

          <main className={styles["app__main"]}>
            <AppRoute />
             {allPlanets === null ? <Loading/> : allPlanets.map(items=>{ 
              return <div key={items.id}>ID: {items.id} Name: {items.name} Current Population:{items.currentPopulation}</div>
            })}
          </main>
        </BrowserRouter>
        {true && <p>Help</p>}
      
            
          <footer className={styles["app__footer"]}>
          <Motto/>
          
          </footer>
        </div>
        
      

      {
        // todo render Loading based on its condition
        
      }
    </>
  );
}

export default App;
