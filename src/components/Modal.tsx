import MyTimer from "./Timer";

interface Modal {
    countdown:number
}

export default function Modal({countdown}:Modal){
    const timeCountdown = new Date();
    timeCountdown.setSeconds(timeCountdown.getSeconds()+ countdown)

    return(
        <div className="w-screen h-screen flex flex-col justify-center bg-slate-800 absolute inset-0 bg-[url('/pngegg.png')] bg-no-repeat bg-cover bg-center">
            {countdown >0?<MyTimer expiryTimestamp={timeCountdown} />:null}
        </div>
    )
}