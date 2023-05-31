import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import Modal from "./Modal";
import Planet from "./planet/Planet";

const CountdownTimer = () => {
    const router = useRouter()
  const [countdown, setCountdown] = useState(0);
  const [timer, setTimer] = useState(0);
  const [planet, setPlanet] = useState('');
  const [planetSearch, setPlanetSearch] = useState({});
  
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setPlanet(value);
    },
    // delay in ms
    1000
  );

  useEffect(() => {
    const fetchCountdown = async () => {
      const res = await axios.get("/api/timer");
      const { countdown } = await res.data
      setCountdown(countdown);
    };

    fetchCountdown();
  }, [timer]);

  const updateCountdown = async () => {
    await axios.post("/api/timer", {
        value: timer
      });
    router.reload()
  };
  const planetFeed =async () => {
    await fetch('/api/planet/planetseed')
  }
  const playerFeed =async () => {
    await axios.post('/api/actions/travel')
  }
  const planetDel =async () => {
    await fetch('/api/planet/delete')
  }
//   const planetGet = async ()=>{
//     const planetSearch = await axios.get('api/planet',{params:{planetName:planet}})
//     console.log(planetSearch.data);
//     setPlanetSearch(planetSearch.data)
//   }

  return (
    <>
      {countdown > 0 ? (
        <Modal countdown={countdown} />
      ) : (
        <div>
          <h1 className="text-slate-100">Countdown Timer: {countdown}</h1>
          <input
            type="number"
            onChange={(e) => {
              setTimer(Number(e.target.value));
            }}
          /><br/>
          <input
            type="text"
            onChange={(e) => {debounced(e.target.value);
            }}
          />
          <button onClick={updateCountdown}>Start</button>
          <button onClick={planetFeed}>feed</button>
          <button onClick={playerFeed}>create play</button>
          <button className="text-red-100" onClick={planetDel}>delete</button>
          {planet && <Planet planetName={planet}/>}
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
