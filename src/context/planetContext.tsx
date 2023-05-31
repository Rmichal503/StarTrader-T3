import { useState, useEffect, createContext } from "react";

export const PlanetContext = createContext({
    currentPlanet:[],
    setCurrentPlanet: ()=>{},
    changePlanet:()=>{},
    planet:'',
    setPlanet:()=>{},
    travelPlanet:'',
    setTravelPlanet:()=>{},
})

export default function PlanetProvider({children}){
    const [currentPlanet, setCurrentPlanet] = useState([]);
    const [planet, setPlanet] = useState('');
    const [travelPlanet, setTravelPlanet] = useState('');

    const value = {currentPlanet,setCurrentPlanet,changePlanet,setPlanet,planet,travelPlanet,setTravelPlanet}
    return(<PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>)
}