import { useEffect, useState } from "react";

function TodayTime(){
    
    const [currentTime,setCurrentTime] = useState(new Date())

    useEffect(()=>{
        const time = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);

        return () => clearInterval(time);

    },[])

    return (
        <>
            {
                currentTime.toLocaleTimeString("en-us",{
                    hour:"2-digit",
                    minute:"2-digit",
                    second:"2-digit"
                })
            }
        </>
    )
}

export default TodayTime;