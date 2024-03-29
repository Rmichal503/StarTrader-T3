import { useRouter } from "next/router";
import { useTimer } from "react-timer-hook";

interface MyTimer {
    expiryTimestamp : Date
}

export default function MyTimer({ expiryTimestamp }:MyTimer) {
    const router = useRouter()
    const {
      seconds,
      minutes,
      hours,
    } = useTimer({ expiryTimestamp, onExpire: () => router.reload() });
  
  
    return (
      <div className="text-center text-slate-50">
        <div className="text-2xl font-Stalin animate-pulse">
          <span>{hours>9?hours:`0${hours}`}</span>:<span>{minutes>9?minutes:`0${minutes}`}</span>:<span>{seconds>9?seconds:`0${seconds}`}</span>
        </div>
      </div>
    );
  }