import axios from "axios"

export default function Travel(){
    const checkTravel = async () =>{
        await axios.get('/api/actions/travel')
    }
    const travel = async () =>{
        await axios.put('/api/actions/travel')
    }

    return (
        <div>
            <button onClick={checkTravel}>Travel</button>
            <button className="text-2xl text-slate-300" onClick={travel}>TravelTo</button>
        </div>
    )
}