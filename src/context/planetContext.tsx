import axios from "axios";
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
interface contextProps{
    children: React.ReactNode
}

interface Context{
    planetState:string,
    setPlanetState:Dispatch<SetStateAction<string>>,
    finishTravelTo:boolean,
    setFinishTravelTo:Dispatch<SetStateAction<boolean>>,

}

export const PlanetContext = createContext<Context>({
    planetState:'',
    setPlanetState: ()=>{/*do nothing*/},
    finishTravelTo:false,
    setFinishTravelTo:()=>{/*do nothing*/},
})

export const PlanetProvider: React.FC<contextProps> =({children})=>{
    const [planetState, setPlanetState] = useState('')
    const [finishTravelTo, setFinishTravelTo] = useState(false)

    // useEffect(()=>{
    //     // if(!finishTravelTo) return
    //     const finishTravel = async()=>{
    //         const {data} = await axios.get('api/actions/travel');
    //         const {player} = data;
    //         console.log('player context',player);
    //         setPlanetState(player?.travelPlanet)
    //         await axios.put('api/actions/travel',{
    //             arrival: player?.travelPlanet
    //         });
    //     }
    //     finishTravel()
    // },[finishTravelTo])
    useEffect(()=>{
        const fetchState=async()=>{
            const res = await axios.get('api/actions/travel');
            const {player} = res.data;
            setPlanetState(player?.currentPlanet);
        }
        fetchState()
    },[])

    const value = {planetState,setPlanetState,finishTravelTo, setFinishTravelTo}
    return(<PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>)
}