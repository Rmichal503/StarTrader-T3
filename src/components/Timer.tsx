import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useTimer } from "react-timer-hook";
import { PlanetContext } from "~/context/planetContext";

interface MyTimer {
    expiryTimestamp : Date
}

export default function MyTimer({ expiryTimestamp }:MyTimer) {
  
  const finishTravel = async()=>{
    const {data} = await axios.get('api/actions/travel');
    const {player} = data;
    console.log('player context',player);
    // setPlanetState(player?.travelPlanet)
    await axios.put('api/actions/travel',{
        arrival: player?.travelPlanet
    })
    // router.reload()
}

  const {setFinishTravelTo} = useContext(PlanetContext)
    const router = useRouter()
    const {
      seconds,
      minutes,
      hours,
    } = useTimer({ expiryTimestamp, onExpire: () => {
      finishTravel()
      router.reload()
    } 
    });
  
  
    return (
      <div className="text-center text-slate-50">
        <div className="text-2xl font-Stalin animate-pulse">
          <span>{hours>9?hours:`0${hours}`}</span>:<span>{minutes>9?minutes:`0${minutes}`}</span>:<span>{seconds>9?seconds:`0${seconds}`}</span>
        </div>
      </div>
    );
  }