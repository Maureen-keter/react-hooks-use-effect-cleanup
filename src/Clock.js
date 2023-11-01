import React, { useState, useEffect } from "react";

function Clock() {
  console.log("component rendering")
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID=
        setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup(){
      console.log('component cleaned')
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
